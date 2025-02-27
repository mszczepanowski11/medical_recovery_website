import { breakpoint } from '@/app/utils/constans';
import styled from 'styled-components';

// Utils

// Components

export const TestimonialCardWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
  max-width: calc(50% - 1rem);
  padding: 2rem;
  border-radius: 1rem;
  background-color: #fafafa;
  transition: 0.2s;

  &:hover {
    box-shadow: 0px 0px 20px 0px #22253b0d;
  }

  @media (max-width: ${breakpoint.sm + 100}px) {
    max-width: calc(100vw - 2rem);
    padding: 1.4rem;
  }
`;
