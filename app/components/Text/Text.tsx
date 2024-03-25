import React, { FC } from 'react';

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
};

const Text: FC<TextProps> = function ({
  children,
  text,
  variant = 'p',
  psmall,
  color,
  bold,
}) {
  return (
    <TextWrapper
      $psmall={!!psmall && (!variant || variant === 'p') ? 1 : 0}
      as={variant}
      color={color}
      bold={bold}
    >
      {text || children}
    </TextWrapper>
  );
};

export default React.memo(Text);
