'use client';

import React, { FC, useMemo } from 'react';
import { useLocale } from 'next-intl';

// Utils

// Components
import Icon from '@/app/atoms/Icon/Icon';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import { LangMenuWrapper, SelectedLangBtn } from './LangMenu.styles';

type LangMenuProps = {};

const LangMenu: FC<LangMenuProps> = function ({}) {
  const locale = useLocale();

  const renderCurrentLangFlag = useMemo(() => {
    return <Image src={`/img/${locale}`} alt={locale} width={27} height={20} />;
  }, [locale]);

  return (
    <LangMenuWrapper>
      <SelectedLangBtn>
        {renderCurrentLangFlag}
        <Icon icon={faAngleDown} />
      </SelectedLangBtn>
    </LangMenuWrapper>
  );
};

export default React.memo(LangMenu);
