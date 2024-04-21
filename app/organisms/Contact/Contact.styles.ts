import { breakpoint } from '@/app/utils/constans';
import styled from 'styled-components';

// Utils

// Components

export const ContactWrapper = styled.div``;

export const ContactInside = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  border-radius: 1.5rem;
  background-color: #f2ebf7;
  overflow: hidden;

  @media (max-width: ${breakpoint.md}px) {
    min-width: 370px;
  }

  @media (max-width: calc(${breakpoint.sm}px - 100px)) {
    flex-direction: column-reverse;
    min-width: auto;
  }
`;

export const RightImageWrapper = styled.div`
  position: relative;
  aspect-ratio: 1.2;
  width: 30%;
  min-width: 400px;

  img {
    object-fit: cover;
  }

  @media (max-width: ${breakpoint.md}px) {
    min-width: 370px;
  }

  @media (max-width: calc(${breakpoint.sm}px + 50px)) {
    min-width: 340px;
  }

  @media (max-width: ${breakpoint.sm}px) {
    min-width: 320px;
  }

  @media (max-width: calc(${breakpoint.sm}px - 75px)) {
    min-width: 300px;
  }

  @media (max-width: calc(${breakpoint.sm}px - 100px)) {
    max-height: 300px;
    width: 100%;
    min-width: 200px;
    aspect-ratio: 5/3;
  }
`;
