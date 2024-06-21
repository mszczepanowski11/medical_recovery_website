'use client';

import React, { FC } from 'react';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

// Utils

// Components

type GoogleRecaptchaProviderWrapperProps = { children: any };

const GoogleRecaptchaProviderWrapper: FC<GoogleRecaptchaProviderWrapperProps> =
  function ({ children }) {
    const recaptchaKey = process?.env?.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

    return (
      <GoogleReCaptchaProvider reCaptchaKey={recaptchaKey || 'NOT DEFINED'}>
        {children}
      </GoogleReCaptchaProvider>
    );
  };

export default React.memo(GoogleRecaptchaProviderWrapper);
