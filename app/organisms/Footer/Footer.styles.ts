import { Colors } from '@/app/utils/constans';
import Link from 'next/link';
import styled from 'styled-components';

// Utils

// Components

export const FooterWrapper = styled.div``;

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
