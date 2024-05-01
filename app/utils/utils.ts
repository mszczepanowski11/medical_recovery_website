export const removeDuplicates = (array: string[]) => {
  return array.filter((value: string, index, self) => {
    return self.indexOf(value) === index;
  });
};

export const makeTagsArrayFromString = (stringEl: string) => {
  if (!stringEl) return undefined;

  const returnedString =
    stringEl
      ?.trim()
      .split(',')
      .filter((str) => str.length > 0) || [];

  return removeDuplicates(returnedString);
};

export const collectAllTagsFromSpecialist = (tags: string[] | undefined) => {
  if (!tags) return undefined;

  return makeTagsArrayFromString(removeDuplicates(tags).join(','));
};

export const specialistTagsFilterFunc = (
  psychoTags: string,
  filteredTags: string[],
) => {
  if (!filteredTags || filteredTags.length < 1 || !psychoTags) return true;

  return makeTagsArrayFromString(psychoTags)?.some((psychoTag) =>
    filteredTags.includes(psychoTag),
  );
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
