'use client';

import React, { FC, useMemo } from 'react';
import { useTranslations } from 'next-intl';

// Utils
import { Colors, headerHeight } from '@/app/utils/constans';
import useScrollTo from '@/app/utils/useScrollTo';

// Components
import { Flex } from '@/app/utils/GlobalStyles';
import Text from '@/app/atoms/Text/Text';
import { BlogPostLinksWrapper, LinkItem } from './BlogPostLinks.styles';

type BlogPostLinksProps = {
  content: {
    content_en: {
      raw: any;
    };
    content_pl: {
      raw: any;
    };
    content_de: {
      raw: any;
    };
  };
  locale: 'en' | 'pl' | 'de';
};

const BlogPostLinks: FC<BlogPostLinksProps> = function ({ content, locale }) {
  const t = useTranslations('blog_page');
  const { scrollTo } = useScrollTo();

  const contentLocalized = useMemo(
    () => (content ? content[`content_${locale}`] : null),
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
    <BlogPostLinksWrapper>
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
