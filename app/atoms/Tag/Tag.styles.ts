/* eslint-disable no-nested-ternary */
import { Colors } from '@/app/utils/constans';
import styled from 'styled-components';

// Utils

// Components

type TagWrapperType = {
  color?: keyof typeof Colors;
  height?: string;
  $active?: boolean | 1 | 0;
  $isClickable?: boolean | 1 | 0;
};

export const TagWrapper = styled.button<TagWrapperType>`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 0.2rem;
  height: ${({ height }) => height || '1.75rem'};
  padding: 0 0.75rem;
  border: 1px solid
    ${({ color }) => (color ? Colors[color] : Colors.stroke_tags)};
  border-radius: 0.875rem;
  background-color: ${({ color, $active }) =>
    $active
      ? color
        ? Colors[color]
        : Colors.background_tags_hover
      : color
        ? Colors.primitives_white
        : Colors.background_tags};
  transition: 0.2s;
  cursor: ${({ $isClickable }) => ($isClickable ? 'pointer' : 'default')};

  > * {
    cursor: ${({ $isClickable }) => ($isClickable ? 'pointer' : 'default')};
  }

  &:hover {
    background-color: ${({ color, $isClickable }) =>
      $isClickable
        ? color
          ? Colors[color]
          : Colors.background_tags_hover
        : undefined};
  }
`;
