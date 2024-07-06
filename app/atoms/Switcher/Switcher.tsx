'use client';

import React, { FC, useCallback, useState } from 'react';
import { useTranslations } from 'next-intl';

// Utils
import { Colors } from '@/app/utils/constans';

// Components
import { Flex } from '@/app/utils/GlobalStyles';
import { SwitcherWrapper } from './Switcher.styles';
import Text from '../Text/Text';

type SwitcherProps = {
  value?: boolean;
  onChange?: any;
  label?: string;
  labelChildren?: React.ReactNode;
  disabled?: boolean;
};

const Switcher: FC<SwitcherProps> = function ({
  value,
  onChange,
  label,
  labelChildren,
  disabled,
}) {
  const t = useTranslations();
  const [active, setActive] = useState(false);

  const handleChange = useCallback(() => {
    setActive((prev) => {
      if (onChange) onChange(!prev);
      return !prev;
    });
  }, [onChange]);

  return (
    <Flex $justifyContent="space-between" $alignItems="center" $gap="0.75rem">
      {!!label && (
        <Text
          variant="label"
          formFor={label}
          color={disabled ? 'border' : 'text_primary'}
          noMargin
        >
          {labelChildren || label}
        </Text>
      )}
      <SwitcherWrapper
        id={label}
        name={label}
        $active={active}
        onClick={() => handleChange()}
        disabled={disabled}
      />
    </Flex>
  );
};

export default React.memo(Switcher);
