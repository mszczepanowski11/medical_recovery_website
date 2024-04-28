import { Flex } from '@/app/utils/GlobalStyles';
import { Colors } from '@/app/utils/constans';
import styled from 'styled-components';

// Utils

// Components

export const BlogPostContentWrapper = styled(Flex)``;

export const ContentWrapper = styled.div`
  * {
    color: ${Colors.text_primary};
    margin: 0 0 1rem 0;
  }

  h2 {
    margin-bottom: 0.75rem;
  }

  p {
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }
`;
