'use client';

import React, { FC } from 'react';
import { useTranslations } from 'next-intl';

// Utils
import { Colors } from '@/app/utils/constans';

// Components
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { InputElement, InputWrapper } from './Input.styles';
import Text from '../Text/Text';
import Icon from '../Icon/Icon';

type InputProps = {
  value: string | number | undefined;
  onChange: (value: string) => void;
  label?: string;
  placeholder?: string;
  iconRight?: IconDefinition;
  name?: string;
};

const Input: FC<InputProps> = function ({
  value,
  onChange,
  label,
  placeholder,
  iconRight,
  name,
}) {
  const t = useTranslations();

  return (
    <InputWrapper>
      {!!label && (
        <Text
          variant="label"
          formFor={label || name}
          style={{ display: 'block', marginBottom: '0.4rem' }}
        >
          {label}
        </Text>
      )}
      <InputElement
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        $hasIcon={!!iconRight}
        name={label || name}
      />
      {!!iconRight && (
        <Icon
          icon={iconRight}
          style={{
            position: 'absolute',
            bottom: '1.5rem',
            right: '1.5rem',
            translate: '50% 50%',
          }}
        />
      )}
    </InputWrapper>
  );
};

export default React.memo(Input);
