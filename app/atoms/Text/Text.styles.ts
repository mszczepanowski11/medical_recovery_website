/* eslint-disable no-nested-ternary */
import { Colors, breakpoint } from '@/app/utils/constans';
import styled from 'styled-components';
import { TextVariants } from './Text.variables';

// Utils

// Components

const getFontParams = (
  as: keyof typeof TextVariants | any,
  pSmall?: boolean | 1 | 0,
  $fontSize?: string,
  $lineHeight?: number,
  $fontSizeSm?: string,
) => {
  switch (as) {
    case 'p':
      return {
        fontSize: $fontSize || (pSmall ? '0.85rem' : '1rem'),
        lineHeight: $lineHeight || 1.5,
        fontWeight: 400,
        color: Colors.text_primary,
      };
    case 'span':
      return {
        fontSize: $fontSize || '1rem',
        fontSizeSm: $fontSizeSm || $fontSize || '2rem',
        lineHeight: $lineHeight || 1,
        fontWeight: 500,
        color: Colors.text_primary,
      };
    case 'label':
      return {
        fontSize: $fontSize || '0.85rem',
        lineHeight: $lineHeight || 1,
        fontWeight: 500,
        color: Colors.text_secondary_light,
      };
    case 'h1':
      return {
        fontSize: $fontSize || '4rem',
        fontSizeSm: $fontSize || '2.625rem',
        lineHeight: $lineHeight || 1.1,
        fontWeight: 600,
        color: Colors.text_primary,
      };
    case 'h2':
      return {
        fontSize: $fontSize || '2.625rem',
        fontSizeSm: $fontSizeSm || $fontSize || '2.1rem',
        lineHeight: $lineHeight || 1.3,
        fontWeight: 600,
        color: Colors.text_primary,
      };
    case 'h3':
      return {
        fontSize: $fontSize || '2rem',
        lineHeight: $lineHeight || 1,
        fontWeight: 600,
        color: Colors.text_primary,
      };
    case 'h4':
      return {
        fontSize: $fontSize || '1.25rem',
        lineHeight: $lineHeight || 1.2,
        fontWeight: 600,
        color: Colors.text_primary,
      };
    case 'h5':
      return {
        fontSize: $fontSize || '1rem',
        lineHeight: $lineHeight || 1,
        fontWeight: 600,
        color: Colors.text_primary,
      };
    default:
      return {
        fontSize: $fontSize || (pSmall ? '0.85rem' : '1rem'),
        lineHeight: $lineHeight || 1.33,
        fontWeight: 400,
        color: Colors.text_primary,
      };
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
  $textAlign?: 'left' | 'right' | 'center';
  $fontWeight?: number;
  $fontSizeSm?: string;
  $style?: any;
  $styleMd?: any;
  $styleSm?: any;
};

export const TextWrapper = styled.p<TextWrapperType>`
  margin: 0;
  margin-bottom: ${({ $nomargin }) => ($nomargin ? 0 : '1rem')};
  line-height: ${({ $psmall, as, $fontSize, $lineHeight }) =>
    getFontParams(as, $psmall, $fontSize, $lineHeight).lineHeight};
  color: ${({ color, $psmall, as, $fontSize, $lineHeight }) =>
    color
      ? typeof color === 'string' && color.includes('#')
        ? color
        : Colors[color]
      : getFontParams(as, $psmall, $fontSize, $lineHeight).color};
  font-size: ${({ $psmall, as, $fontSize, $lineHeight }) =>
    getFontParams(as, $psmall, $fontSize, $lineHeight).fontSize};
  font-weight: ${({
    $bold,
    $light,
    $psmall,
    as,
    $fontSize,
    $lineHeight,
    $fontWeight,
  }) =>
    $fontWeight ||
    ($light
      ? 300
      : $bold
        ? 800
        : getFontParams(as, $psmall, $fontSize, $lineHeight).fontWeight)};
  white-space: ${({ $noWrap }) => ($noWrap ? 'nowrap' : undefined)};
  text-align: ${({ $textAlign }) => $textAlign};
  ${({ $style }) => ({ ...($style || {}) })};

  @media (max-width: ${breakpoint.md}px) {
    ${({ $styleMd }) => ({ ...($styleMd || {}) })};
  }

  @media (max-width: ${breakpoint.sm}px) {
    font-size: ${({ $psmall, as, $fontSize, $lineHeight, $fontSizeSm }) =>
      getFontParams(as, $psmall, $fontSize, $lineHeight, $fontSizeSm)
        .fontSizeSm};
    ${({ $styleSm }) => ({ ...($styleSm || {}) })};
  }
`;
