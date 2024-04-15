'use client';

import React, { FC } from 'react';

// Utils
import { Colors } from '@/app/utils/constans';

// Components
import { TagWrapper } from './Tag.styles';
import Text from '../Text/Text';

type TagProps = {
  tag: string;
  color?: keyof typeof Colors;
  height?: string;
  active?: boolean;
  onClick?: (tag: string) => void;
};

const Tag: FC<TagProps> = function ({ tag, color, height, active, onClick }) {
  return (
    <TagWrapper
      color={color}
      height={height}
      $active={active}
      onClick={() => (onClick ? onClick(tag) : undefined)}
      $isClickable={onClick ? 1 : 0}
    >
      <Text
        variant="label"
        noMargin
        color={color ? 'text_primary' : 'text_tags'}
        style={{ fontWeight: 500 }}
      >
        {tag}
      </Text>
    </TagWrapper>
  );
};

export default React.memo(Tag);
