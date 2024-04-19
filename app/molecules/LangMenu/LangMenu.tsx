'use client';

import React, { FC, useCallback, useEffect, useMemo, useState } from 'react';
import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';

// Utils
import { locales } from '@/i18n';

// Components
import Icon from '@/app/atoms/Icon/Icon';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { Flex } from '@/app/utils/GlobalStyles';
import Text from '@/app/atoms/Text/Text';

import { LangMenuWrapper, SelectedLangBtn } from './LangMenu.styles';

type LangMenuProps = {};

const LangMenu: FC<LangMenuProps> = function ({}) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [pointerEvents, setPointerEvents] = useState<'none' | 'auto'>('none');

  const isOpen = useMotionValue(0);

  const opacitySpring = useSpring(isOpen);

  const onMenuOpenClick = useCallback(
    (isMainBtn?: boolean) => {
      isOpen.set(isOpen.get() || (isMainBtn && isOpen.get()) ? 0 : 1);
      setPointerEvents((prev) => (prev === 'auto' ? 'none' : 'auto'));
    },
    [isOpen],
  );

  const handleLangChange = useCallback(
    (newLocale: typeof locale) => {
      const oldLocale = locale;
      document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000; SameSite=Lax`;

      router.replace(pathname.replace(`/${oldLocale}`, `/${newLocale}`), {
        scroll: false,
      });
    },
    [locale, pathname, router],
  );

  const renderLangFlag = useCallback((localeItem: typeof locale) => {
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
      locales.map((item) => (
        <SelectedLangBtn
          key={item}
          $noBorder
          onClick={() => handleLangChange(item)}
          className="lang-item"
        >
          {renderLangFlag(item)}
          <Text
            noMargin
            fontWeight={500}
            style={{ textTransform: 'uppercase' }}
            className="lang-item"
          >
            {item}
          </Text>
        </SelectedLangBtn>
      )),
    [handleLangChange, renderLangFlag],
  );

  const clickFunc = useCallback(
    (event: any) => {
      if (!event?.target?.classList?.contains('lang-item')) {
        isOpen.set(0);
        setPointerEvents('none');
      }
    },
    [isOpen],
  );

  useEffect(() => {
    document.onclick = clickFunc;
    document.onscroll = clickFunc;

    return () => {
      document.onclick = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <LangMenuWrapper className="lang-item">
      <SelectedLangBtn
        onClick={() => onMenuOpenClick(true)}
        className="lang-item"
        id="lang-item-main"
      >
        {renderLangFlag(locale)}
        <Icon icon={faAngleDown} style={{ pointerEvents: 'none' }} />
      </SelectedLangBtn>

      <motion.div
        className="sub-menu lang-item"
        style={{
          top: 'calc(100% + 10px)',
          opacity: opacitySpring,
          pointerEvents,
        }}
      >
        <Flex
          className="lang-dropdown-menu lang-item"
          $flexDirection="column"
          $gap="0.5rem"
        >
          {renderLanguages}
        </Flex>
      </motion.div>
    </LangMenuWrapper>
  );
};

export default React.memo(LangMenu);
