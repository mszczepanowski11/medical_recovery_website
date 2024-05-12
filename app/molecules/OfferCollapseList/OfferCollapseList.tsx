'use client';

import React, {
  FC,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { useTranslations } from 'next-intl';

// Utils
import { Colors } from '@/app/utils/constans';

// Components
import { Flex, GridContainer, GridItem } from '@/app/utils/GlobalStyles';
import { useMotionValue, useSpring, useTransform } from 'framer-motion';
import Text from '@/app/atoms/Text/Text';
import Image from 'next/image';
import {
  CollapseItemTitle,
  CollapseItemWrapper,
  OfferCollapseListWrapper,
} from './OfferCollapseList.styles';

const CollapseItem: FC<{
  active: boolean;
  onChange:
    | ((val: string | null) => void)
    | React.Dispatch<React.SetStateAction<string | null>>;
  title: string;
  description?: string;
}> = ({ active, onChange, title, description }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const openMotionValue = useMotionValue(0);
  const openTransValue = useTransform(
    openMotionValue,
    [0, 1],
    [3 * 16, (containerRef?.current?.offsetHeight || 0) + 3 * 16 + 2 || 3 * 16],
  );

  const openSpringValue = useSpring(openTransValue, {
    stiffness: 160,
    damping: 30,
  });

  const onClick = useCallback(() => {
    if (active) onChange(null);
    else onChange(title);
  }, [active, onChange, title]);

  useEffect(() => {
    if (active) {
      openMotionValue.set(1);
    } else {
      openMotionValue.set(0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  return (
    <CollapseItemWrapper style={{ height: openSpringValue }}>
      <CollapseItemTitle onClick={description ? onClick : undefined}>
        <Text variant="h3" fontSize="1rem" noMargin textAlign="left">
          {title}
        </Text>
        {!!description && (
          <Image
            src={`/img/${!active ? 'chevron-down.svg' : 'chevron-up.svg'}`}
            alt="Arrow"
            width={12}
            height={6}
            style={{ marginRight: 5, pointerEvents: 'none' }}
          />
        )}
      </CollapseItemTitle>
      {!!description && (
        <Flex ref={containerRef}>
          <Text color="text_secondary">{description}</Text>
        </Flex>
      )}
    </CollapseItemWrapper>
  );
};

type OfferCollapseListProps = {
  items: { title: string; description?: string }[];
};

const OfferCollapseList: FC<OfferCollapseListProps> = function ({ items }) {
  const t = useTranslations();
  const [activeCollapse, setActiveCollapse] = useState<null | string>(null);

  useEffect(() => {
    console.log('activeCollapse', activeCollapse);
  }, [activeCollapse]);

  const renderCollapseItem = useMemo(
    () =>
      items?.map((item) => (
        <CollapseItem
          key={item.title}
          active={activeCollapse === item.title}
          title={item.title}
          description={item.description}
          onChange={setActiveCollapse}
        />
      )),
    [activeCollapse, items],
  );

  return (
    <OfferCollapseListWrapper>{renderCollapseItem}</OfferCollapseListWrapper>
  );
};

export default React.memo(OfferCollapseList);
