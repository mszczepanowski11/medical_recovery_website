'use client';

import React, { CSSProperties, FC } from 'react';

// Utils
import { Colors } from '@/app/utils/constans';

// Components
import Text from '@/app/atoms/Text/Text';
import Image from 'next/image';
import { WeHelpCardWrapper } from './WeHelpCard.styles';

type WeHelpCardProps = {
  iconSrc: string;
  title: string;
  desc: string;
  color: Colors | string;
  style?: CSSProperties;
};

const WeHelpCard: FC<WeHelpCardProps> = function ({
  iconSrc,
  title,
  desc,
  color,
  style,
}) {
  return (
    <WeHelpCardWrapper color={color} style={style}>
      <Image
        src={iconSrc}
        alt={title}
        width={60}
        height={60}
        style={{ marginBottom: '1rem' }}
      />
      <Text
        variant="h3"
        noMargin
        textAlign="center"
        fontSize="1.25rem"
        style={{ marginBottom: '0.2rem' }}
      >
        {title}
      </Text>
      <Text color="text_secondary" textAlign="center" noMargin fontWeight={500}>
        {desc}
      </Text>
    </WeHelpCardWrapper>
  );
};

export default React.memo(WeHelpCard);
