'use client';

import React, { FC, useEffect, useRef, useState } from 'react';

// Utils

// Components
import { Flex } from '@/app/utils/GlobalStyles';
import Image from 'next/image';
import Text from '@/app/atoms/Text/Text';
import { useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FAQCardWrapper, ShowMoreBtn } from './FAQCard.styles';

type FAQCardProps = {
  answer: string;
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

  return (
    <FAQCardWrapper onClick={onClick} style={{ height: openSpringValue }}>
      <Flex
        $rowGap="0.85rem"
        $alignItems="center"
        $justifyContent="space-between"
        style={{ width: '100%', paddingLeft: '1rem' }}
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
      </Flex>
      <Flex
        style={{
          padding:
            '1rem calc(24px + 0.85rem + 1rem) 0 calc(24px + 0.85rem + 1rem)',
          borderTop: `1px solid #d7d7d7`,
        }}
        ref={containerRef}
      >
        <Text color="text_secondary">{answer}</Text>
      </Flex>
    </FAQCardWrapper>
  );
};

export default React.memo(FAQCard);
