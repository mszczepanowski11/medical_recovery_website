'use client';

import { createGlobalStyle, styled } from 'styled-components';
import {
  breakpoint,
  Colors,
  maxContainerWidth,
  COLORS,
  scrollbarWidth,
} from './constans';

const GlobalStyles = createGlobalStyle`
  :root{
    
    &::-webkit-scrollbar {
      width: ${scrollbarWidth}px;
    }

    &::-webkit-scrollbar-track {
      background: ${Colors.primitives_grey};  
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${Colors.primitives_green};
      border-radius: 20px; 
      border: 3px solid ${Colors.primitives_grey};
    }
  }

  html,
  body {
    padding: 0;
    margin: 0;
    background-color: ${Colors.primitives_grey};
    min-height: 110vh;
  }

  body {
    position: relative;
    overflow-x: hidden;
    background-color: ${Colors.primitives_grey};

    &::-webkit-scrollbar {
      width: ${scrollbarWidth}px;
    }

    &::-webkit-scrollbar-track {
      background: ${Colors.primitives_grey};  
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${Colors.primitives_green};
      border-radius: 20px; 
      border: 3px solid ${Colors.primitives_grey};
    }
  }

  html {
    font-size: 16px;
    --color-primitives-white: ${COLORS.primitives_white};
    --color-primitives-grey: ${COLORS.primitives_grey};
    --color-primitives-green: ${COLORS.primitives_green};
    --color-primitives-blue: ${COLORS.primitives_blue};
    --color-primitives-light-blue: ${COLORS.primitives_light_blue};
    --color-text-primary: ${COLORS.text_primary};
    --color-text-secondary: ${COLORS.text_secondary};
    --color-text-interactive: ${COLORS.text_interactive};
    --color-text-blue-label-primary: ${COLORS.text_blue_label_primary};
    --color-text-interactive-hover: ${COLORS.text_interactive_hover};
    --color-text-tags: ${COLORS.text_tags};
    --color-background-background-white: ${COLORS.background_background_white};
    --color-background-background-grey: ${COLORS.background_background_grey};
    --color-background-blue-hover: ${COLORS.background_blue_hover};
    --color-background-blue-active: ${COLORS.background_blue_active};
    --color-background-interactive: ${COLORS.background_interactive};
    --color-background-interactive-hover: ${COLORS.background_interactive_hover};
    --color-background-tags: ${COLORS.background_tags};
    --color-background-tags-hover: ${COLORS.background_tags_hover};
    --color-stroke-blue: ${COLORS.stroke_blue};
    --color-stroke-tags: ${COLORS.stroke_tags};
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
    font-size: 15px;
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
  box-shadow: 0 0 0 100vmax ${({ $bg }) => $bg || Colors.transparent};
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

export type FlexType = {
  $flexDirection?: 'column' | 'column-reverse' | 'row' | 'row-reverse';
  $justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  $alignItems?: 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline';
  $gap?: string;
  $flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  $margin?: string;
  $marginTop?: string;
  $marginRight?: string;
  $marginBottom?: string;
  $marginLeft?: string;
  $padding?: string;
  $paddingTop?: string;
  $paddingRight?: string;
  $paddingBottom?: string;
  $paddingLeft?: string;
};

export const Flex = styled.div<FlexType>`
  display: flex;
  flex-direction: ${({ $flexDirection }) => $flexDirection};
  justify-content: ${({ $justifyContent }) => $justifyContent};
  align-items: ${({ $alignItems }) => $alignItems};
  gap: ${({ $gap }) => $gap};
  flex-wrap: ${({ $flexWrap }) => $flexWrap};
  margin: ${({ $margin }) => $margin};
  margin-top: ${({ $marginTop }) => $marginTop};
  margin-right: ${({ $marginRight }) => $marginRight};
  margin-bottom: ${({ $marginBottom }) => $marginBottom};
  margin-left: ${({ $marginLeft }) => $marginLeft};
  padding: ${({ $padding }) => $padding};
  padding-top: ${({ $paddingTop }) => $paddingTop};
  padding-right: ${({ $paddingRight }) => $paddingRight};
  padding-bottom: ${({ $paddingBottom }) => $paddingBottom};
  padding-left: ${({ $paddingLeft }) => $paddingLeft};
`;

export default GlobalStyles;
