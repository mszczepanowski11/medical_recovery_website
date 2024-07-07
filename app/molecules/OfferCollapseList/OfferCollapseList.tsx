'use client';

import React, {
  FC,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { useMotionValue, useSpring, useTransform } from 'framer-motion';

// Utils
import { TextVariants } from '@/app/atoms/Text/Text.variables';

// Components
import { Flex } from '@/app/utils/GlobalStyles';
import Text from '@/app/atoms/Text/Text';
import Image from 'next/image';
import {
  CollapseItemTitle,
  CollapseItemWrapper,
  OfferCollapseListWrapper,
} from './OfferCollapseList.styles';

export const CollapseItem: FC<{
  active: boolean;
  onChange:
    | ((val: string | null) => void)
    | React.Dispatch<React.SetStateAction<string | null>>;
  title: string;
  description?: string;
  titleVariant?: keyof typeof TextVariants;
}> = ({ active, onChange, title, description, titleVariant }) => {
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
      <CollapseItemTitle
        as={description ? 'button' : 'div'}
        onClick={description ? onClick : undefined}
        style={{ cursor: description ? 'pointer' : 'default' }}
      >
        <Text
          variant={titleVariant || 'h3'}
          fontSize="1rem"
          noMargin
          textAlign="left"
          color="text_primary"
          style={{ cursor: 'pointer' }}
        >
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
  const [activeCollapse, setActiveCollapse] = useState<null | string>(null);

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
