import styled from 'styled-components';

// Utils

// Components

export const BlogPostCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.5rem;
  border: 1px solid #e7e7e7;
  border-radius: 1rem;
  transition: 0.2s;

  &:hover {
    box-shadow: 0 0 0 1px #d7d7d7;
  }

  .blog-post-link {
    transition: 0.2s;
    &:hover {
      text-decoration: underline;
    }
  }
`;
