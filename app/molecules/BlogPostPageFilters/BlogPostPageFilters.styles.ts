import { Flex } from '@/app/utils/GlobalStyles';
import { headerHeight } from '@/app/utils/constans';
import styled from 'styled-components';

// Utils

// Components

export const BlogPostPageFiltersWrapper = styled(Flex)`
  position: sticky;
  top: calc(${headerHeight}px + 2rem);
`;
