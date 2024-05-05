import { Flex } from '@/app/utils/GlobalStyles';
import { breakpoint } from '@/app/utils/constans';
import styled from 'styled-components';

// Utils

// Components

export const BlogPostsPageWrapper = styled.div``;

export const BlogPostCardsWrapper = styled(Flex)`
  > * {
    max-width: calc(50% - 0.75rem);
    min-width: auto;
  }

  .blog-post-page-no-articles {
    max-width: 100% !important;
  }

  @media (max-width: ${breakpoint.sm}px) {
    > * {
      max-width: calc(50% - 0.75rem) !important;
      min-width: auto !important;
    }
  }

  @media (max-width: calc(${breakpoint.sm}px - 100px)) {
    > * {
      flex-grow: 1;
      max-width: 100% !important;
      min-width: auto !important;
    }
  }
`;
