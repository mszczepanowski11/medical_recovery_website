'use client';

import React, { FC, useMemo, useState } from 'react';
import { useTranslations } from 'next-intl';

// Utils

// Components
import Switcher from '@/app/atoms/Switcher/Switcher';
import Text from '@/app/atoms/Text/Text';
import { ContentExpandedWrapperWrapper } from './ConsentMode.styles';
import { CollapseItem } from '../OfferCollapseList/OfferCollapseList';

type ContentExpandedWrapperProps = {
  forwardRef: any;
  cookieTypes: {
    id: string;
    name: string;
    description: string;
    value: boolean;
    disabled?: boolean;
  }[];
  consentModeValues: any;
  setConsentModeValues: any;
};

const ContentExpandedWrapper: FC<ContentExpandedWrapperProps> = function ({
  forwardRef,
  cookieTypes,
  consentModeValues,
  setConsentModeValues,
}) {
  const t = useTranslations('cookie_policy');
  const [activeItem, setActiveItem] = useState<any>(null);

  const renderConsentSwitchers = useMemo(
    () =>
      cookieTypes?.map((item) => (
        <Switcher
          key={item.name}
          value={consentModeValues[item.id]}
          onChange={(val: boolean) => {
            setConsentModeValues((prev: any) => ({ ...prev, [item.id]: val }));
          }}
          disabled={item.disabled}
          label={
            <CollapseItem
              active={activeItem === item.id}
              onChange={() =>
                setActiveItem((prev: any) => {
                  if (prev === item.id) return null;
                  return item.id;
                })
              }
              title={item.name}
              description={item.description}
              titleVariant="span"
              styleDescription={{ fontSize: '0.8rem' }}
            />
          }
        />
      )),
    [cookieTypes, consentModeValues, activeItem, setConsentModeValues],
  );

  return (
    <ContentExpandedWrapperWrapper ref={forwardRef}>
      <Text noMargin fontSize="0.9rem">
        {t('consent_mode_desc')}
      </Text>
      {renderConsentSwitchers}
    </ContentExpandedWrapperWrapper>
  );
};

export default React.memo(ContentExpandedWrapper);
