/* eslint-disable no-plusplus */

'use client';

import React, { FC, useMemo } from 'react';

// Utils

// Components
import { Flex } from '@/app/utils/GlobalStyles';
import { TestimonialType } from '@/app/utils/fetchData';
import Text from '@/app/atoms/Text/Text';
import Image from 'next/image';
import { Colors } from '@/app/utils/constans';
import { TestimonialCardWrapper } from './TestimonialCard.styles';

const TestimonialCard: FC<TestimonialType> = function ({
  name_surname,
  image,
  comment,
  stars,
  date,
  source,
}) {
  const renderStars = useMemo(() => {
    const starsList = [];
    for (let i = 0; i < 5; i++) {
      starsList.push(
        <Image
          key={i}
          src={`/img/${stars >= i + 1 ? 'full-star' : 'empty-star'}.svg`}
          alt={`${stars >= i + 1 ? 'full-star' : 'empty-star'}`}
          width={14}
          height={14}
        />,
      );
    }
    return starsList;
  }, [stars]);

  return (
    <TestimonialCardWrapper>
      <Image
        src="/img/quote.svg"
        alt="quote"
        width={41}
        height={34}
        style={{ position: 'absolute', top: 0, right: '1rem' }}
      />
      <Flex
        $columnGap="0.75rem"
        $justifyContent="flex-start"
        $alignItems="center"
        $flexWrap="wrap"
        $rowGap="0.75rem"
        style={{
          paddingBottom: '1rem',
          width: '100%',
          borderBottom: `1px solid ${Colors.border}`,
        }}
      >
        <Image
          src={image?.url || '/img/testimonial-placeholder.png'}
          width={40}
          height={40}
          alt={name_surname}
          style={{ borderRadius: '50%' }}
        />
        <Text variant="h4" noWrap noMargin>
          {name_surname}
        </Text>
        <Flex $gap="0.1rem">{renderStars}</Flex>
      </Flex>
      <Text variant="p" noMargin style={{ maxWidth: '100%' }}>
        {comment}
      </Text>
      <Text variant="p" noMargin psmall color="text_secondary">
        {source} • {date}
      </Text>
    </TestimonialCardWrapper>
  );
};

export default React.memo(TestimonialCard);
