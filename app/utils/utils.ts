export const removeDuplicates = (array: string[]) => {
  return array.filter((value: string, index, self) => {
    return self.indexOf(value) === index;
  });
};

export const makeTagsArrayFromString = (tags: string) => {
  if (!tags) return undefined;

  const returnedTags =
    tags
      ?.trim()
      .split(',')
      .filter((tag) => tag.length > 0) || [];

  return removeDuplicates(returnedTags);
};

export const collectAllTagsFromSpecialist = (tags: string[] | undefined) => {
  if (!tags) return undefined;

  return makeTagsArrayFromString(removeDuplicates(tags).join(','));
};

export const specialistTagsFilterFunc = (
  psychoTags: string,
  filteredTags: string[],
) => {
  if (!filteredTags || filteredTags.length < 1 || !psychoTags)
    return psychoTags;

  return makeTagsArrayFromString(psychoTags)?.some((psychoTag) =>
    filteredTags.includes(psychoTag),
  );
};
