'use client';

import React, { FC } from 'react';
import { useTranslations } from 'next-intl';

// Utils
import { Flex } from '@/app/utils/GlobalStyles';

// Components
import { HeaderWrapper } from './Header.styles';
import Text from '../../atoms/Text/Text';
import Button from '../../atoms/Button/Button';

type HeaderProps = {};

const Header: FC<HeaderProps> = function () {
  const t = useTranslations('Index');
  return (
    <HeaderWrapper>
      <Flex>
        <Text variant="h1">{t('title')}</Text>
      </Flex>
      <Flex $gap="2rem" $alignItems="center" $marginBottom="2rem">
        <Button size="small">aaa</Button>
        <Button>aaa</Button>
        <Button color="primary" size="large">
          aaa
        </Button>
      </Flex>
      <Flex $gap="2rem" $alignItems="center">
        <Button size="small" color="secodnary">
          aaa
        </Button>
        <Button color="secodnary">aaa</Button>
        <Button color="secodnary" size="large">
          aaa
        </Button>
      </Flex>
    </HeaderWrapper>
  );
};

export default React.memo(Header);
