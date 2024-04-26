'use client';

import React, { FC } from 'react';

// Utils

// Components
import Image from 'next/image';
import Link from 'next/link';
import { Colors, appointletCalendarUrl } from '@/app/utils/constans';
import { useTranslations } from 'next-intl';
import Text from '@/app/atoms/Text/Text';
import Button from '@/app/atoms/Button/Button';
import { FooterWrapper, NavButton } from './Footer.styles';
import { Flex, GridContainer, GridItem } from '../../utils/GlobalStyles';

type FooterProps = {};

const Footer: FC<FooterProps> = function ({}) {
  const tHeader = useTranslations('header');
  const tFooter = useTranslations('footer');
  const tCta = useTranslations('cta');

  return (
    <FooterWrapper>
      <GridContainer
        $bg={Colors.background_tags}
        $gap="0"
        $padding="4rem 1rem 0 1rem"
      >
        <GridItem $rowStart={1} $rowEnd={2} $colStart={1} $colEnd={5}>
          <Flex
            $alignItems="center"
            style={{
              borderBottom: `1px solid ${Colors.border}`,
            }}
            $paddingBottom="2rem"
          >
            <Link href="/" style={{ marginRight: 80 }}>
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
            <Flex
              $justifyContent="center"
              $alignItems="center"
              $gap="2.5rem"
              $padding="0 2rem"
              style={{ height: '100%', flexGrow: 1 }}
            >
              <NavButton href="/about-us">
                <Text noMargin fontWeight={500}>
                  {tHeader('about_us')}
                </Text>
              </NavButton>
              <NavButton href="/offer">
                <Text noMargin fontWeight={500}>
                  {tHeader('offer')}
                </Text>
              </NavButton>
              <NavButton href="/specialists">
                <Text noMargin fontWeight={500}>
                  {tHeader('specialists')}
                </Text>
              </NavButton>
              <NavButton href="/blog">
                <Text noMargin fontWeight={500}>
                  {tHeader('blog')}
                </Text>
              </NavButton>
              <NavButton href="/contact">
                <Text noMargin fontWeight={500}>
                  {tHeader('contact')}
                </Text>
              </NavButton>
            </Flex>
            <Button href={appointletCalendarUrl} target="_blank">
              <Text noMargin fontWeight={500}>
                {tCta('arrange_meeting')}
              </Text>
            </Button>
          </Flex>
        </GridItem>
        <GridItem $rowStart={2} $rowEnd={3} $colStart={1} $colEnd={5}>
          <Flex $justifyContent="center" $alignItems="center" $padding="2rem">
            <Text noMargin psmall color="text_secondary">
              {tFooter('copyright')}
            </Text>
          </Flex>
        </GridItem>
      </GridContainer>
    </FooterWrapper>
  );
};

export default React.memo(Footer);
