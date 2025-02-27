'use client';

import React, { FC, useMemo } from 'react';

// Utils

// Components
import Tag from '@/app/atoms/Tag/Tag';
import { Flex } from '@/app/utils/GlobalStyles';
import { TagFilterWrapper } from './TagFilter.styles';

type TagFilterProps = {
  tags?: string[];
  filteredTags?: string[];
  setFilteredTags?: any;
};

const TagFilter: FC<TagFilterProps> = function ({
  tags,
  filteredTags,
  setFilteredTags,
}) {
  const renderTags = useMemo(
    () =>
      tags?.map((tag) => (
        <Tag
          key={tag}
          tag={tag}
          color="background_interactive"
          active={filteredTags?.includes(tag)}
          onClick={(tagClicked: string) =>
            setFilteredTags((prev: string[]) => {
              const tagItems = [...prev];
              const index = prev?.indexOf(tagClicked);
              if (index === -1) return [...prev, tagClicked];
              tagItems.splice(index, 1);
              return tagItems;
            })
          }
        />
      )),
    [filteredTags, setFilteredTags, tags],
  );

  if (!renderTags) return null;
  return (
    <TagFilterWrapper>
      <Flex
        $columnGap="0.4rem"
        $rowGap="0.5rem"
        $flexWrap="wrap"
        className="tag-filter-tags-wrapper"
      >
        {renderTags}
      </Flex>
    </TagFilterWrapper>
  );
};

export default React.memo(TagFilter);
