'use client';

import React, { FC, useCallback, useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';

// Utils
import { Flex, GridContainer, GridItem } from '@/app/utils/GlobalStyles';

// Components
import Image from 'next/image';
import { appointletCalendarUrl } from '@/app/utils/constans';
import Link from 'next/link';
import LangMenu from '@/app/molecules/LangMenu/LangMenu';
import Icon from '@/app/atoms/Icon/Icon';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import {
  HeaderWrapper,
  LinksWrapper,
  NavButton,
  RightWrapperSm,
  ShowHideMenuSmBtn,
} from './Header.styles';
import Text from '../../atoms/Text/Text';
import Button from '../../atoms/Button/Button';

type HeaderProps = {};

const Header: FC<HeaderProps> = function () {
  const tHeader = useTranslations('header');
  const tCta = useTranslations('cta');
  const [isMenuSmOpen, setIsMenuSmOpen] = useState(false);

  const handleLinkClick = useCallback(() => {
    setIsMenuSmOpen(false);
    if (document.body.classList.contains('header-open')) {
      document.body.classList.remove('header-open');
    }
  }, [setIsMenuSmOpen]);

  return (
    <HeaderWrapper>
      <GridContainer
        $padding="0.5rem 1rem"
        style={{
          position: 'relative',
          flexGrow: 1,
          overflow: 'visible',
          clipPath: 'none',
        }}
        $gridColsSm={2}
      >
        <GridItem
          $colStart={1}
          $colEnd={2}
          style={{ display: 'flex', alignItems: 'center' }}
        >
          <Link href="/">
            <Flex
              style={{
                position: 'relative',
                width: 130,
                aspectRatio: 522 / 124,
              }}
            >
              <Image src="/img/logo.svg" alt="Mental Recovery" fill />
            </Flex>
          </Link>
        </GridItem>
        <GridItem
          $colStart={2}
          $colEnd={6}
          $colStartSm={2}
          $colEndSm={3}
          as="nav"
        >
          <LinksWrapper $isOpen={isMenuSmOpen}>
            <ShowHideMenuSmBtn
              onClick={handleLinkClick}
              className="header-close-btn"
              style={{ padding: '0 0.5rem 0 0' }}
            >
              <Image
                src="/img/times.svg"
                alt="burger menu"
                width={24}
                height={24}
              />
            </ShowHideMenuSmBtn>
            <NavButton href="/about-us" onClick={handleLinkClick} prefetch>
              <Image
                className="header-menu-icon-sm"
                src="/img/about-us-icon.svg"
                alt="burger menu"
                width={19}
                height={19}
              />
              <Text noMargin fontWeight={500} noWrap>
                {tHeader('about_us')}
              </Text>
            </NavButton>
            <NavButton href="/offer" onClick={handleLinkClick} prefetch>
              <Image
                className="header-menu-icon-sm"
                src="/img/offer-icon.svg"
                alt="burger menu"
                width={19}
                height={19}
              />
              <Text noMargin fontWeight={500} noWrap>
                {tHeader('offer')}
              </Text>
            </NavButton>
            <NavButton href="/specialists" onClick={handleLinkClick} prefetch>
              <Image
                className="header-menu-icon-sm"
                src="/img/specialists-icon.svg"
                alt="burger menu"
                width={19}
                height={19}
              />
              <Text noMargin fontWeight={500} noWrap>
                {tHeader('specialists')}
              </Text>
            </NavButton>
            <NavButton href="/blog" onClick={handleLinkClick} prefetch>
              <Image
                className="header-menu-icon-sm"
                src="/img/blog-icon.svg"
                alt="burger menu"
                width={19}
                height={19}
              />
              <Text noMargin fontWeight={500} noWrap>
                {tHeader('blog')}
              </Text>
            </NavButton>
            <NavButton href="/contact" onClick={handleLinkClick} prefetch>
              <Image
                className="header-menu-icon-sm"
                src="/img/contact-icon.svg"
                alt="burger menu"
                width={19}
                height={19}
              />
              <Text noMargin fontWeight={500} noWrap>
                {tHeader('contact')}
              </Text>
            </NavButton>
            <LangMenu className="header-lang-wide" />
            <Button
              href={appointletCalendarUrl}
              target="_blank"
              className="header-meeting-btn"
              classNameWrapper="header-meeting-btn"
            >
              <Text noMargin fontWeight={500} noWrap>
                {tCta('arrange_meeting')}
              </Text>
            </Button>
          </LinksWrapper>
          <RightWrapperSm>
            <LangMenu />
            <ShowHideMenuSmBtn
              onClick={() => {
                setIsMenuSmOpen(true);
                if (!document.body.classList.contains('header-open')) {
                  document.body.classList.add('header-open');
                }
              }}
            >
              <Image
                src="/img/burger.svg"
                alt="burger menu"
                width={24}
                height={24}
              />
            </ShowHideMenuSmBtn>
          </RightWrapperSm>
        </GridItem>
      </GridContainer>
    </HeaderWrapper>
  );
};

export default React.memo(Header);
