'use client';

import React, { FC, useCallback, useState } from 'react';
import { useTranslations } from 'next-intl';
import emailjs from '@emailjs/browser';

// Utils
import { toast } from 'react-toastify';

// Componens

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
  const tCta = useTranslations('cta');
  const [formData, setFormData] = useState<{
    name: string;
    email: string;
    message: string;
    rodo: boolean;
  }>({ name: '', email: '', message: '', rodo: false });
  const [isSending, setIsSending] = useState(false);

  const onSend = useCallback(() => {
    setIsSending(true);
    const { name, email, message, rodo } = formData || {};
    if (
      !name ||
      name.length < 1 ||
      !email ||
      email.length < 1 ||
      !message ||
      message.length < 1
    ) {
      toast.error(tContact('send_empty_fields'), {
        position: 'top-center',
        hideProgressBar: true,
      });
      setIsSending(false);
    } else if (!rodo) {
      toast.error(tContact('send_no_rodo'), {
        position: 'top-center',
        hideProgressBar: true,
      });
      setIsSending(false);
    } else {
      emailjs
        .send('mentalrecovery_gmail', 'mentalrecovery_template', formData, {
          publicKey: 'NUqIEfTSDVxUNJ026',
        })
        .then(
          (result) => {
            setFormData({ name: '', email: '', message: '', rodo: false });
            toast.success(tContact('send_success'), {
              position: 'top-center',
              hideProgressBar: true,
            });
            setIsSending(false);
          },
          (error) => {
            toast.error(tContact('send_error'), {
              position: 'top-center',
              hideProgressBar: true,
            });
            setIsSending(false);
          },
        );
    }
  }, [formData, tContact]);

  return (
    <ContactPageWrapper>
      <GridContainer
        $gridCols={7}
        $gridColsSm={1}
        $padding="6rem 1rem"
        $paddingSm="4rem 1rem"
      >
        <GridItem $colStart={1} $colEnd={8} $colEndSm={2}>
          <Flex
            $flexDirection="column"
            $gap="0.75rem"
            $marginBottom="2rem"
            $styleMd={{ maxWidth: '700px', margin: 'auto' }}
          >
            <Text variant="h1" fontSize="2.625rem" noMargin>
              {tContact('title')}
            </Text>
            <Text noMargin>{tContact('description')}</Text>
          </Flex>
        </GridItem>

        <GridItem
          $colStart={1}
          $colEnd={5}
          $colStartMb={1}
          $colEndMb={8}
          $rowStartMb={3}
          $rowEndMb={4}
          $rowStartSm={3}
          $rowEndSm={4}
          $colEndSm={2}
        >
          <Flex
            $flexDirection="column"
            $styleMd={{ maxWidth: '700px', margin: 'auto' }}
          >
            <Flex as="form" $flexDirection="column" $gap="1.5rem">
              <Input
                value={formData.name}
                onChange={(value) =>
                  setFormData((prev) => ({ ...prev, name: value }))
                }
                label={tContact('name_label')}
              />
              <Input
                value={formData.email}
                onChange={(value) =>
                  setFormData((prev) => ({ ...prev, email: value }))
                }
                label={tContact('email_label')}
              />
              <Input
                as="textarea"
                value={formData.message}
                onChange={(value) =>
                  setFormData((prev) => ({ ...prev, message: value }))
                }
                label={tContact('message_label')}
              />
              <Checkbox
                checked={formData.rodo}
                onChange={(value: boolean) =>
                  setFormData((prev) => ({ ...prev, rodo: value }))
                }
                label={tContact('rodo_label')}
                style={{ gap: '1rem', alignItems: 'flex-start' }}
                buttonStyle={{ marginTop: '0.5rem' }}
              />
              <div>
                <Button
                  iconRight={false}
                  type="button"
                  onClick={() => onSend()}
                  loading={isSending}
                >
                  <Text noMargin fontWeight={500}>
                    {tCta('send_message')}
                  </Text>
                </Button>
              </div>
            </Flex>
          </Flex>
        </GridItem>

        <GridItem
          $colStart={5}
          $colEnd={8}
          $colStartMb={1}
          $colEndMb={8}
          $rowStartSm={2}
          $rowEndSm={3}
          $colEndSm={2}
          style={{ display: 'flex', alignItems: 'flex-end' }}
          $styleMd={{
            justifyContent: 'center !important',
            width: '100%',
          }}
        >
          <Flex
            style={{
              position: 'relative',
              width: '100%',
              aspectRatio: 1,
              marginLeft: '1.5rem',
            }}
            $styleMd={{ maxWidth: '340px', marginLeft: '0 !important' }}
          >
            <Image src="/img/contact-page-image.png" alt="contact" fill />
          </Flex>
        </GridItem>
      </GridContainer>
    </ContactPageWrapper>
  );
};

export default React.memo(ContactPage);
