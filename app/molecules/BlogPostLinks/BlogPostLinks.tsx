'use client';

import React, { FC, useMemo } from 'react';
import { useTranslations } from 'next-intl';

// Utils
import { headerHeight } from '@/app/utils/constans';
import useScrollTo from '@/app/utils/useScrollTo';

// Components
import { Flex } from '@/app/utils/GlobalStyles';
import Text from '@/app/atoms/Text/Text';
import { BlogPostLinksWrapper, LinkItem } from './BlogPostLinks.styles';

type BlogPostLinksProps = {
  content: {
    en: {
      raw: any;
    };
    pl: {
      raw: any;
    };
    de: {
      raw: any;
    };
  };
  locale: 'en' | 'pl' | 'de';
  className?: string;
};

const BlogPostLinks: FC<BlogPostLinksProps> = function ({
  content,
  locale,
  className,
}) {
  const t = useTranslations('blog_page');
  const { scrollTo } = useScrollTo();

  const contentLocalized = useMemo(
    () => (content ? content[locale] : null),
    [content, locale],
  );

  const renderLinks = useMemo(
    () =>
      contentLocalized?.raw?.children
        ?.filter((item: { type: string }) => item.type === 'heading-two')
        .map((item: { children: any[] }, index: number) => (
          <LinkItem
            key={item.children[0].text}
            onClick={() =>
              scrollTo(item.children[0].text, { offset: -headerHeight - 20 })
            }
          >
            <Text variant="h4" fontSize="1rem" noMargin textAlign="left">
              {`${index + 1}. `}
              {item.children[0].text}
            </Text>
          </LinkItem>
        )),
    [contentLocalized?.raw?.children, scrollTo],
  );

  return (
    <BlogPostLinksWrapper className={className}>
      <Flex $flexDirection="column" $rowGap="0.5rem">
        <Text
          variant="h3"
          noMargin
          fontSize="1.4rem"
          bold
          style={{ marginBottom: '0.75rem' }}
        >
          {t('table_of_contents_title')}
        </Text>
        {renderLinks}
      </Flex>
    </BlogPostLinksWrapper>
  );
};

export default React.memo(BlogPostLinks);
