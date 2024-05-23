'use client';

import React, { FC } from 'react';

// Utils

// Components
import Image from 'next/image';
import Link from 'next/link';
import { Colors } from '@/app/utils/constans';
import { useTranslations } from 'next-intl';
import Text from '@/app/atoms/Text/Text';
import {
  FooterWrapper,
  LinksLogoWrapper,
  LinksWrapper,
  NavButton,
} from './Footer.styles';
import { Flex, GridContainer, GridItem } from '../../utils/GlobalStyles';

type FooterProps = { locale: 'en' | 'pl' | 'de' };

const Footer: FC<FooterProps> = function ({ locale }) {
  const tHeader = useTranslations('header');
  const tFooter = useTranslations('footer');

  return (
    <FooterWrapper>
      <GridContainer
        $bg={Colors.background_tags}
        $gap="0"
        $padding="4rem 1rem 0 1rem"
        $paddingSm="3rem 1rem 0 1rem"
        $gridColsSm={1}
      >
        <GridItem $rowStart={1} $rowEnd={2} $colStart={1} $colEnd={5}>
          <LinksLogoWrapper>
            <Link href={`/${locale}`} className="footer-logo-link">
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
            <LinksWrapper>
              <NavButton href={`/${locale}/about-us`}>
                <Text noMargin fontWeight={500} noWrap>
                  {tHeader('about_us')}
                </Text>
              </NavButton>
              <NavButton href={`/${locale}/offer`}>
                <Text noMargin fontWeight={500} noWrap>
                  {tHeader('offer')}
                </Text>
              </NavButton>
              <NavButton href={`/${locale}/specialists`}>
                <Text noMargin fontWeight={500} noWrap>
                  {tHeader('specialists')}
                </Text>
              </NavButton>
              {/* <NavButton href={`/${locale}/blog`}>
                <Text noMargin fontWeight={500} noWrap>
                  {tHeader('blog')}
                </Text>
              </NavButton> */}
              <NavButton href={`/${locale}/contact`}>
                <Text noMargin fontWeight={500} noWrap>
                  {tHeader('contact')}
                </Text>
              </NavButton>
              <NavButton $sm href={`/${locale}/privacy-policy`}>
                <Text noMargin fontWeight={500} noWrap>
                  {tHeader('privacy_policy')}
                </Text>
              </NavButton>
              <NavButton $sm href={`/${locale}/legal-note`}>
                <Text noMargin fontWeight={500} noWrap>
                  {tHeader('legal_note')}
                </Text>
              </NavButton>
            </LinksWrapper>
          </LinksLogoWrapper>
        </GridItem>
        <GridItem
          $rowStart={2}
          $rowEnd={3}
          $colStart={1}
          $colEnd={5}
          $rowStartSm={2}
          $rowEndSm={3}
          style={{ position: 'relative' }}
        >
          <Flex
            $justifyContent="center"
            $alignItems="center"
            $padding="2rem 6rem"
            $paddingSm="2rem 0"
          >
            <Text noMargin psmall color="text_secondary">
              {tFooter('copyright')}
            </Text>
          </Flex>
          <Flex
            style={{
              position: 'absolute',
              top: '50%',
              right: '0',
              translate: '0 -50%',
            }}
          >
            <NavButton
              href={`/${locale}/legal-note`}
              $lowerFooter
              rel="legal-note"
            >
              <Text noMargin fontSize="0.8rem" color="text_secondary" noWrap>
                {tHeader('legal_note')}
              </Text>
            </NavButton>
            <NavButton
              href={`/${locale}/privacy-policy`}
              $lowerFooter
              rel="privacy-policy"
            >
              <Text noMargin fontSize="0.8rem" color="text_secondary" noWrap>
                {tHeader('privacy_policy')}
              </Text>
            </NavButton>
          </Flex>
        </GridItem>
      </GridContainer>
    </FooterWrapper>
  );
};

export default React.memo(Footer);
