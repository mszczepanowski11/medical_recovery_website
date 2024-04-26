'use client';

import React, { FC, useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

// Utils
import { Colors } from '@/app/utils/constans';

// Components
import {
  CheckboxButton,
  CheckboxWrapper,
  InsideCircle,
} from './Checkbox.styles';
import Text from '../Text/Text';

type CheckboxProps = { checked: boolean; onChange: any; label: string };

const Checkbox: FC<CheckboxProps> = function ({ checked, onChange, label }) {
  const t = useTranslations();

  const checkedValue = useMotionValue(checked ? 1 : 0);
  const checkedValueSize = useTransform(checkedValue, [0, 1], [0, 10]);
  const checkedValueSizeSpring = useSpring(checkedValueSize);

  useEffect(() => {
    checkedValue.set(checked ? 1 : 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checked]);

  return (
    <CheckboxWrapper onClick={() => onChange()} $checkedItem={checked}>
      <CheckboxButton
        className="checkbox-radio"
        style={{
          borderColor: checked ? Colors.text_interactive : Colors.border,
        }}
      >
        <InsideCircle
          style={{
            width: checkedValueSizeSpring,
            height: checkedValueSizeSpring,
          }}
        />
      </CheckboxButton>
      <Text noMargin textAlign="left">
        {label}
      </Text>
    </CheckboxWrapper>
  );
};

export default React.memo(Checkbox);
