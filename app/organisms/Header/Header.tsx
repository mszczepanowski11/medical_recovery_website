'use client';

import React, { FC } from 'react';
import { useTranslations } from 'next-intl';

// Utils
import { Flex, GridContainer, GridItem } from '@/app/utils/GlobalStyles';

// Components
import Image from 'next/image';
import { HeaderWrapper, NavButton } from './Header.styles';
import Text from '../../atoms/Text/Text';
import Button from '../../atoms/Button/Button';

type HeaderProps = {};

const Header: FC<HeaderProps> = function () {
  const tHeader = useTranslations('header');
  const tCta = useTranslations('cta');

  return (
    <HeaderWrapper>
      <GridContainer $padding="0.5rem 1rem">
        <GridItem
          $colStart={1}
          $colEnd={2}
          style={{ display: 'flex', alignItems: 'center' }}
        >
          <Flex
            style={{ position: 'relative', width: 130, aspectRatio: 522 / 124 }}
          >
            <Image src="/img/logo.svg" alt="Mental Recovery" fill />
          </Flex>
        </GridItem>
        <GridItem $colStart={2} $colEnd={6} as="nav">
          <Flex
            $justifyContent="flex-end"
            $alignItems="center"
            $gap="1.6rem"
            style={{ height: '100%' }}
          >
            <NavButton>
              <Text noMargin>{tHeader('about_us')}</Text>
            </NavButton>
            <NavButton>
              <Text noMargin>{tHeader('offer')}</Text>
            </NavButton>
            <NavButton>
              <Text noMargin>{tHeader('blog')}</Text>
            </NavButton>
            <NavButton>
              <Text noMargin>{tHeader('contact')}</Text>
            </NavButton>
            <Button>
              <Text noMargin>{tCta('arrange_meeting')}</Text>
            </Button>
          </Flex>
        </GridItem>
      </GridContainer>
    </HeaderWrapper>
  );
};

export default React.memo(Header);
