import { Colors } from '@/app/utils/constans';
import styled from 'styled-components';

// Utils

// Components

export const TextContentWrapper = styled.div``;

export const ContentWrapper = styled.div`
  * {
    color: ${Colors.text_primary};
    margin: 0 0 1rem 0;
  }

  h1 {
    margin-bottom: 3rem;
    font-size: 3rem;
    text-align: center;
  }

  h2 {
    font-size: 1.6rem;
    margin-bottom: 1.5rem;
    margin-top: 6rem;
    text-align: center;
  }

  h3 {
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
    text-align: center;
  }

  h4 {
    font-size: 1rem;
    margin-bottom: 1.5rem;
    text-align: center;
  }

  p {
    font-size: 1.1rem;
    margin-bottom: 1.5rem;
  }

  a {
    text-decoration: underline;
  }
`;
