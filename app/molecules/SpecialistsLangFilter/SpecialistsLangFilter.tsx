'use client';

import React, { FC, useCallback, useEffect, useMemo, useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion, useMotionValue, useSpring } from 'framer-motion';

// Utils

// Components
import Text from '@/app/atoms/Text/Text';
import Icon from '@/app/atoms/Icon/Icon';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import { Flex } from '@/app/utils/GlobalStyles';
import {
  LangMenuWrapper,
  SelectedLangBtn,
  SpecialistsLangFilterWrapper,
} from './SpecialistsLangFilter.styles';

type SpecialistsLangFilterProps = {
  langs: { id: string; name: string }[];
  selectedLangs: string[];
  setSelectedLangs: any;
};

const SpecialistsLangFilter: FC<SpecialistsLangFilterProps> = function ({
  langs,
  selectedLangs,
  setSelectedLangs,
}) {
  const tSpecialists = useTranslations('our_specialists');
  const [pointerEvents, setPointerEvents] = useState<'none' | 'auto'>('none');

  const isOpen = useMotionValue(0);
  const opacitySpring = useSpring(isOpen);

  const renderSelectedLangsNames = useMemo(
    () =>
      selectedLangs
        ?.map((item) => langs?.find((el) => el.id === item)?.name)
        .join(', ') || tSpecialists('lang_filter_all'),
    [selectedLangs, langs, tSpecialists],
  );

  const onMenuOpenClick = useCallback(
    (isMainBtn?: boolean) => {
      isOpen.set(isOpen.get() || (isMainBtn && isOpen.get()) ? 0 : 1);
      setPointerEvents((prev) => (prev === 'auto' ? 'none' : 'auto'));
    },
    [isOpen],
  );

  const renderLangFlag = useCallback((localeItem: string) => {
    return (
      <Image
        src={`/img/${localeItem}.svg`}
        alt={localeItem}
        width={27}
        height={20}
        style={{ pointerEvents: 'none' }}
      />
    );
  }, []);

  const renderLanguages = useMemo(
    () =>
      langs?.map((item) => {
        return (
          <SelectedLangBtn
            key={item.id}
            $noBorder
            onClick={() =>
              setSelectedLangs((prev: string[]) => {
                const newLangs = [...prev];
                const index = newLangs.indexOf(item.id);
                if (index === -1) return [...newLangs, item.id];
                newLangs.splice(index, 1);

                return newLangs;
              })
            }
            className="specialists-filter-lang-item"
            $active={selectedLangs.includes(item.id)}
          >
            {renderLangFlag(item.id)}
            <Text
              noMargin
              fontWeight={500}
              style={{ textTransform: 'uppercase' }}
              className="specialists-filter-lang-item"
            >
              {item.name}
            </Text>
          </SelectedLangBtn>
        );
      }),
    [langs, renderLangFlag, selectedLangs, setSelectedLangs],
  );

  const clickFunction = useCallback(
    (event: any) => {
      if (!event?.target?.classList?.contains('specialists-filter-lang-item')) {
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
    <SpecialistsLangFilterWrapper>
      <Text noMargin psmall color="text_secondary" fontWeight={500}>
        {tSpecialists('lang_filter_title')}
      </Text>
      <LangMenuWrapper>
        <SelectedLangBtn
          onClick={() => onMenuOpenClick(true)}
          className="specialists-filter-lang-item"
        >
          {renderSelectedLangsNames}
          <Icon icon={faAngleDown} style={{ pointerEvents: 'none' }} />
        </SelectedLangBtn>
        <motion.div
          className="sub-menu specialists-filter-lang-item"
          style={{
            top: 'calc(100% + 10px)',
            opacity: opacitySpring,
            pointerEvents,
            zIndex: 10,
          }}
        >
          <Flex
            className="lang-dropdown-menu specialists-filter-lang-item"
            $flexDirection="column"
            $gap="0.5rem"
          >
            {renderLanguages}
          </Flex>
        </motion.div>
      </LangMenuWrapper>
    </SpecialistsLangFilterWrapper>
  );
};

export default React.memo(SpecialistsLangFilter);
