import { breakpoint } from '@/app/utils/constans';
import styled from 'styled-components';

// Utils

// Components

export const AboutUsHeroWrapper = styled.div`
  @media (max-width: 950px) {
    .about-us-hide-950 {
      display: none;
    }

    .about-us-grid-950 {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
  }
  @media (max-width: ${breakpoint.sm}px) {
    .about-us-grid-950 {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
  }
`;
