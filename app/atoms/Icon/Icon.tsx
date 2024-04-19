import React, { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

// Utils

// Components
import { Colors } from '@/app/utils/constans';
import { CSSProperties } from 'styled-components';
import { IconWrapper } from './Icon.styles';

type IconProps = {
  icon: IconDefinition;
  color?: keyof typeof Colors;
  size?: number;
  style?: CSSProperties;
  className?: string;
  iconStyle?: CSSProperties;
};

const Icon: FC<IconProps> = function ({
  icon,
  color,
  size,
  style,
  className,
  iconStyle,
}) {
  return (
    <IconWrapper style={style} className={className}>
      <FontAwesomeIcon
        icon={icon}
        color={color ? Colors[color] : undefined}
        height={size ? `${size}rem` : '1rem'}
        width={size ? `${size}rem` : '1rem'}
        style={iconStyle}
      />
    </IconWrapper>
  );
};

export default React.memo(Icon);
