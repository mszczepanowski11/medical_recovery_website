'use client';

import React, { FC, useCallback, useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
// Utils
import { Flex, GridContainer, GridItem } from '@/app/utils/GlobalStyles';

// Components
import Image from 'next/image';
import Link from 'next/link';
import LangMenu from '@/app/molecules/LangMenu/LangMenu';
import {
  HeaderWrapper,
  LinksWrapper,
  LogoWrapper,
  NavButton,
  RightWrapperSm,
  ShowHideMenuSmBtn,
} from './Header.styles';
import Text from '../../atoms/Text/Text';
import Button from '../../atoms/Button/Button';

type HeaderProps = { locale: 'en' | 'pl' | 'de' };

const Header: FC<HeaderProps> = function ({ locale }) {
  const tHeader = useTranslations('header');
  const tCta = useTranslations('cta');
  const tMeta = useTranslations('meta');
  const pathname = usePathname();
  const [isMenuSmOpen, setIsMenuSmOpen] = useState(false);
  const [currentPsychologistUrl, setCurrentPsychologistUrl] = useState<
    null | string
  >(null);

  const handleLinkClick = useCallback(() => {
    setIsMenuSmOpen(false);
    if (document.body.classList.contains('header-open')) {
      document.body.classList.remove('header-open');
    }
  }, [setIsMenuSmOpen]);

  useEffect(() => {
    setCurrentPsychologistUrl(window.SPECIALIST_CALENDAR_URL);
  }, []);

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
          <Link href={`/${locale}`}>
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
        <GridItem $colStart={2} $colEnd={6} $colStartSm={2} $colEndSm={3}>
          <LinksWrapper $isOpen={isMenuSmOpen}>
            <ShowHideMenuSmBtn
              onClick={handleLinkClick}
              className="header-close-btn"
              style={{ padding: '0 0.5rem 0 0' }}
            >
              <Image
                src="/img/times.svg"
                alt="close menu"
                width={24}
                height={24}
              />
            </ShowHideMenuSmBtn>
            <NavButton
              href={`/${locale}/about-us`}
              onClick={handleLinkClick}
              prefetch
            >
              <Image
                className="header-menu-icon-sm"
                src="/img/about-us-icon.svg"
                alt="about us"
                width={19}
                height={19}
              />
              <Text noMargin fontWeight={500} noWrap>
                {tHeader('about_us')}
              </Text>
            </NavButton>
            <NavButton
              href={`/${locale}/offer`}
              onClick={handleLinkClick}
              prefetch
            >
              <Image
                className="header-menu-icon-sm"
                src="/img/offer-icon.svg"
                alt="offer"
                width={19}
                height={19}
              />
              <Text noMargin fontWeight={500} noWrap>
                {tHeader('offer')}
              </Text>
            </NavButton>
            <NavButton
              href={`/${locale}/specialists`}
              onClick={handleLinkClick}
              prefetch
            >
              <Image
                className="header-menu-icon-sm"
                src="/img/specialists-icon.svg"
                alt="specialists"
                width={19}
                height={19}
              />
              <Text noMargin fontWeight={500} noWrap>
                {tHeader('specialists')}
              </Text>
            </NavButton>
            {/* <NavButton
              href={`/${locale}/blog`}
              onClick={handleLinkClick}
              prefetch
            >
              <Image
                className="header-menu-icon-sm"
                src="/img/blog-icon.svg"
                alt="blog"
                width={19}
                height={19}
              />
              <Text noMargin fontWeight={500} noWrap>
                {tHeader('blog')}
              </Text>
            </NavButton> */}
            <NavButton
              href={`/${locale}/contact`}
              onClick={handleLinkClick}
              prefetch
            >
              <Image
                className="header-menu-icon-sm"
                src="/img/contact-icon.svg"
                alt="contact"
                width={19}
                height={19}
              />
              <Text noMargin fontWeight={500} noWrap>
                {tHeader('contact')}
              </Text>
            </NavButton>
            <LangMenu className="header-lang-wide" />
            {!pathname.endsWith('/specialists') ? (
              <Button
                href={
                  pathname.includes('/specialists/')
                    ? currentPsychologistUrl || `/${locale}/specialists`
                    : `/${locale}/specialists`
                }
                target={
                  pathname.includes('/specialists/') && currentPsychologistUrl
                    ? '_blank'
                    : undefined
                }
                className="header-meeting-btn"
                classNameWrapper="header-meeting-btn"
              >
                <Text noMargin fontWeight={500} noWrap>
                  {tCta('arrange_meeting')}
                </Text>
              </Button>
            ) : (
              <div />
            )}
            <LogoWrapper>
              <Image
                src="/img/logo.svg"
                alt={tMeta('name')}
                width={130}
                height={31}
              />
            </LogoWrapper>
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
