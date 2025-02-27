'use client';

import React, { FC, useCallback, useState } from 'react';

// Utils
import { Colors } from '@/app/utils/constans';

// Components
import { Flex } from '@/app/utils/GlobalStyles';
import { SwitcherWrapper } from './Switcher.styles';
import Text from '../Text/Text';

type SwitcherProps = {
  value?: boolean;
  onChange?: any;
  label?: string | React.ReactNode;
  disabled?: boolean;
};

const Switcher: FC<SwitcherProps> = function ({
  value,
  onChange,
  label,
  disabled,
}) {
  return (
    <Flex
      $justifyContent="space-between"
      $alignItems="flex-start"
      $gap="0.75rem"
    >
      {!!label && (
        <Text
          variant="label"
          color={disabled ? 'border' : 'text_primary'}
          noMargin
        >
          {label}
        </Text>
      )}
      <SwitcherWrapper
        $active={!!value}
        onClick={() => onChange(!value)}
        disabled={disabled}
      />
    </Flex>
  );
};

export default React.memo(Switcher);
