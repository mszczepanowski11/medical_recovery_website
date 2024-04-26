'use client';

import React, { FC, useMemo } from 'react';

// Utils
import { SortValues } from '@/app/atoms/Sort/Sort.variables';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

// Components
import Input from '@/app/atoms/Input/Input';
import Sort from '@/app/atoms/Sort/Sort';
import Checkbox from '@/app/atoms/Checkbox/Checkbox';
import { Flex } from '@/app/utils/GlobalStyles';
import { BlogPostPageFiltersWrapper } from './BlogPostPageFilters.styles';

type BlogPostPageFiltersProps = {
  checkboxFilters: string[];
  filters: {
    search: string;
    sort: keyof typeof SortValues | undefined;
    filter: string[];
  };
  setFilters: React.Dispatch<
    React.SetStateAction<{
      search: string;
      sort: keyof typeof SortValues | undefined;
      filter: string[];
    }>
  >;
};

const BlogPostPageFilters: FC<BlogPostPageFiltersProps> = function ({
  checkboxFilters,
  filters,
  setFilters,
}) {
  const renderFilterCheckbox = useMemo(
    () =>
      checkboxFilters?.map((item: string) => (
        <Checkbox
          key={item}
          checked={filters.filter.includes(item)}
          onChange={() => {
            const index = filters.filter?.indexOf(item);
            if (!index && index !== 0) return null;
            if (index === -1) {
              return setFilters((prev) => ({
                ...prev,
                filter: [...(prev?.filter || []), item],
              }));
            }

            const newValues = [...filters.filter];
            newValues.splice(index, 1);

            return setFilters((prev) => ({ ...prev, filter: newValues }));
          }}
          label={item}
        />
      )),
    [checkboxFilters, filters.filter, setFilters],
  );

  return (
    <BlogPostPageFiltersWrapper $flexDirection="column" $rowGap="1rem">
      <Input
        value={filters.search}
        onChange={(value) => setFilters((prev) => ({ ...prev, search: value }))}
        iconRight={faSearch}
      />
      <Sort
        value={filters.sort}
        onChange={(value) => setFilters((prev) => ({ ...prev, sort: value }))}
      />
      <Flex
        $flexDirection="column"
        $alignItems="flex-start"
        $rowGap="0.75rem"
        $marginTop="0.5rem"
      >
        {renderFilterCheckbox}
      </Flex>
    </BlogPostPageFiltersWrapper>
  );
};

export default React.memo(BlogPostPageFilters);
