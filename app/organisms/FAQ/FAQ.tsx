'use client';

import React, { FC, useMemo, useState } from 'react';
import { useTranslations } from 'next-intl';

// Utils

// Components
import { Flex, GridContainer, GridItem } from '@/app/utils/GlobalStyles';
import Text from '@/app/atoms/Text/Text';
import FAQCard from '@/app/molecules/FAQCard/FAQCard';
import { FAQWrapper } from './FAQ.styles';

type FAQProps = {
  questions: {
    question: { en: string; pl: string; de: string };
    answer: { en: string; pl: string; de: string };
  }[];
  locale: 'en' | 'pl' | 'de';
};

const FAQ: FC<FAQProps> = function ({ questions, locale }) {
  const t = useTranslations('faq');

  const [activeCard, setActiveCard] = useState<string | null>(null);

  const renderQuestions = useMemo(
    () =>
      questions?.map(
        (q: {
          question: {
            en: string;
            pl: string;
            de: string;
          };
          answer: { en: string; pl: string; de: string };
        }) => (
          <FAQCard
            key={q.question[locale]}
            question={q.question[locale]}
            answer={q.answer[locale]}
            active={activeCard === q.question[locale]}
            onClick={() =>
              setActiveCard((prev) =>
                prev === q.question[locale] ? null : q.question[locale],
              )
            }
          />
        ),
      ),
    [activeCard, questions, locale],
  );

  return (
    <FAQWrapper>
      <GridContainer
        $gridCols={1}
        $padding="4rem 1rem 0rem 1rem"
        $bg="#fafafa"
        $gap="0.75rem"
        $gridColsSm={1}
      >
        <GridItem>
          <Text
            variant="h2"
            noMargin
            textAlign="center"
            style={{ maxWidth: 600, margin: 'auto' }}
          >
            {t('title')}
          </Text>
        </GridItem>
      </GridContainer>
      <GridContainer
        $bg="#fafafa"
        $padding="2rem 1rem 4rem 1rem"
        $gridColsSm={1}
      >
        <GridItem $colStart={1} $colEnd={5}>
          <Flex
            $flexDirection="column"
            $rowGap="1rem"
            style={{ maxWidth: '700px', margin: 'auto' }}
          >
            {renderQuestions}
          </Flex>
        </GridItem>
      </GridContainer>
    </FAQWrapper>
  );
};

export default React.memo(FAQ);
