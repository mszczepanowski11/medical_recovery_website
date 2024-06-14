/* eslint-disable @typescript-eslint/naming-convention */
import { Metadata } from 'next';
import { Organization } from 'schema-dts';

export const metadata_en: Metadata = {
  metadataBase: new URL('https://mentalrecovery.co/en'),
  title: 'Mental Recovery - let our specialists help You recover.',
  description:
    'Find peace of mind and harmony in your life with the help of our specialists. Visit the site and book a session!',
  keywords:
    'psychotherapy, psychotherapist, mental health, depression treatment, burnout, online psychotherapy, remote psychotherapy, psychotherapy for Poles abroad, individual therapy, remote psychotherapy, personality disorders, social anxiety, social phobia',
  applicationName: 'Mental Recovery',
  openGraph: {
    title: 'Mental Recovery - let our specialists help You recover.',
    description:
      'Find peace of mind and harmony in your life with the help of our specialists. Visit the site and book a session!',
    images: {
      url: 'https://mentalrecovery.co/img/og-image-en.png',
      alt: 'Mental Recovery - let our specialists help You recover.',
      width: 879,
      height: 523,
    },
    url: 'https://mentalrecovery.co/en',
    siteName: 'Mental Recovery',
    type: 'website',
    emails: ['contact@mentalrecovery.co'],
    phoneNumbers: ['+48 512 088 457', '+48 604 156 103'],
    countryName: 'Europe',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mental Recovery - let our specialists help You recover.',
    description:
      'Find peace of mind and harmony in your life with the help of our specialists. Visit the site and book a session!',
    images: {
      url: 'https://mentalrecovery.co/img/og-image-en.png',
      alt: 'Mental Recovery - let our specialists help You recover.',
      width: 879,
      height: 523,
    },
  },
  alternates: {
    canonical: 'https://mentalrecovery.co/en',
  },
};
export const metadata_pl: Metadata = {
  metadataBase: new URL('https://mentalrecovery.co/pl'),
  title: 'Mental Recovery - pozwól naszym specialistom zająć się Tobą.',
  description:
    'Odnajdź wewnętrzny pokój i życiową harmonię wraz z naszymi specialistami. Odwiedź naszą stronę i umów wizytę!',
  keywords:
    'psychoterapia, psychoterapeuta, zdrowie psychiczne, leczenie depresji, wypalenie zawodowe, psychoterapia online, psychoterapia zdalnie, psychoterapia dla Polaków zagranicą, terapia indywidualna, psychoterapia na odległość, zaburzenia osobowości, lęk społeczny, fobia społeczna',
  applicationName:
    'Mental Recovery - pozwól naszym specialistom zająć się Tobą.',
  openGraph: {
    title: 'Mental Recovery - pozwól naszym specialistom zająć się Tobą.',
    description:
      'Odnajdź wewnętrzny pokój i życiową harmonię wraz z naszymi specialistami. Odwiedź naszą stronę i umów wizytę!',
    images: {
      url: 'https://mentalrecovery.co/img/og-image-pl.png',
      alt: 'Mental Recovery - pozwól naszym specialistom zająć się Tobą.',
      width: 879,
      height: 523,
    },
    url: 'https://mentalrecovery.co/pl',
    siteName: 'Mental Recovery',
    type: 'website',
    emails: ['contact@mentalrecovery.co'],
    phoneNumbers: ['+48 512 088 457', '+48 604 156 103'],
    countryName: 'Polska',
    locale: 'pl_PL',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mental Recovery - pozwól naszym specialistom zająć się Tobą.',
    description:
      'Odnajdź wewnętrzny pokój i życiową harmonię wraz z naszymi specialistami. Odwiedź naszą stronę i umów wizytę!',
    images: {
      url: 'https://mentalrecovery.co/img/og-image-pl.png',
      alt: 'Mental Recovery - pozwól naszym specialistom zająć się Tobą.',
      width: 879,
      height: 523,
    },
  },
  alternates: {
    canonical: 'https://mentalrecovery.co/pl',
  },
};
export const metadata_de: Metadata = {
  metadataBase: new URL('https://mentalrecovery.co/de'),
  title: 'Mental Recovery - lassen Sie sich von unseren Spezialisten betreuen.',
  description:
    'Finden Sie inneren Frieden und Lebensharmonie mit unseren Spezialisten. Besuchen Sie unsere Website und buchen Sie einen Termin!',
  keywords:
    'Psychotherapie, Psychotherapeut, psychische Gesundheit, Behandlung von Depressionen, Burnout, Online-Psychotherapie, Fernpsychotherapie, Psychotherapie für Polen im Ausland, Einzeltherapie, Fernpsychotherapie, Persönlichkeitsstörungen, soziale Ängste, soziale Phobie',
  applicationName: 'Mental Recovery',
  openGraph: {
    title:
      'Mental Recovery - lassen Sie sich von unseren Spezialisten betreuen.',
    description:
      'Finden Sie inneren Frieden und Lebensharmonie mit unseren Spezialisten. Besuchen Sie unsere Website und buchen Sie einen Termin!',
    images: {
      url: 'https://mentalrecovery.co/img/og-image-de.png',
      alt: 'Mental Recovery - lassen Sie sich von unseren Spezialisten betreuen.',
      width: 879,
      height: 523,
    },
    url: 'https://mentalrecovery.co/de',
    siteName: 'Mental Recovery',
    type: 'website',
    emails: ['contact@mentalrecovery.co'],
    phoneNumbers: ['+48 512 088 457', '+48 604 156 103'],
    countryName: 'Deutschland',
    locale: 'de_DE',
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Mental Recovery - lassen Sie sich von unseren Spezialisten betreuen.',
    description:
      'Finden Sie inneren Frieden und Lebensharmonie mit unseren Spezialisten. Besuchen Sie unsere Website und buchen Sie einen Termin!',
    images: {
      url: 'https://mentalrecovery.co/img/og-image-de.png',
      alt: 'Mental Recovery - lassen Sie sich von unseren Spezialisten betreuen.',
      width: 879,
      height: 523,
    },
  },
  alternates: {
    canonical: 'https://mentalrecovery.co/de',
  },
};

