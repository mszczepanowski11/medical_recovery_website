import {
  Colors,
  breakpoint,
  headerHeight,
  maxContainerWidth,
} from '@/app/utils/constans';
import styled from 'styled-components';

// Utils

// Components

export const OfferDiagnosisWrapper = styled.div`
  margin: 4rem auto 0 auto;
  background-color: ${Colors.background_background_grey_light};

  .offer-intro-grid-container {
    column-gap: 7rem;
    overflow: visible;
    clip-path: none;
  }

  @media (max-width: 1200px) {
    .offer-intro-grid-container {
      column-gap: 3rem;
    }
  }

  @media (max-width: ${breakpoint.md}px) {
  }

  @media (max-width: 850px) {
    .offer-intro-grid-container {
      column-gap: 2rem;
    }
  }

  @media (max-width: ${breakpoint.sm}px) {
    margin-top: 0;

    .offer-intro-grid-container {
      column-gap: 2rem;
    }
  }
`;

export const StickyElement = styled.div`
  position: sticky;
  top: calc(${headerHeight}px + 2rem);
  display: flex;
  flex-direction: column;
  align-items: center;
`;
