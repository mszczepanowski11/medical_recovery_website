import { Colors, headerHeight } from '@/app/utils/constans';
import styled from 'styled-components';

// Utils

// Components

export const HeaderWrapper = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  height: ${headerHeight}px;
  background-color: ${Colors.background_background_white};
  box-shadow: 0px 0px 40px 0px #22253b0d;
`;

export const NavButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.4rem;
  border: none;
  background-color: ${Colors.transparent};
  cursor: pointer;
`;
