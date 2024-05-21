'use client';

import React, { FC, useEffect, useMemo, useRef, useState } from 'react';

// Utils

// Components
import { Flex } from '@/app/utils/GlobalStyles';
import Image from 'next/image';
import Text from '@/app/atoms/Text/Text';
import { useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Colors } from '@/app/utils/constans';
import { Instrument_Sans } from 'next/font/google';
import { astToHtmlString } from '@graphcms/rich-text-html-renderer';
import { addSizesToImgUrl } from '@/app/utils/utils';
import {
  ContentWrapper,
  FAQCardTitle,
  FAQCardWrapper,
  ShowMoreBtn,
} from './FAQCard.styles';

const instrument_sans = Instrument_Sans({ subsets: ['latin'] });

type FAQCardProps = {
  answer: any;
  question: string;
  active: boolean;
  onClick: () => void;
};

const FAQCard: FC<FAQCardProps> = function ({
  question,
  answer,
  active,
  onClick,
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  const [isOpen, setIsOpen] = useState(false);
  const openMotionValue = useMotionValue(0);
  const openTransValue = useTransform(
    openMotionValue,
    [0, 1],
    [
      3.625 * 16,
      (containerRef?.current?.offsetHeight || 0) + 3.625 * 16 + 2 || 3.625 * 16,
    ],
  );

  const openSpringValue = useSpring(openTransValue, {
    stiffness: 160,
    damping: 30,
  });

  useEffect(() => {
    if (active) {
      openMotionValue.set(1);
      setIsOpen(true);
    } else {
      openMotionValue.set(0);
      setIsOpen(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  const jsonContent = useMemo(
    () =>
      astToHtmlString({
        content: answer,
        renderers: {
          h2: (props) => {
            const { children } = props || {};
            const childrenTrim = children
              ?.replace('<b>', '')
              .replace('</b>', '');

            return `<h2 id="${childrenTrim}">${childrenTrim}</h2>`;
          },

          img: (props: any) => {
            const { src, height, width, handle } = props || {};

            const maxSizesStyle =
              width || height
                ? `style="${width ? `max-width: min(${width}px, calc(100vw - 3rem)); ` : ''}${
                    height ? `max-height: ${height}px; ` : ''
                  }"`
                : '';
            const mdSrc = addSizesToImgUrl(src, handle, width, height, 800);
            const smallSrc = addSizesToImgUrl(src, handle, width, height, 600);
            const mobileSrc = addSizesToImgUrl(src, handle, width, height, 400);
            return `
            <figure>
              <picture>
                ${
                  !!mobileSrc &&
                  `<source media="(max-width: 400px)" srcset="${mobileSrc}" />`
                }
                ${
                  !!smallSrc &&
                  `<source media="(max-width: 600px)" srcset="${smallSrc}" />`
                }
                ${
                  !!mdSrc &&
                  `<source media="(max-width: 800px)" srcset="${mdSrc}" />`
                }
                <img src="${src}" alt="blog" ${maxSizesStyle}  />
              </picture>
            </figure>`;
          },
        },
      }),
    [answer],
  );

  return (
    <FAQCardWrapper style={{ height: openSpringValue }}>
      <FAQCardTitle
        as="button"
        onClick={onClick}
        $rowGap="0.85rem"
        $alignItems="center"
        $justifyContent="space-between"
      >
        <Flex $columnGap="0.85rem" $alignItems="center">
          <Image
            src="/img/faq-question-mark.svg"
            alt="question"
            width={24}
            height={24}
          />
          <Text noMargin fontWeight={500}>
            {question}
          </Text>
        </Flex>
        <ShowMoreBtn>
          <Text noMargin fontWeight={500} fontSize="1.6rem">
            {isOpen ? '-' : '+'}
          </Text>
        </ShowMoreBtn>
      </FAQCardTitle>
      <Flex
        style={{
          padding:
            '1rem calc(24px + 0.85rem + 1rem) 0 calc(24px + 0.85rem + 1rem)',
          borderTop: `1px solid ${Colors.border}`,
        }}
        ref={containerRef}
      >
        <ContentWrapper
          className={instrument_sans.className}
          dangerouslySetInnerHTML={{
            __html: jsonContent,
          }}
        />
      </Flex>
    </FAQCardWrapper>
  );
};

export default React.memo(FAQCard);
