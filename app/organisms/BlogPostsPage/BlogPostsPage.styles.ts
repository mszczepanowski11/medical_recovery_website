import { Flex } from '@/app/utils/GlobalStyles';
import styled from 'styled-components';

// Utils

// Components

export const BlogPostsPageWrapper = styled.div``;

export const BlogPostCardsWrapper = styled(Flex)`
  > * {
    max-width: calc(50% - 0.75rem);
    min-width: auto;
  }
`;
