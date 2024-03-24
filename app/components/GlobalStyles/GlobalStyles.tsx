'use client';

import { createGlobalStyle, styled } from 'styled-components';
import {
  breakpoint,
  Colors,
  maxContainerWidth,
  COLORS,
  scrollbarWidth,
} from '../../utils/constans';

const GlobalStyles = createGlobalStyle`
  :root{
    
    &::-webkit-scrollbar {
      width: ${scrollbarWidth}px;
    }

    &::-webkit-scrollbar-track {
      background: ${COLORS.primaryLight};  
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${COLORS.primary};
      border-radius: 20px; 
      border: 3px solid ${COLORS.primaryLight};
    }
  }

  html,
  body {
    padding: 0;
    margin: 0;
    background-color: ${Colors.white};
    min-height: 110vh;
  }

  body {
    position: relative;
    overflow-x: hidden;
    background-color: ${Colors.white};

    &::-webkit-scrollbar {
      width: ${scrollbarWidth}px;
    }

    &::-webkit-scrollbar-track {
      background: ${COLORS.primaryLight};  
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${COLORS.primary};
      border-radius: 20px; 
      border: 3px solid ${COLORS.primaryLight};
    }
  }

  html {
    font-size: 19px;
    --color-white: ${COLORS.white};
    --color-white-hover: ${COLORS.whiteHover};
    --color-black: ${COLORS.black};
    --color-primary: ${COLORS.primary};
    --color-primary-mid-light: ${COLORS.primaryMidLight};
    --color-primary-light: ${COLORS.primaryLight};
    --color-secondary: ${COLORS.secondary};
    --color-ternary: ${COLORS.ternary};
    --color-ternary-light: ${COLORS.ternaryLight};
    --color-quadrary: ${COLORS.quadrary};
    --color-border: ${COLORS.border};
    --color-text: ${COLORS.text};
    --color-transparent: ${COLORS.transparent};
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box
  }

  
  @media (max-width: ${breakpoint.sm}px) {
    font-size: 16px;
  }
`;

type GridContainerProps = {
  $bg?: (typeof Colors)[keyof typeof Colors];
  $gridRows?: number;
  $gridRowsMb?: number;
  $gridRowsSm?: number;
  $gridCols?: number;
  $gridColsMb?: number;
  $gridColsSm?: number;
  $gap?: string;
  $rowGapMb?: string;
  $rowGapSm?: string;
  $height?: string;
  $minHeight?: string;
  $maxHeight?: string;
  $maxWidth?: string;
  $padding?: string;
  $paddingMb?: string;
  $paddingSm?: string;
  $margin?: string;
  $marginSm?: string;
  $styleMd?: any;
  $styleSm?: any;
};
type GridItemProps = {
  $bg?: Colors | string;
  $colStart?: number;
  $colEnd?: number;
  $rowStart?: number;
  $rowEnd?: number;
  $colStartMb?: number;
  $colEndMb?: number;
  $rowStartMb?: number;
  $rowEndMb?: number;
  $colStartSm?: number;
  $colEndSm?: number;
  $rowStartSm?: number;
  $rowEndSm?: number;
  $padding?: string;
  $paddingMb?: string;
  $paddingSm?: string;
  $margin?: string;
  $marginSm?: string;
  $alignSelf?: 'center' | 'stretch' | 'start' | 'end';
  $alignSelfSm?: 'center' | 'stretch' | 'start' | 'end';
  $minHeight?: string;
  $styleMd?: any;
  $styleSm?: any;
};

