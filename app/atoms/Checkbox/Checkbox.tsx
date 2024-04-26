'use client';

import React, { CSSProperties, FC, useEffect } from 'react';
import { useMotionValue, useSpring, useTransform, motion } from 'framer-motion';

// Utils
import { Colors } from '@/app/utils/constans';

// Components
import Image from 'next/image';
import {
  CheckboxButton,
  CheckboxWrapper,
  InsideCircle,
} from './Checkbox.styles';
import Text from '../Text/Text';

type CheckboxProps = {
  checked: boolean;
  onChange: any;
  label: string;
  type?: 'checkbox' | 'radio';
  style?: CSSProperties;
  buttonStyle?: CSSProperties;
};

const Checkbox: FC<CheckboxProps> = function ({
  checked,
  onChange,
  label,
  type = 'checkbox',
  style,
  buttonStyle,
}) {
  const checkedValue = useMotionValue(checked ? 1 : 0);
  const checkedValueSize = useTransform(
    checkedValue,
    [0, 1],
    [0, type === 'checkbox' ? 16 : 10],
  );
  const checkedValueOpacity = useTransform(checkedValue, [0, 1], [0, 1]);
  const checkedValueSizeSpring = useSpring(checkedValueSize);
  const checkedValueOpacitySpring = useSpring(checkedValueOpacity);

  useEffect(() => {
    checkedValue.set(checked ? 1 : 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checked]);

  return (
    <CheckboxWrapper
      onClick={() => onChange(!checked)}
      $checkedItem={checked}
      style={style}
      type="button"
    >
      <CheckboxButton
        className="checkbox-radio"
        style={{
          borderColor: checked ? Colors.text_interactive : Colors.border,
          ...buttonStyle,
        }}
        type={type}
      >
        <InsideCircle
          style={{
            width: checkedValueSizeSpring,
            height: checkedValueSizeSpring,
            borderRadius: type === 'checkbox' ? '0.2rem' : '50%',
          }}
        />
        {type === 'checkbox' && (
          <motion.div
            style={{
              position: 'absolute',
              top: 'calc(0.5rem)',
              left: 0,
              translate: '2px -9px',
              opacity: checkedValueOpacitySpring,
            }}
          >
            <Image
              src="/img/check-mini.svg"
              alt="check"
              width={10}
              height={8}
            />
          </motion.div>
        )}
      </CheckboxButton>
      <Text noMargin textAlign="left">
        {label}
      </Text>
    </CheckboxWrapper>
  );
};

export default React.memo(Checkbox);
