'use client';

import React, { CSSProperties, FC } from 'react';

// Utils
import { Colors } from '@/app/utils/constans';
import { TextVariants } from './Text.variables';

// Components
import { TextWrapper } from './Text.styles';

type TextProps = {
  children?: any;
  text?: string;
  variant?: keyof typeof TextVariants;
  psmall?: boolean;
  color?: keyof typeof Colors;
  bold?: boolean;
  light?: boolean;
  noMargin?: boolean;
  className?: string;
  noWrap?: boolean;
  forwardRef?: any;
  style?: CSSProperties;
  fontSize?: string;
  lineHeight?: number;
};

const Text: FC<TextProps> = function ({
  children,
  text,
  variant = 'p',
  psmall,
  color,
  bold,
  light,
  noMargin,
  className,
  noWrap,
  forwardRef,
  style,
  fontSize,
  lineHeight,
}) {
  return (
    <TextWrapper
      style={style}
      ref={forwardRef}
      $noWrap={noWrap}
      $psmall={!!psmall && (!variant || variant === 'p') ? 1 : 0}
      as={variant}
      color={color}
      $light={light}
      $bold={bold ? 1 : 0}
      $nomargin={noMargin ? 1 : 0}
      className={`${className || ''}`}
      $fontSize={fontSize}
      $lineHeight={lineHeight}
    >
      {text || children}
    </TextWrapper>
  );
};

export default React.memo(Text);
