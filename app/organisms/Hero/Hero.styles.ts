import { headerHeight } from '@/app/utils/constans';
import styled from 'styled-components';

// Utils

// Components

export const HeroWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* height: 100vh; */
  padding-top: ${headerHeight}px;
`;

export const HeroImageWrapper = styled.div`
  position: relative;
`;
