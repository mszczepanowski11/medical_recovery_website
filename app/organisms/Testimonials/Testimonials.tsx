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

type TestimonialsProps = {
  testimonialsList: TestimonialType[];
  locale: 'en' | 'pl' | 'de';
};

const Testimonials: FC<TestimonialsProps> = function ({
  testimonialsList,
  locale,
}) {
  const t = useTranslations('testimonials');
  const [showMoreNumber, setShowMoreNumber] = useState(4);

  const renderTestimonials = useMemo(
    () =>
      testimonialsList
        ?.slice(0, showMoreNumber)
        .map((testimonial) => (
          <TestimonialCard
            key={testimonial.name_surname}
            {...testimonial}
            locale={locale}
          />
        )),
    [testimonialsList, showMoreNumber, locale],
  );

  return (
    <TestimonialsWrapper>
      <GridContainer
        $gridCols={1}
        $padding="8rem 1rem 0rem 1rem"
        $paddingMb="6rem 1rem 0rem 1rem"
        $paddingSm="0rem 1rem 0rem 1rem"
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
        $padding="3rem 1rem"
        $paddingSm="2rem 1rem 0 1rem"
        $paddingMb="2rem 1rem 0 1rem"
        $gridCols={1}
        $gridColsSm={1}
      >
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
