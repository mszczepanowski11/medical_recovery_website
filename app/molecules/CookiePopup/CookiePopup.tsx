/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable jsx-a11y/anchor-is-valid */

'use client';

import React, { FC, useCallback, useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import Cookies from 'js-cookie';

// Utils
import { Colors } from '@/app/utils/constans';

// Components
import { GridContainer, GridItem } from '@/app/utils/GlobalStyles';
import Text from '@/app/atoms/Text/Text';
import Button from '@/app/atoms/Button/Button';
import Link from 'next/link';
import Icon from '@/app/atoms/Icon/Icon';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useMotionValue, useTransform } from 'framer-motion';
import {
  CloseBtn,
  CookieContainer,
  CookiePopupWrapper,
} from './CookiePopup.styles';

type CookiePopupProps = {
  locale: 'en' | 'pl' | 'de';
  cookiePopup: any;
};

const CookiePopup: FC<CookiePopupProps> = function ({ locale, cookiePopup }) {
  const t = useTranslations('cookie_policy');
  const [isOpen, setIsOpen] = useState(false);
  const cookieTransition = useMotionValue(0);
  const cookieTransitionValue = useTransform(
    cookieTransition,
    [0, 1],
    [1000, 0],
  );

  useEffect(() => {
    if (cookiePopup?.value === 'false' || !cookiePopup) {
      setIsOpen(true);
      setTimeout(() => {
        cookieTransition.set(1);
      }, 1000);
    }
  }, [cookiePopup, cookieTransition]);

  const closeCookiePopup = useCallback(() => {
    cookieTransition.set(0);
    setTimeout(() => {
      setIsOpen(false);
      Cookies.set('cookie_policy_closed', 'true', { expires: 999 });
    }, 1000);
  }, [cookieTransition]);

  if (!isOpen) return null;

  return (
    <CookiePopupWrapper style={{ y: cookieTransitionValue }}>
      <GridContainer $padding="0 1rem">
        <GridItem $colStart={3} $colEnd={5} $colStartSm={1} $colEndSm={3}>
          <CookieContainer>
            <Text variant="h4">{t('title')}</Text>
            <Text psmall>
              {t.rich('description', {
                a: (chunks) => (
                  <Link
                    href={`/${locale}/privacy-policy`}
                    style={{
                      textDecoration: 'underline',
                      textDecorationColor: Colors.background_interactive_hover,
                    }}
                  >
                    {chunks}
                  </Link>
                ),
              })}
            </Text>
            <Button iconRight={false} onClick={closeCookiePopup}>
              <Text noMargin fontSize="1rem" fontWeight={500}>
                {t('okay_btn')}
              </Text>
            </Button>
            <CloseBtn onClick={closeCookiePopup}>
              <Icon icon={faTimes} color="text_secondary" />
            </CloseBtn>
          </CookieContainer>
        </GridItem>
      </GridContainer>
    </CookiePopupWrapper>
  );
};

export default React.memo(CookiePopup);
