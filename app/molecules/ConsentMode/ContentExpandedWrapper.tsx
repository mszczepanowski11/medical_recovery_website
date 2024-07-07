'use client';

import React, { FC, useState } from 'react';
import { useTranslations } from 'next-intl';

// Utils
import { Colors } from '@/app/utils/constans';

// Components
import Switcher from '@/app/atoms/Switcher/Switcher';
import Text from '@/app/atoms/Text/Text';
import { ContentExpandedWrapperWrapper } from './ConsentMode.styles';
import { CollapseItem } from '../OfferCollapseList/OfferCollapseList';

type ContentExpandedWrapperProps = { forwardRef: any };

const ContentExpandedWrapper: FC<ContentExpandedWrapperProps> = function ({
  forwardRef,
}) {
  const t = useTranslations('cookie_policy');
  const [activeItem, setActiveItem] = useState<any>(null);

  return (
    <ContentExpandedWrapperWrapper ref={forwardRef}>
      <Text>
        Poniżej opisujemy cele i funkcje przetwarzania Twoich danych osobowych.
        Pamiętaj, że zawsze możesz je dowolnie skonfigurować.
      </Text>
      <Switcher
        label={
          <CollapseItem
            active={activeItem === t('default_cookies')}
            onChange={() =>
              setActiveItem((prev: any) => {
                if (prev === t('default_cookies')) return null;
                return t('default_cookies');
              })
            }
            title={t('default_cookies')}
            description={`${t('default_cookies')} ${t('default_cookies')} ${t('default_cookies')}`}
            titleVariant="span"
          />
        }
      />
      <Switcher
        label={
          <CollapseItem
            active={activeItem === t('default_cookies')}
            onChange={() =>
              setActiveItem((prev: any) => {
                if (prev === t('default_cookies')) return null;
                return t('default_cookies');
              })
            }
            title={t('default_cookies')}
            description={`${t('default_cookies')} ${t('default_cookies')} ${t('default_cookies')}`}
            titleVariant="span"
          />
        }
      />
      <Switcher
        label={
          <CollapseItem
            active={activeItem === t('default_cookies')}
            onChange={() =>
              setActiveItem((prev: any) => {
                if (prev === t('default_cookies')) return null;
                return t('default_cookies');
              })
            }
            title={t('default_cookies')}
            description={`${t('default_cookies')} ${t('default_cookies')} ${t('default_cookies')}`}
            titleVariant="span"
          />
        }
      />
      <Switcher
        label={
          <CollapseItem
            active={activeItem === t('default_cookies')}
            onChange={() =>
              setActiveItem((prev: any) => {
                if (prev === t('default_cookies')) return null;
                return t('default_cookies');
              })
            }
            title={t('default_cookies')}
            description={`${t('default_cookies')} ${t('default_cookies')} ${t('default_cookies')}`}
            titleVariant="span"
          />
        }
      />
      <Switcher
        label={
          <CollapseItem
            active={activeItem === t('default_cookies')}
            onChange={() =>
              setActiveItem((prev: any) => {
                if (prev === t('default_cookies')) return null;
                return t('default_cookies');
              })
            }
            title={t('default_cookies')}
            description={`${t('default_cookies')} ${t('default_cookies')} ${t('default_cookies')}`}
            titleVariant="span"
          />
        }
      />
      <Switcher
        label={
          <CollapseItem
            active={activeItem === t('default_cookies')}
            onChange={() =>
              setActiveItem((prev: any) => {
                if (prev === t('default_cookies')) return null;
                return t('default_cookies');
              })
            }
            title={t('default_cookies')}
            description={`${t('default_cookies')} ${t('default_cookies')} ${t('default_cookies')}`}
            titleVariant="span"
          />
        }
      />
    </ContentExpandedWrapperWrapper>
  );
};

export default React.memo(ContentExpandedWrapper);
