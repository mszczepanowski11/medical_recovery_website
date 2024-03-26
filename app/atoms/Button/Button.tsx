import React, { FC } from 'react';

// Utils

// Components
import { ButtonWrapper } from './Button.styles';
import { ButtonSizes, ButtonColors } from './Button.variables';

type ButtonProps = {
  color?: keyof typeof ButtonColors;
  children?: any;
  text?: string;
  size?: keyof typeof ButtonSizes;
};

const Button: FC<ButtonProps> = function ({ color, children, text, size }) {
  return (
    <ButtonWrapper size={size} color={color}>
      {text || children}
    </ButtonWrapper>
  );
};

export default React.memo(Button);
