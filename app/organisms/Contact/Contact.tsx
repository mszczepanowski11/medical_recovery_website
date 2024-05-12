'use client';

import React, { CSSProperties, FC } from 'react';
import { useTranslations } from 'next-intl';

// Utils

// Components
import { Flex, GridContainer, GridItem } from '@/app/utils/GlobalStyles';
import Text from '@/app/atoms/Text/Text';
import Button from '@/app/atoms/Button/Button';
import Image from 'next/image';
import {
  ContactInside,
  ContactWrapper,
  RightImageWrapper,
} from './Contact.styles';

type ContactProps = {
  locale: 'en' | 'pl' | 'de';
  noMiddleSection?: boolean;
  rightImageStyle?: CSSProperties;
  rightImageStyleSm?: CSSProperties;
  padding?: string;
};

const Contact: FC<ContactProps> = function ({
  noMiddleSection,
  rightImageStyle,
  rightImageStyleSm,
  padding,
  locale,
}) {
  const tContact = useTranslations('contact');
  const tCta = useTranslations('cta');
  const tMeta = useTranslations('meta');

  return (
    <ContactWrapper>
      <GridContainer
        $bg="#FCF8F5"
        $gridCols={1}
        $gridColsSm={1}
        $padding={padding}
      >
        <GridItem>
          <ContactInside>
            <Flex
              $flexDirection="column"
              $alignItems="flex-start"
              $rowGap="3rem"
              $rowGapSm="1.5rem"
              $padding="2rem"
              $paddingSm="1.5rem"
            >
              <Text variant="h2" noMargin>
                {tContact('title')}
              </Text>
              {!noMiddleSection && (
                <Flex $flexDirection="column" $alignItems="flex-start">
                  <Text>{tContact('second_title')}</Text>
                  <Button href={`/${locale}/contact`}>
                    <Text noMargin fontWeight={500} noWrap>
                      {tCta('send_message')}
                    </Text>
                  </Button>
                </Flex>
              )}
              <Flex
                $alignItems="center"
                $columnGap="3rem"
                $rowGap="1.5rem"
                $flexWrapMd="wrap"
              >
                <Flex $flexDirection="column" $alignItems="flex-start">
                  <Flex
                    $columnGap="0.75rem"
                    $marginBottom="0.5rem"
                    $alignItems="center"
                  >
                    <Image
                      src="/img/email.svg"
                      alt="email"
                      width={20}
                      height={20}
                    />
                    <Text noMargin fontWeight={500} noWrap>
                      {tContact('email')}
                    </Text>
                  </Flex>
                  <a href={`mailto:${tMeta('email')}`} className="contact-link">
                    <Text noMargin noWrap>
                      {tMeta('email')}
                    </Text>
                  </a>
                </Flex>
                <Flex $flexDirection="column" $alignItems="flex-start">
                  <Flex
                    $columnGap="0.75rem"
                    $marginBottom="0.5rem"
                    $alignItems="center"
                  >
                    <Image
                      src="/img/phone.svg"
                      alt="email"
                      width={20}
                      height={20}
                    />
                    <Text noMargin fontWeight={500} noWrap>
                      {tContact('phone')}
                    </Text>
                  </Flex>
                  <a href={`tel:${tMeta('phone')}`} className="contact-link">
                    <Text noMargin noWrap>
                      {tMeta('phone')}
                    </Text>
                  </a>
                </Flex>
                {noMiddleSection && (
                  <Button href={`/${locale}/contact`}>
                    <Text noMargin fontWeight={500} noWrap>
                      {tCta('send_message')}
                    </Text>
                  </Button>
                )}
              </Flex>
            </Flex>
            <RightImageWrapper
              $style={rightImageStyle}
              $styleSm={rightImageStyleSm}
            >
              <Image
                src="/img/contact-heart-hands.png"
                alt="contact with heart"
                fill
              />
            </RightImageWrapper>
          </ContactInside>
        </GridItem>
      </GridContainer>
    </ContactWrapper>
  );
};

export default React.memo(Contact);
