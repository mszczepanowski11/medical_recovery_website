import { Colors, breakpoint } from '@/app/utils/constans';
import styled from 'styled-components';

// Utils

// Components

export const BlogPostCardWrapper = styled.div<{
  $customGap?: string;
  $styleMd?: any;
}>`
  display: flex;
  flex-direction: column;
  min-width: 320px;
  max-width: ${({ $customGap }) =>
    $customGap ? `calc(50% - ${$customGap} / 2)` : `calc(33% - 6rem / 3)`};
  gap: 1rem;
  padding: 1.5rem;
  border: 1px solid ${Colors.border};
  border-radius: 1rem;
  transition: 0.2s;

  &:hover {
    box-shadow: 0 0 0 1px ${Colors.border};
  }

  .blog-post-link {
    transition: 0.2s;
    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: ${breakpoint.md}px) {
    ${({ $styleMd }) => ({ ...($styleMd || {}) })};
  }
`;
