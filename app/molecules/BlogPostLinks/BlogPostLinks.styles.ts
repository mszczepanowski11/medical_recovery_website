import { Colors, focusOutline, headerHeight } from '@/app/utils/constans';
import styled from 'styled-components';

// Utils

// Components

export const BlogPostLinksWrapper = styled.div`
  position: sticky;
  top: calc(${headerHeight}px + 2rem);
`;

export const LinkItem = styled.button`
  border: none;
  background-color: ${Colors.transparent};
  cursor: pointer;
  transition:
    0.2s,
    outline 0;

  &:hover {
    text-decoration: underline;
    text-decoration-color: ${Colors.text_primary};
  }

  &:focus-visible {
    outline: ${focusOutline};
  }
`;
