import {
  Colors,
  breakpoint,
  headerHeight,
  headerHeightSm,
  maxContainerWidth,
} from '@/app/utils/constans';
import styled from 'styled-components';

// Utils

// Components

export const HeroWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  .hero-description {
    max-width: 500px;
  }

  .hero-background {
    display: none;
  }

  @media (max-width: ${breakpoint.md}px) {
    min-height: calc(100vh - ${headerHeight}px);

    .hero-hide-mb {
      display: none;
    }

    .hero-grid-item {
    }

    .hero-background {
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: #a1e5ed33;
      z-index: 4;
    }
  }

  @media (max-width: ${breakpoint.md}px) {
    min-height: calc(70vh - ${headerHeightSm}px);
  }

  @media (max-width: 900px) {
    .hero-grid-container {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: ${breakpoint.sm}px) {
    .hero-grid-container {
      grid-template-columns: 1fr;
    }
  }
`;

export const HeroImageWrapper = styled.div`
  position: relative;

  @media (max-width: ${breakpoint.md}px) {
    max-width: 340px !important;
    left: 0 !important;
  }

  @media (max-width: 900px) {
    display: none;
  }

  @media (max-width: ${breakpoint.sm}px) {
    display: block;
    left: 0 !important;
    min-width: 270px !important;
    max-width: 300px !important;
  }
`;

export const HeroLine = styled.div`
  position: absolute;
  top: calc(100% - 65px);
  left: calc(100% + 35px);
  width: calc(
    min(calc(38px + ${maxContainerWidth}px / 2.5), 50vw) - calc(50% - 0.75rem) +
      calc(((${maxContainerWidth}px - 1rem) / 2) - 0.75rem) * 0.2
  );
  aspect-ratio: 1.45;
  border: none;
  border-bottom: 2px dashed #aa7ce8;
  border-left: 2px dashed #aa7ce8;
  border-bottom-left-radius: 100%;
  rotate: -14deg;
  z-index: 3;

  &::after {
    content: '';
    position: absolute;
    left: 100%;
    top: 100%;
    translate: 0 -50%;
    transform: rotate(15deg);
    width: 16px;
    height: 12px;
    border: 2px solid #aa7ce8;
    border-radius: 50% 40% 50% 40% / 50% 40% 50% 40%;
    background-color: ${Colors.primitives_white};
  }

  &::before {
    content: '';
    position: absolute;
    top: -1px;
    left: 0;
    height: 2px;
    width: 40%;
    background-color: ${Colors.background_background_white};
  }

  @media (max-width: 1300px) {
    width: calc(
      min(calc(38px + ${maxContainerWidth}px / 2.6), 50vw) - calc(50% - 0.75rem) +
        calc(((${maxContainerWidth}px - 1rem) / 2) - 0.75rem) * 0.2
    );
    aspect-ratio: 1.55;
    rotate: -14deg;
  }

  @media (max-width: 1250px) {
    width: calc(
      min(calc(38px + ${maxContainerWidth}px / 2.8), 50vw) - calc(50% - 0.75rem) +
        calc(((${maxContainerWidth}px - 1rem) / 2) - 0.75rem) * 0.2
    );
  }

  @media (max-width: 1200px) {
    width: calc(
      min(calc(38px + ${maxContainerWidth}px / 2.95), 50vw) - calc(
          50% - 0.75rem
        ) + calc(((${maxContainerWidth}px - 1rem) / 2) - 0.75rem) * 0.2
    );
  }

  @media (max-width: 1150px) {
    width: calc(
      min(calc(38px + ${maxContainerWidth}px / 3.2), 50vw) - calc(50% - 0.75rem) +
        calc(((${maxContainerWidth}px - 1rem) / 2) - 0.75rem) * 0.2
    );
  }

  @media (max-width: 1100px) {
    width: calc(
      min(calc(38px + ${maxContainerWidth}px / 3.5), 50vw) - calc(50% - 0.75rem) +
        calc(((${maxContainerWidth}px - 1rem) / 2) - 0.75rem) * 0.2
    );
    rotate: -16deg;
  }

  @media (max-width: 1060px) {
    width: calc(
      min(calc(38px + ${maxContainerWidth}px / 3.8), 50vw) - calc(50% - 0.75rem) +
        calc(((${maxContainerWidth}px - 1rem) / 2) - 0.75rem) * 0.2
    );
    aspect-ratio: 1.95;
  }

  @media (max-width: ${breakpoint.md}px) {
    display: none;
  }
`;
