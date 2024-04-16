/* eslint-disable react/jsx-props-no-spreading */

'use client';

import React, { FC, useMemo, useState } from 'react';
import { useTranslations } from 'next-intl';

// Utils

// Components
import { Flex, GridContainer, GridItem } from '@/app/utils/GlobalStyles';
import { TestimonialType } from '@/app/utils/fetchData';
import TestimonialCard from '@/app/molecules/TestimonialCard/TestimonialCard';
import Text from '@/app/atoms/Text/Text';
import Button from '@/app/atoms/Button/Button';
import { TestimonialsWrapper } from './Testimonials.styles';

type TestimonialsProps = { testimonialsList: TestimonialType[] };

const Testimonials: FC<TestimonialsProps> = function ({ testimonialsList }) {
  const t = useTranslations('testimonials');
  const [showMoreNumber, setShowMoreNumber] = useState(4);

  const renderTestimonials = useMemo(
    () =>
      testimonialsList
        ?.slice(0, showMoreNumber)
        .map((testimonial) => (
          <TestimonialCard key={testimonial.name_surname} {...testimonial} />
        )),
    [testimonialsList, showMoreNumber],
  );

  return (
    <TestimonialsWrapper>
      <GridContainer
        $gridCols={1}
        $padding="4rem 1rem 0rem 1rem"
        $gap="0.75rem"
        $gridColsSm={1}
      >
        <GridItem $rowStart={1} $rowEnd={2} $rowStartSm={1} $rowEndSm={2}>
          <Text
            variant="p"
            noMargin
            psmall
            color="text_secondary"
            textAlign="center"
            fontWeight={500}
          >
            {t('second_title')}
          </Text>
        </GridItem>
        <GridItem $rowStart={2} $rowEnd={3} $rowStartSm={2} $rowEndSm={3}>
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
      <GridContainer $gridCols={1} $gridColsSm={1}>
        <GridItem $colStart={1} $colEnd={2}>
          <Flex $gap="2rem" $flexWrap="wrap">
            {renderTestimonials}
          </Flex>
        </GridItem>
        {showMoreNumber < testimonialsList.length && (
          <GridItem>
            <Flex $justifyContent="center" $marginTop="2rem">
              <Button
                color="transparent"
                iconRight={false}
                onClick={() => setShowMoreNumber((prev) => prev + 1)}
              >
                <Text variant="p" noMargin fontWeight={500}>
                  {t('check_more_btn')}
                </Text>
              </Button>
            </Flex>
          </GridItem>
        )}
      </GridContainer>
    </TestimonialsWrapper>
  );
};

export default React.memo(Testimonials);
