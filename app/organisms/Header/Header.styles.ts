import { Colors, headerHeight } from '@/app/utils/constans';
import Link from 'next/link';
import styled from 'styled-components';

// Utils

// Components

export const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  height: ${headerHeight}px;
  background-color: ${Colors.background_background_white};
  box-shadow: 0px 0px 40px 0px #22253b0d;
  z-index: 997;
`;

export const NavButton = styled(Link)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.4rem;
  border: none;
  background-color: ${Colors.transparent};
  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 100%;
    height: 1px;
    width: 100%;
    transition: 0.25s;
  }

  &:hover {
    &::after {
      box-shadow: inset 6.5em 0 0 0 ${Colors.background_interactive_hover};
    }
  }
`;