export const schemaOrgEN: Organization & { '@context': string } = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Mental Recovery',
  alternateName: 'Mental Recovery',
  url: 'https://mentalrecovery.co/en',
  logo: 'https://mentalrecovery.co/en/img/logo.svg',
  description:
    'Find peace of mind and harmony in your life with the help of our specialists. Visit the site and book a session!',
  telephone: '+48 512 088 457',
  email: 'contact@mentalrecovery.co',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+48 512 088 457',
    contactType: 'help',
    areaServed: 'GB',
    availableLanguage: 'EN',
    email: 'contact@mentalrecovery.co',
    hoursAvailable: [
      {
        '@type': 'OpeningHoursSpecification',
        closes: '22:00:00',
        dayOfWeek: 'https://schema.org/Sunday',
        opens: '07:00:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        closes: '22:00:00',
        dayOfWeek: 'https://schema.org/Saturday',
        opens: '08:00:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        closes: '22:00:00',
        dayOfWeek: 'https://schema.org/Thursday',
        opens: '07:00:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        closes: '22:00:00',
        dayOfWeek: 'https://schema.org/Tuesday',
        opens: '07:00:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        closes: '22:00:00',
        dayOfWeek: 'https://schema.org/Friday',
        opens: '07:00:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        closes: '22:00:00',
        dayOfWeek: 'https://schema.org/Monday',
        opens: '07:00:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        closes: '22:00:00',
        dayOfWeek: 'https://schema.org/Wednesday',
        opens: '07:00:00',
      },
    ],
  },
  // address: {
  //   '@type': 'PostalAddress',
  //   streetAddress: 'Kobierzyńska 5',
  //   addressLocality: 'Kraków',
  //   postalCode: '30-363',
  //   addressCountry: 'Polska',
  // },
  image: {
    '@type': 'ImageObject',
    name: '',
    url: 'https://mentalrecovery.co/en/img/og-image.svg',
  },
  // author: {
  //   '@type': 'Person',
  //   '@id': 'linkedin',
  //   name: 'Web-write',
  //   url: 'https://web-write.co',
  // },
};
export const schemaOrgPL: Organization & { '@context': string } = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Mental Recovery',
  alternateName: 'Mental Recovery',
  url: 'https://mentalrecovery.co/pl',
  logo: 'https://mentalrecovery.co/pl/img/logo.svg',
  description:
    'Odnajdź wewnętrzny pokój i życiową harmonię wraz z naszymi specialistami. Odwiedź naszą stronę i umów wizytę!',
  telephone: '+48 512 088 457',
  email: 'contact@mentalrecovery.co',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+48 512 088 457',
    contactType: 'help',
    areaServed: 'PL',
    availableLanguage: 'EN',
    email: 'contact@mentalrecovery.co',
    hoursAvailable: [
      {
        '@type': 'OpeningHoursSpecification',
        closes: '22:00:00',
        dayOfWeek: 'https://schema.org/Sunday',
        opens: '07:00:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        closes: '22:00:00',
        dayOfWeek: 'https://schema.org/Saturday',
        opens: '08:00:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        closes: '22:00:00',
        dayOfWeek: 'https://schema.org/Thursday',
        opens: '07:00:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        closes: '22:00:00',
        dayOfWeek: 'https://schema.org/Tuesday',
        opens: '07:00:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        closes: '22:00:00',
        dayOfWeek: 'https://schema.org/Friday',
        opens: '07:00:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        closes: '22:00:00',
        dayOfWeek: 'https://schema.org/Monday',
        opens: '07:00:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        closes: '22:00:00',
        dayOfWeek: 'https://schema.org/Wednesday',
        opens: '07:00:00',
      },
    ],
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Kapelanka 6a/39',
    addressLocality: 'Kraków',
    postalCode: '30-363',
    addressCountry: 'Polska',
  },
  image: {
    '@type': 'ImageObject',
    name: '',
    url: 'https://mentalrecovery.co/pl/img/og-image.svg',
  },
  // author: {
  //   '@type': 'Person',
  //   '@id': 'linkedin',
  //   name: 'Web-write',
  //   url: 'https://web-write.co',
  // },
};
export const schemaOrgDE: Organization & { '@context': string } = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Mental Recovery',
  alternateName: 'Mental Recovery',
  url: 'https://mentalrecovery.co/de',
  logo: 'https://mentalrecovery.co/de/img/logo.svg',
  description:
    'Finden Sie inneren Frieden und Lebensharmonie mit unseren Spezialisten. Besuchen Sie unsere Website und buchen Sie einen Termin!',
  telephone: '+48 512 088 457',
  email: 'contact@mentalrecovery.co',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+48 512 088 457',
    contactType: 'help',
    areaServed: 'DE',
    availableLanguage: 'DE',
    email: 'contact@mentalrecovery.co',
    hoursAvailable: [
      {
        '@type': 'OpeningHoursSpecification',
        closes: '22:00:00',
        dayOfWeek: 'https://schema.org/Sunday',
        opens: '07:00:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        closes: '22:00:00',
        dayOfWeek: 'https://schema.org/Saturday',
        opens: '08:00:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        closes: '22:00:00',
        dayOfWeek: 'https://schema.org/Thursday',
        opens: '07:00:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        closes: '22:00:00',
        dayOfWeek: 'https://schema.org/Tuesday',
        opens: '07:00:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        closes: '22:00:00',
        dayOfWeek: 'https://schema.org/Friday',
        opens: '07:00:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        closes: '22:00:00',
        dayOfWeek: 'https://schema.org/Monday',
        opens: '07:00:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        closes: '22:00:00',
        dayOfWeek: 'https://schema.org/Wednesday',
        opens: '07:00:00',
      },
    ],
  },
  // address: {
  //   '@type': 'PostalAddress',
  //   streetAddress: 'Kobierzyńska 5',
  //   addressLocality: 'Kraków',
  //   postalCode: '30-363',
  //   addressCountry: 'Polska',
  // },
  image: {
    '@type': 'ImageObject',
    name: '',
    url: 'https://mentalrecovery.co/de/img/logo.svg',
  },
  // author: {
  //   '@type': 'Person',
  //   '@id': 'linkedin',
  //   name: 'Web-write',
  //   url: 'https://web-write.co',
  // },
};

const metadata = {
  en: metadata_en,
  pl: metadata_pl,
  de: metadata_de,
  schemaen: schemaOrgEN,
  schemapl: schemaOrgPL,
  schemade: schemaOrgDE,
};

export default metadata;
