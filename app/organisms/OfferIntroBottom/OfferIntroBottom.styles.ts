import {
  Colors,
  breakpoint,
  headerHeight,
  maxContainerWidth,
} from '@/app/utils/constans';
import styled from 'styled-components';

// Utils

// Components

export const OfferIntroBottomWrapper = styled.div`
  max-width: calc(${maxContainerWidth}px + 16rem);
  margin: auto;
  padding-bottom: 6.5rem;
  border-bottom-left-radius: 15rem;
  border-bottom-right-radius: 15rem;
  background-color: ${Colors.background_purple_light};

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
    border-bottom-left-radius: 8rem;
    border-bottom-right-radius: 8rem;
  }

  @media (max-width: 850px) {
    .offer-intro-grid-container {
      column-gap: 2rem;
    }
  }

  @media (max-width: ${breakpoint.sm}px) {
    padding-bottom: 6.5rem;
    border-bottom-left-radius: 13rem;
    border-bottom-right-radius: 13rem;

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