export const GridContainer = styled.section<GridContainerProps>`
  display: grid;
  grid-template-columns: ${({ $gridCols }) =>
    $gridCols
      ? `repeat(${$gridCols}, minmax(0, 1fr))`
      : 'repeat(5, minmax(0, 1fr))'};
  grid-template-rows: ${({ $gridRows }) => `${$gridRows || 1}fr`};
  gap: ${({ $gap }) => $gap || '1rem'};
  height: ${({ $height }) => $height || 'auto'};
  min-height: ${({ $minHeight, $maxHeight }) =>
    $maxHeight
      ? `min(${$maxHeight || $minHeight}, ${$minHeight})` || 'auto'
      : $minHeight || 'auto'};
  max-height: ${({ $maxHeight }) => $maxHeight || 'auto'};
  max-width: ${({ $maxWidth }) =>
    $maxWidth || `calc(${maxContainerWidth}px + 2rem)`};
  min-width: min(calc(100% - 2rem), calc(${maxContainerWidth}px + 2rem));
  margin: ${({ $margin }) => $margin || 'auto'};
  padding: ${({ $padding }) => $padding || '4rem 1rem'};
  background-color: ${({ $bg }) => $bg || Colors.transparent};
  box-shadow: 0 0 0 100vmax ${({ $bg }) => $bg || Colors.white};
  clip-path: inset(0 -100vmax);

  @media (max-width: ${breakpoint.md}px) {
    grid-template-columns: ${({ $gridColsMb, $gridCols }) =>
      `repeat(${$gridColsMb || $gridCols || 5}, minmax(0, 1fr))`};
    grid-template-rows: ${({ $gridRowsMb, $gridRows }) =>
      `${$gridRowsMb || $gridRows || 1}fr`};
    padding: ${({ $padding, $paddingMb }) =>
      $paddingMb || $padding || '4rem 1rem'};
    row-gap: ${({ $gap, $rowGapMb }) => $rowGapMb || $gap || '1rem'};
    ${({ $styleMd }) => ({ ...($styleMd || {}) })};
  }

  @media (max-width: ${breakpoint.sm}px) {
    grid-template-columns: ${({ $gridColsSm }) =>
      $gridColsSm ? `${$gridColsSm}fr` : 'repeat(2, minmax(0, 1fr))'};
    grid-template-rows: ${({ $gridRowsSm }) =>
      $gridRowsSm ? `${$gridRowsSm}fr` : '2fr'};
    row-gap: ${({ $gap, $rowGapSm, $rowGapMb }) =>
      $rowGapSm || $rowGapMb || $gap || '1rem'};
    padding: ${({ $padding, $paddingSm }) =>
      $paddingSm || $padding || '4rem 1rem'};
    margin: ${({ $margin, $marginSm }) => $marginSm || $margin || 'auto'};
    ${({ $styleSm }) => ({ ...($styleSm || {}) })};
  }
`;

export const GridItem = styled.div<GridItemProps>`
  grid-column-start: ${({ $colStart }) => $colStart || 'auto'};
  grid-column-end: ${({ $colEnd }) => $colEnd || 'auto'};
  grid-row-start: ${({ $rowStart }) => $rowStart || 'auto'};
  grid-row-end: ${({ $rowEnd }) => $rowEnd || 'auto'};
  padding: ${({ $padding }) => $padding || '0'};
  margin: ${({ $margin }) => $margin || '0'};
  align-self: ${({ $alignSelf }) => $alignSelf || 'stretch'};
  background-color: ${({ $bg }) => $bg || 'transparent'};
  min-height: ${({ $minHeight }) => $minHeight || 'auto'};

  @media (max-width: ${breakpoint.md}px) {
    grid-column-start: ${({ $colStartMb }) => $colStartMb};
    grid-column-end: ${({ $colEndMb }) => $colEndMb};
    grid-row-start: ${({ $rowStartMb }) => $rowStartMb};
    grid-row-end: ${({ $rowEndMb }) => $rowEndMb};
    ${({ $styleMd }) => ({ ...($styleMd || {}) })};
  }

  @media (max-width: ${breakpoint.sm}px) {
    grid-template-columns: 1fr;
    grid-column-start: ${({ $colStartSm, $colStartMb }) =>
      $colStartSm || $colStartMb || '1'};
    grid-column-end: ${({ $colEndSm, $colEndMb }) =>
      $colEndSm || $colEndMb || '2'};
    grid-row-start: ${({ $rowStartSm, $rowStartMb }) =>
      $rowStartSm || $rowStartMb || '1'};
    grid-row-end: ${({ $rowEndSm, $rowEndMb }) =>
      $rowEndSm || $rowEndMb || '1'};
    align-self: ${({ $alignSelf, $alignSelfSm }) =>
      $alignSelfSm || $alignSelf || 'stretch'};
    padding: ${({ $padding, $paddingSm }) => $paddingSm || $padding || '0'};
    margin: ${({ $margin, $marginSm }) => $marginSm || $margin || '0'};
    ${({ $styleSm }) => ({ ...($styleSm || {}) })};
  }
`;

export default GlobalStyles;
