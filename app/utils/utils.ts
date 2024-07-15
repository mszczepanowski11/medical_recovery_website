/* eslint-disable no-plusplus */
export const removeDuplicates = (array: string[]) => {
  return array
    ?.filter((value) => value && value !== '')
    .filter((value: string, index, self) => {
      return self.indexOf(value) === index;
    });
};

export const makeTagsArrayFromString = (stringEl: string) => {
  if (!stringEl) return undefined;

  const returnedString =
    stringEl?.split(', ').filter((str) => str.length > 0) || [];

  return removeDuplicates(returnedString);
};

export const collectAllTagsFromSpecialist = (tags: string[] | undefined) => {
  if (!tags) return undefined;
  return removeDuplicates(tags.flat());
};

export const specialistTagsFilterFunc = (
  psychoTags: string[],
  filteredTags: string[],
) => {
  if (!filteredTags || filteredTags.length < 1 || !psychoTags) return true;

  return psychoTags?.some((psychoTag) => filteredTags.includes(psychoTag));
};

export const specialistLangFilterFunc = (
  selectedLangs: string[],
  psychoLangs: string[],
) => {
  if (!selectedLangs || selectedLangs.length < 1) return true;
  if (!psychoLangs || psychoLangs?.length < 1) return true;

  return selectedLangs?.some((lang) => psychoLangs.includes(lang));
};

export const YMDToDMStringY = (
  date: string,
  months_to: { [key: string]: string },
) => {
  if (!date) return date;
  const dateArray = date.split('-');

  if (dateArray.length >= 2 && months_to) {
    return `${dateArray[2]} ${months_to[dateArray[1].replaceAll('0', '')]} ${dateArray[0]}`;
  }
  return date;
};

export type ChangeFrequencyType =
  | 'always'
  | 'hourly'
  | 'daily'
  | 'weekly'
  | 'monthly'
  | 'yearly'
  | 'never';

export const regularPages: {
  url: string;
  priority: number;
  changeFrequency: ChangeFrequencyType;
  name: { en: string; pl: string; de: string };
}[] = [
  {
    name: { en: 'Home page', pl: 'Strona główna', de: 'Startseite' },
    url: '',
    priority: 1,
    changeFrequency: 'weekly',
  },
  {
    name: { en: 'About us', pl: 'O nas', de: 'Über uns' },
    url: '/about-us',
    priority: 0.7,
    changeFrequency: 'monthly',
  },
  {
    name: { en: 'Offer', pl: 'Oferta', de: 'Angebot' },
    url: '/offer',
    priority: 0.7,
    changeFrequency: 'monthly',
  },
  {
    name: { en: 'Specialists', pl: 'Specialiści', de: 'Spezialisiert' },
    url: '/specialists',
    priority: 1,
    changeFrequency: 'weekly',
  },
  {
    name: { en: 'Blog', pl: 'Blog', de: 'Blog' },
    url: '/blog',
    priority: 0.7,
    changeFrequency: 'monthly',
  },
  {
    name: { en: 'Contact', pl: 'Kontakt', de: 'Kontakt' },
    url: '/contact',
    priority: 0.7,
    changeFrequency: 'never',
  },
  {
    name: {
      en: 'Privacy policy',
      pl: 'Polityka prywatności',
      de: 'Datenschutzrichtlinie',
    },
    url: '/privacy-policy',
    priority: 0,
    changeFrequency: 'never',
  },
  {
    name: { en: 'Statue', pl: 'Regulamin', de: 'Satzung' },
    url: '/statute',
    priority: 0,
    changeFrequency: 'never',
  },
];

export const LANG_SORT_ORDER = ['en', 'pl', 'de'];

export const addSizesToImgUrl = (
  url: string,
  handle: string,
  width: number,
  height: number,
  destinationWidth: number,
) => {
  const splitedUrl = url.split(`/${handle}`)[0];
  if (!splitedUrl) return undefined;
  const resizePhrase = `resize=height:${Math.ceil((destinationWidth * height) / width)},width:${destinationWidth}`;

  return `${splitedUrl}/${resizePhrase}/${handle}`;
};

export async function shuffleArray(array: any[]) {
  if (array.length < 2) return array;
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}
