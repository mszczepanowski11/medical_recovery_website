import React, { CSSProperties, FC, useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { useMotionValue, useSpring, motion } from 'framer-motion';
// Utils
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

// Components
import Link from 'next/link';
import { ButtonWrapper, LoadingWrapper } from './Button.styles';
import { ButtonSizes, ButtonColors } from './Button.variables';
import Icon from '../Icon/Icon';
import Text from '../Text/Text';

const ButtonWrapElement: FC<{
  children: any;
  href?: string;
  target?: '_blank';
  className?: string;
}> = ({ children, href, target, className }) => {
  if (href)
    return (
      <Link href={href} target={target} className={className}>
        {children}
      </Link>
    );
  return children;
};

type ButtonProps = {
  color?: keyof typeof ButtonColors;
  children?: any;
  text?: string;
  size?: keyof typeof ButtonSizes;
  href?: string;
  target?: '_blank';
  onClick?: () => void;
  iconRight?: IconDefinition | false;
  className?: string;
  style?: CSSProperties;
  type?: 'button' | 'submit' | 'reset';
  loading?: boolean;
  classNameWrapper?: string;
};

const Button: FC<ButtonProps> = function ({
  color,
  children,
  text,
  size,
  href,
  target,
  onClick,
  iconRight = faAngleRight,
  className,
  style,
  type,
  loading,
  classNameWrapper,
}) {
  const tCta = useTranslations('cta');
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);
  const dot1Value = useMotionValue(0);
  const dot2Value = useMotionValue(0);
  const dot3Value = useMotionValue(0);
  const dot1ValueOpacitySpring = useSpring(dot1Value);
  const dot2ValueOpacitySpring = useSpring(dot2Value);
  const dot3ValueOpacitySpring = useSpring(dot3Value);

  useEffect(() => {
    if (loading) {
      const intervId = setInterval(() => {
        dot1Value.set(1);
        setTimeout(() => {
          dot2Value.set(1);
          setTimeout(() => {
            dot3Value.set(1);
          }, 200);
          setTimeout(() => {
            dot1Value.set(0);
            dot2Value.set(0);
            dot3Value.set(0);
          }, 400);
        }, 200);
      }, 1000);
      setIntervalId(intervId);
    } else {
      setIntervalId((prev) => {
        if (prev) {
          clearInterval(prev);
        }
        return null;
      });
    }
    return () => {
      setIntervalId((prev) => {
        if (prev) {
          clearInterval(prev);
        }
        return null;
      });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  return (
    <ButtonWrapElement
      href={href}
      target={target}
      className={`${classNameWrapper || ''}`}
    >
      <ButtonWrapper
        style={style}
        onClick={onClick}
        size={size}
        color={color}
        className={`${className || ''}`}
        $hasIcon={!!iconRight}
        type={type}
      >
        {text || children}
        {!!iconRight && (
          <Icon
            icon={iconRight}
            style={{ marginLeft: '0.35rem' }}
            className="button-icon"
          />
        )}
        {loading && (
          <LoadingWrapper size={size}>
            <Text noMargin fontWeight={500} style={{ position: 'relative' }}>
              {tCta('sending')}
              <motion.span
                className="dot dot1"
                style={{
                  opacity: dot1ValueOpacitySpring,
                }}
              />
              <motion.span
                className="dot dot2"
                style={{ opacity: dot2ValueOpacitySpring, left: '110%' }}
              />
              <motion.span
                className="dot dot3"
                style={{ opacity: dot3ValueOpacitySpring, left: '115%' }}
              />
            </Text>
          </LoadingWrapper>
        )}
      </ButtonWrapper>
    </ButtonWrapElement>
  );
};

export default React.memo(Button);
