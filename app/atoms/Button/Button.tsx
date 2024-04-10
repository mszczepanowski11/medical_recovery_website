import React, { CSSProperties, FC } from 'react';

// Utils

// Components
import Link from 'next/link';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { ButtonWrapper } from './Button.styles';
import { ButtonSizes, ButtonColors } from './Button.variables';
import Icon from '../Icon/Icon';

const ButtonWrapElement: FC<{ children: any; href?: string }> = ({
  children,
  href,
}) => {
  if (href) return <Link href={href}>{children}</Link>;
  return children;
};

type ButtonProps = {
  color?: keyof typeof ButtonColors;
  children?: any;
  text?: string;
  size?: keyof typeof ButtonSizes;
  href?: string;
  onClick?: () => void;
  iconRight?: IconDefinition;
  className?: string;
  style?: CSSProperties;
};

const Button: FC<ButtonProps> = function ({
  color,
  children,
  text,
  size,
  href,
  onClick,
  iconRight = faAngleRight,
  className,
  style,
}) {
  return (
    <ButtonWrapElement href={href}>
      <ButtonWrapper
        style={style}
        onClick={onClick}
        size={size}
        color={color}
        className={`${className || ''}`}
      >
        {text || children}
        {!!iconRight && (
          <Icon
            icon={iconRight}
            style={{ marginLeft: '0.35rem' }}
            className="button-icon"
          />
        )}
      </ButtonWrapper>
    </ButtonWrapElement>
  );
};

export default React.memo(Button);
