import { Flex } from '@/app/utils/GlobalStyles';
import { Colors, breakpoint } from '@/app/utils/constans';
import styled from 'styled-components';

// Utils

// Components

export const BlogPostContentWrapper = styled(Flex)`
  .blog-post-content-links {
    display: none;
  }

  @media (max-width: ${breakpoint.sm}px) {
    .blog-post-content-links {
      position: static;
      display: flex;
      padding-top: 1cap;
    }
  }
`;

export const ContentWrapper = styled.div`
  * {
    color: ${Colors.text_primary};
    margin: 0 0 1rem 0;
  }

  h2 {
    padding-top: 0.75rem;
    margin-bottom: 2.5rem;
    font-weight: 600;
  }

  p {
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }

  figure {
    max-height: 400px;
    margin-bottom: 2rem;
  }

  .button {
    display: inline-block;
    padding-top: 0.25rem;
    padding-bottom: 2.5rem;
    text-align: center;

    &:last-child {
      padding-top: 1.75rem;
      padding-bottom: 0;
    }

    p {
      margin-bottom: 0;

      a {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 2.75rem;
        padding: 0 2.6rem;
        border-radius: 1.375rem;
        margin-bottom: 0;
        font-weight: 500;
        background-color: ${Colors.background_interactive};
        transition:
          0.2s,
          outline 0;

        &:hover {
          background-color: ${Colors.background_interactive_hover};
        }
      }
    }
  }

  .center {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: ${breakpoint.sm}px) {
    h2 {
      font-size: 1.5rem;
    }
  }
`;
