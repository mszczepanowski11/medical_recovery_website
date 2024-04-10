/* eslint-disable no-nested-ternary */
import { Colors } from '@/app/utils/constans';
import styled from 'styled-components';
import { TextVariants } from './Text.variables';

// Utils

// Components

const getFont = (
  as: keyof typeof TextVariants | any,
  pSmall?: boolean | 1 | 0,
  $fontSize?: string,
  $lineHeight?: number,
) => {
  switch (as) {
    case 'p':
      return {
        fontSize: $fontSize || (pSmall ? '0.85rem' : '1rem'),
        lineHeight: $lineHeight || 1.4,
      };
    case 'span':
      return { fontSize: $fontSize || '1rem', lineHeight: $lineHeight || 1 };
    case 'label':
      return { fontSize: $fontSize || '1rem', lineHeight: $lineHeight || 1 };
    case 'h1':
      return { fontSize: $fontSize || '3.8rem', lineHeight: $lineHeight || 1 };
    case 'h2':
      return { fontSize: $fontSize || '2rem', lineHeight: $lineHeight || 1 };
    case 'h3':
      return { fontSize: $fontSize || '2rem', lineHeight: $lineHeight || 1 };
    case 'h4':
      return { fontSize: $fontSize || '1rem', lineHeight: $lineHeight || 1 };
    case 'h5':
      return { fontSize: $fontSize || '1rem', lineHeight: $lineHeight || 1 };
    default:
      return { fontSize: $fontSize || '1rem', lineHeight: $lineHeight || 1 };
  }
};

export type TextWrapperType = {
  as?: keyof typeof TextVariants;
  $psmall: boolean | 1 | 0;
  $bold?: boolean | 1 | 0;
  $light?: boolean | 1 | 0;
  color?: keyof typeof Colors;
  $nomargin?: boolean | 1 | 0;
  $noWrap?: boolean | 1 | 0;
  $fontSize?: string;
  $lineHeight?: number;
};

export const TextWrapper = styled.p<TextWrapperType>`
  margin: 0;
  margin-bottom: ${({ $nomargin }) => ($nomargin ? 0 : '1rem')};
  line-height: ${({ $psmall, as, $fontSize, $lineHeight }) =>
    getFont(as, $psmall, $fontSize, $lineHeight).lineHeight};
  color: ${({ color }) => (color ? Colors[color] : Colors.text_primary)};
  font-size: ${({ $psmall, as, $fontSize, $lineHeight }) =>
    getFont(as, $psmall, $fontSize, $lineHeight).fontSize};
  font-weight: ${({ $bold, $light }) => ($light ? 300 : $bold ? 800 : 500)};
  white-space: ${({ $noWrap }) => ($noWrap ? 'nowrap' : undefined)};
`;
