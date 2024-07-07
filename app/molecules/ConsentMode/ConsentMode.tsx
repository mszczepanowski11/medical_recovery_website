/* eslint-disable react/no-unstable-nested-components */

'use client';

import React, { FC, useCallback, useEffect, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import Cookies from 'js-cookie';
import { motion, useMotionValue, useTransform } from 'framer-motion';

// Utils
import { Colors } from '@/app/utils/constans';
import { usePathname } from 'next/navigation';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';

// Components
import { GridContainer, GridItem } from '@/app/utils/GlobalStyles';
import Text from '@/app/atoms/Text/Text';
import Button from '@/app/atoms/Button/Button';
import Link from 'next/link';
import Icon from '@/app/atoms/Icon/Icon';
import {
  ButtonsWrapper,
  CloseBtn,
  ConsentContainer,
  ConsentModeWrapper,
  ContentWrapper,
} from './ConsentMode.styles';
import ContentExpandedWrapper from './ContentExpandedWrapper';

type ConsentModeProps = {
  locale: 'en' | 'pl' | 'de';
  consentMode: any;
};

const ConsentMode: FC<ConsentModeProps> = function ({ locale, consentMode }) {
  const t = useTranslations('cookie_policy');
  const pathname = usePathname();
  const [isPrivacyPolicy, setIsPrivacyPolicy] = useState(false);
  const [privacyPolicyCollapsed, setPrivacyPolicyCollapsed] = useState(false);

  useEffect(() => {
    setIsPrivacyPolicy(pathname.includes('/privacy-policy'));
  }, [pathname]);
  useEffect(() => {
    if (isPrivacyPolicy) {
      if (consentMode?.value === 'false' || !consentMode) {
        document.body.classList.add('cookie-hide-privacy-policy');
      } else {
        document.body.classList.remove('cookie-hide-privacy-policy');
      }
    } else {
      document.body.classList.remove('cookie-hide-privacy-policy');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPrivacyPolicy]);

  const [isOpen, setIsOpen] = useState(false);
  const cookieTransition = useMotionValue(0);
  const cookieTransitionValue = useTransform(
    cookieTransition,
    [0, 1],
    [1000, 0],
  );
  const cookieOpacityValue = useTransform(cookieTransition, [0, 1], [0, 1]);

  const [isContentExpanded, setIsContentExpanded] = useState(false);
  const expandedContentRef = useRef<any>(null);
  const hiddenContentRef = useRef<any>(null);
  const contentTransition = useMotionValue(0);
  const [expandedHeightValue, setExpandedHeightValue] = useState<any>(null);
  const [hiddenHeightValue, setHiddenHeightValue] = useState<any>(null);

  const contentTransitionValue = useTransform(
    contentTransition,
    [0, 1],
    [
      privacyPolicyCollapsed ? 0 : hiddenHeightValue || 0,
      privacyPolicyCollapsed ? 0 : expandedHeightValue,
    ],
  );
  const expandedContentOpacity = useTransform(
    contentTransition,
    [0, 1],
    [0, 1],
  );
  const hiddenContentOpacity = useTransform(contentTransition, [0, 1], [1, 0]);

  useEffect(() => {
    if (consentMode?.value === 'false' || !consentMode) {
      setIsOpen(true);
      document.body.classList.add('cookie-hide');
      setTimeout(() => {
        cookieTransition.set(1);
      }, 100);
    } else {
      document.body.classList.remove('cookie-hide');
    }
  }, [consentMode, cookieTransition]);

  useEffect(() => {
    setTimeout(() => {
      setExpandedHeightValue(expandedContentRef?.current?.offsetHeight);
      setHiddenHeightValue(hiddenContentRef?.current?.offsetHeight);
    }, 1);
  }, []);

  const closeConsentMode = useCallback(() => {
    cookieTransition.set(0);
    document.body.classList.remove('cookie-hide-privacy-policy');
    document.body.classList.remove('cookie-hide');
    setTimeout(() => {
      setIsOpen(false);
      Cookies.set('cookie_policy_closed', 'true', { expires: 999 });
    }, 1000);
  }, [cookieTransition]);

  if (!isOpen) return null;

  return (
    <ConsentModeWrapper
      $isPrivacyPolicy={isPrivacyPolicy}
      style={{ opacity: cookieOpacityValue }}
    >
      <GridContainer
        $padding="0 1rem"
        $style={{ clipPath: 'none', overflow: 'visible' }}
      >
        <GridItem $colStart={3} $colEnd={5} $colStartSm={1} $colEndSm={3}>
          <ConsentContainer style={{ y: cookieTransitionValue }}>
            <Text variant="p" fontSize="1.25rem" fontWeight={600}>
              {t(isContentExpanded ? 'more_btn' : 'title')}
            </Text>
            <ContentWrapper style={{ height: contentTransitionValue }}>
              <motion.div
                style={{
                  opacity: hiddenContentOpacity,
                  pointerEvents: isContentExpanded ? 'none' : 'auto',
                }}
                ref={hiddenContentRef}
              >
                <Text psmall noMargin>
                  {t.rich('description', {
                    a: (chunks) => (
                      <Link
                        href={`/${locale}/privacy-policy`}
                        style={{
                          textDecoration: 'underline',
                          textDecorationColor:
                            Colors.background_interactive_hover,
                        }}
                      >
                        {chunks}
                      </Link>
                    ),
                  })}
                </Text>
                <div style={{ height: '1rem' }} />
              </motion.div>
              <motion.div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  opacity: expandedContentOpacity,
                  pointerEvents: isContentExpanded ? 'auto' : 'none',
                  marginBottom: '1rem',
                }}
              >
                <ContentExpandedWrapper forwardRef={expandedContentRef} />
              </motion.div>
            </ContentWrapper>

            <ButtonsWrapper>
              <Button
                color="transparent"
                iconRight={false}
                onClick={() => {
                  setPrivacyPolicyCollapsed(false);
                  if (contentTransition.get() === 0) {
                    contentTransition.set(1);
                    setIsContentExpanded(true);
                  } else {
                    contentTransition.set(0);
                    setIsContentExpanded(false);
                  }
                }}
              >
                <Text noMargin fontSize="0.9rem" fontWeight={500}>
                  {t(isContentExpanded ? 'hide_btn' : 'more_btn')}
                </Text>
              </Button>
              <Button iconRight={false} onClick={closeConsentMode}>
                <Text noMargin fontSize="0.9rem" fontWeight={500}>
                  {t('okay_btn')}
                </Text>
              </Button>
            </ButtonsWrapper>
            {isPrivacyPolicy && (
              <CloseBtn
                aria-label="close"
                onClick={() => setPrivacyPolicyCollapsed((prev) => !prev)}
              >
                <Icon
                  icon={privacyPolicyCollapsed ? faAngleUp : faAngleDown}
                  color="text_secondary"
                />
              </CloseBtn>
            )}
          </ConsentContainer>
        </GridItem>
      </GridContainer>
    </ConsentModeWrapper>
  );
};

export default React.memo(ConsentMode);
