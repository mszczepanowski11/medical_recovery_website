import { Colors, breakpoint } from '@/app/utils/constans';
import styled from 'styled-components';

// Utils

// Components

export const OfferHeroWrapper = styled.div`
  overflow: hidden;
  .offer-hero-grid-container {
  }

  .offer-hero-right-img {
    z-index: 5;
  }

  @media (max-width: ${breakpoint.sm}px) {
    .offer-hero-right-img {
      left: 20vw !important;
    }
  }

  @media (max-width: 550px) {
    .offer-hero-right-img {
      left: 10vw !important;
    }
  }

  @media (max-width: 430px) {
    .offer-hero-right-img {
      left: 0 !important;
    }
  }
`;

export const ColoredSquare = styled.div`
  position: absolute;
  top: 40%;
  bottom: -8%;
  left: 30%;
  width: calc(100vw - 30%);
  background-color: ${Colors.background_blue};

  @media (max-width: ${breakpoint.sm}px) {
    width: calc(100vw - 30%);
    left: calc(30% + 20vw);
  }

  @media (max-width: 550px) {
    width: calc(100vw - 30%);
    left: calc(30% + 10vw);
  }

  @media (max-width: 430px) {
    width: calc(100vw - 30%);
    left: calc(30%);
  }
`;
