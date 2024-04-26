'use client';

import React, { FC, useState } from 'react';
import { useTranslations } from 'next-intl';

// Utils
import { Colors } from '@/app/utils/constans';

// Components
import { Flex, GridContainer, GridItem } from '@/app/utils/GlobalStyles';
import Text from '@/app/atoms/Text/Text';
import Input from '@/app/atoms/Input/Input';
import Checkbox from '@/app/atoms/Checkbox/Checkbox';
import Button from '@/app/atoms/Button/Button';
import Image from 'next/image';
import { ContactPageWrapper } from './ContactPage.styles';

type ContactPageProps = {};

const ContactPage: FC<ContactPageProps> = function ({}) {
  const tContact = useTranslations('contact_page');
  const [nameInput, setNameInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [messageInput, setMessageInput] = useState('');
  const [rodoChecked, setRodoChecked] = useState(false);

  return (
    <ContactPageWrapper>
      <GridContainer $gridCols={7} $padding="6rem 1rem">
        <GridItem $colStart={1} $colEnd={5}>
          <Flex $flexDirection="column">
            <Flex $flexDirection="column" $gap="0.75rem" $marginBottom="2rem">
              <Text variant="h1" fontSize="2.625rem" noMargin>
                {tContact('title')}
              </Text>
              <Text noMargin>{tContact('description')}</Text>
            </Flex>
            <Flex as="form" $flexDirection="column" $gap="1.5rem">
              <Input
                value={nameInput}
                onChange={(value) => setNameInput(value)}
                label={tContact('name_label')}
              />
              <Input
                value={emailInput}
                onChange={(value) => setEmailInput(value)}
                label={tContact('email_label')}
              />
              <Input
                as="textarea"
                value={messageInput}
                onChange={(value) => setMessageInput(value)}
                label={tContact('message_label')}
              />
              <Checkbox
                checked={rodoChecked}
                onChange={(value: boolean) => setRodoChecked(value)}
                label={tContact('rodo_label')}
                style={{ gap: '1rem', alignItems: 'flex-start' }}
                buttonStyle={{ marginTop: '0.5rem' }}
              />
              <div>
                <Button iconRight={false}>
                  <Text noMargin fontWeight={500}>
                    {tContact('cta_send')}
                  </Text>
                </Button>
              </div>
            </Flex>
          </Flex>
        </GridItem>
        <GridItem
          $colStart={5}
          $colEnd={8}
          style={{ display: 'flex', alignItems: 'flex-end' }}
        >
          <Flex
            style={{
              position: 'relative',
              width: '100%',
              aspectRatio: 1,
              marginLeft: '1.5rem',
            }}
          >
            <Image src="/img/contact-page-image.svg" alt="contact" fill />
          </Flex>
        </GridItem>
      </GridContainer>
    </ContactPageWrapper>
  );
};

export default React.memo(ContactPage);
