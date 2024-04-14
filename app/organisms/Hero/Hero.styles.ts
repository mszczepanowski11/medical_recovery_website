import { Colors, headerHeight } from '@/app/utils/constans';
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

export const HeroLine = styled.div`
  position: absolute;
  top: calc(100% + 10px);
  left: calc(100% + 10px);
  width: 100px;
  border-bottom: 2px dashed ${Colors.stroke_tags};
  /* border-left: 2px dashed ${Colors.stroke_tags}; */
  border-bottom-left-radius: 100%;
  rotate: 5deg;

  &::after {
    content: '';
    position: absolute;
    left: 100%;
    top: 100%;
    translate: 0 -50%;
    transform: rotate(15deg);
    width: 16px;
    height: 12px;
    border: 2px solid ${Colors.stroke_tags};
    border-radius: 50% 40% 50% 40% / 50% 40% 50% 40%;
    background-color: ${Colors.primitives_white};
  }
`;
