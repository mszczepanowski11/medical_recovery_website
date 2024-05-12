import {
  Colors,
  breakpoint,
  headerHeight,
  maxContainerWidth,
} from '@/app/utils/constans';
import styled from 'styled-components';

// Utils

// Components

export const OfferIntroTopWrapper = styled.div`
  max-width: calc(${maxContainerWidth}px + 16rem);
  margin: auto;
  padding-top: 6.5rem;
  border-top-left-radius: 15rem;
  border-top-right-radius: 15rem;
  background-color: ${Colors.background_blue_hover};

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
    padding-top: 3rem;
    border-top-left-radius: 8rem;
    border-top-right-radius: 8rem;
  }

  @media (max-width: 850px) {
    .offer-intro-grid-container {
      column-gap: 2rem;
    }
  }

  @media (max-width: ${breakpoint.sm}px) {
    padding-top: 6.5rem;
    border-top-left-radius: 13rem;
    border-top-right-radius: 13rem;

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
