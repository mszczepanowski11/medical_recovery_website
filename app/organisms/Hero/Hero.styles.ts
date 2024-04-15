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
  top: calc(100% - 80px);
  left: calc(100% + 70px);
  width: 100px;
  border-bottom: 2px dashed #aa7ce8;
  border-left: 2px dashed #aa7ce8;
  border-bottom-left-radius: 100%;
  rotate: -20deg;

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
`;
