import { Colors } from '@/app/utils/constans';
import styled from 'styled-components';

// Utils

// Components

export const HeroWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeroImageWrapper = styled.div`
  position: relative;
`;

export const HeroLine = styled.div`
  position: absolute;
  top: calc(100% - 65px);
  left: calc(100% + 35px);
  width: 100px;
  border: none;
  border-bottom: 2px dashed #aa7ce8;
  border-left: 2px dashed #aa7ce8;
  border-bottom-left-radius: 100%;
  rotate: -14deg;

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
`;
