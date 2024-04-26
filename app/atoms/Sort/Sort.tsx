'use client';

import React, { FC, useCallback, useEffect, useMemo, useState } from 'react';
import { useTranslations } from 'next-intl';

// Utils
import { Colors } from '@/app/utils/constans';

// Components
import { Flex } from '@/app/utils/GlobalStyles';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { useMotionValue, useSpring } from 'framer-motion';
import { SortDropdown, SortOption, SortWrapper } from './Sort.styles';
import { SortValues } from './Sort.variables';
import Text from '../Text/Text';
import Icon from '../Icon/Icon';

type SortProps = {
  value: keyof typeof SortValues | undefined;
  onChange: (value: keyof typeof SortValues | undefined) => void;
};

const Sort: FC<SortProps> = function ({ value, onChange }) {
  const tSort = useTranslations('utils.sort');

  const [pointerEvents, setPointerEvents] = useState<'none' | 'auto'>('none');
  const isOpen = useMotionValue(0);
  const opacitySpring = useSpring(isOpen);

  const handleOnChange = useCallback(
    (valueItem: keyof typeof SortValues) => {
      onChange(value === valueItem ? undefined : valueItem);
    },
    [onChange, value],
  );

  const renderSortOptions = useMemo(
    () =>
      Object.keys(SortValues || {})?.map((item: any) => (
        <SortOption
          key={item}
          onClick={() => handleOnChange(item)}
          $active={value?.includes(item)}
        >
          <Text noMargin>{tSort(item)}</Text>
        </SortOption>
      )),
    [handleOnChange, tSort, value],
  );

  const onMenuOpenClick = useCallback(
    (isMainBtn?: boolean) => {
      isOpen.set(isOpen.get() || (isMainBtn && isOpen.get()) ? 0 : 1);
      setPointerEvents((prev) => (prev === 'auto' ? 'none' : 'auto'));
    },
    [isOpen],
  );

  const clickFunction = useCallback(
    (event: any) => {
      if (!event?.target?.classList?.contains('sort-items')) {
        isOpen.set(0);
        setPointerEvents('none');
      }
    },
    [isOpen],
  );

  useEffect(() => {
    document.addEventListener('click', clickFunction);
    document.addEventListener('scroll', clickFunction);
    document.addEventListener('resize', clickFunction);

    return () => {
      document.removeEventListener('click', clickFunction);
      document.removeEventListener('scroll', clickFunction);
      document.removeEventListener('resize', clickFunction);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div style={{ position: 'relative' }}>
      <SortWrapper onClick={() => onMenuOpenClick(true)} className="sort-items">
        <Flex
          $justifyContent="space-between"
          style={{ width: '100%', pointerEvents: 'none' }}
        >
          <Flex $gap="0.2rem" $alignItems="flex-end" style={{ flexGrow: 1 }}>
            <Text noMargin fontWeight={500}>
              {tSort('name')}
            </Text>
            {!!value && (
              <>
                <Text
                  noMargin
                  fontWeight={500}
                  style={{ marginLeft: '-0.15rem' }}
                >
                  :
                </Text>
                <Flex
                  style={{
                    position: 'relative',
                    width: '65%',
                    height: '100%',
                    overflow: 'hidden',
                    boxShadow: `inset -1rem 0 1rem ${Colors.primitives_white}`,
                  }}
                >
                  <Text
                    noMargin
                    psmall
                    noWrap
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      zIndex: -1,
                    }}
                  >
                    {tSort(value)}
                  </Text>
                </Flex>
              </>
            )}
          </Flex>
          <Icon
            icon={faAngleDown}
            color="text_primary"
            style={{ flexShrink: 0 }}
          />
        </Flex>
      </SortWrapper>
      <SortDropdown
        style={{ pointerEvents, opacity: opacitySpring }}
        className="sort-items"
      >
        {renderSortOptions}
      </SortDropdown>
    </div>
  );
};

export default React.memo(Sort);
