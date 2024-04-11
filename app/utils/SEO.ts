import { Metadata } from 'next';

export const metadataEN: Metadata = {
  metadataBase: new URL('https://mentalrecovery.co'),
  title: 'Mental Recovery',
  description: 'Mental Recovery',
  applicationName: 'Mental Recovery',
  openGraph: {
    title: 'Mental Recovery',
    description: '',
    images: [''],
    url: '',
    siteName: '',
    type: 'website',
    emails: [],
    phoneNumbers: [],
    countryName: '',
    locale: 'en_GB',
    videos: [''],
  },
  twitter: {
    card: 'summary_large_image',
    title: '',
    description: '',
    images: {
      url: '',
      alt: '',
    },
  },
};

export const metadataPL: Metadata = {
  metadataBase: new URL('https://mentalrecovery.co'),
  title: 'Mental Recovery',
  description: 'Mental Recovery',
  applicationName: 'Mental Recovery',
  openGraph: {
    title: 'Mental Recovery',
    description: '',
    images: [''],
    url: '',
    siteName: '',
    type: 'website',
    emails: [],
    phoneNumbers: [],
    countryName: '',
    locale: 'en_GB',
    videos: [''],
  },
  twitter: {
    card: 'summary_large_image',
    title: '',
    description: '',
    images: {
      url: '',
      alt: '',
    },
  },
};
export const metadataDE: Metadata = {};

export const schemaOrgEN = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: '',
  alternateName: '',
  url: '',
  logo: 'https://ulubionyzestawimprezowy.pl/img/uzi-logo.svg',
  description: '',
  telephone: '',
  email: '',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '',
    contactType: 'sales',
    areaServed: 'GB',
    availableLanguage: 'EN',
    email: '',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        closes: '18:00:00',
        dayOfWeek: 'https://schema.org/Sunday',
        opens: '08:00:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        closes: '18:00:00',
        dayOfWeek: 'https://schema.org/Saturday',
        opens: '08:00:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        closes: '18:00:00',
        dayOfWeek: 'https://schema.org/Thursday',
        opens: '08:00:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        closes: '18:00:00',
        dayOfWeek: 'https://schema.org/Tuesday',
        opens: '08:00:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        closes: '18:00:00',
        dayOfWeek: 'https://schema.org/Friday',
        opens: '08:00:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        closes: '18:00:00',
        dayOfWeek: 'https://schema.org/Monday',
        opens: '08:00:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        closes: '18:00:00',
        dayOfWeek: 'https://schema.org/Wednesday',
        opens: '08:00:00',
      },
    ],
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: '',
    addressLocality: '',
    postalCode: '',
    addressCountry: '',
  },
  image: {
    '@type': 'ImageObject',
    name: '',
    url: 'https://ulubionyzestawimprezowy.pl/img/uzi-logo.png',
  },
  sameAs: '',
  // author: schemaOrg?.author
  //   ? {
  //     '@type': 'Person',
  //     '@id': schemaOrg.author.linkedin,
  //     name: schemaOrg.author.name,
  //     url: schemaOrg.author.linkedin,
  //     image: schemaOrg.author.photo
  //       ? {
  //         '@type': 'ImageObject',
  //         '@id': schemaOrg.author.photo.url,
  //         url: schemaOrg.author.photo.url,
  //       }
  //       : undefined,
  //   }
  //   : undefined,
};

export const schemaOrgPL = {};
export const schemaOrgDE = {};

const metadata = {
  en: metadataEN,
  pl: metadataPL,
  de: metadataDE,
  schemaen: schemaOrgEN,
  schemapl: schemaOrgPL,
  schemade: schemaOrgDE,
};

export default metadata;
