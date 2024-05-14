import {
  Colors,
  breakpoint,
  headerHeight,
  headerHeightSm,
} from '@/app/utils/constans';
import { motion } from 'framer-motion';
import Link from 'next/link';
import styled from 'styled-components';

// Utils

// Components

export const HeaderWrapper = styled(motion.header)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  height: ${headerHeight}px;
  background-color: ${Colors.background_background_white};
  box-shadow: 0px 3px 23px 0px #0000000a;
  z-index: 997;

  .header-close-btn {
    display: none;
  }

  @media (max-width: ${breakpoint.sm}px) {
    height: ${headerHeightSm}px;

    .header-close-btn {
      display: flex;
    }
  }
`;

export const NavButton = styled(Link)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.65rem;
  padding: 0.4rem;
  border: none;
  background-color: ${Colors.transparent};
  cursor: pointer;

  .header-menu-icon-sm {
    display: none;
  }

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

  @media (max-width: ${breakpoint.sm}px) {
    .header-menu-icon-sm {
      display: block;
    }
  }
`;

export const LinksWrapper = styled.div<{ $isOpen: boolean }>`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1.6rem;
  height: 100%;

  @media (max-width: calc(${breakpoint.md}px + 50px)) {
    .header-meeting-btn {
      display: none;
    }
  }

  @media (max-width: calc(${breakpoint.sm}px + 100px)) {
    gap: 1.1rem;
  }

  @media (max-width: ${breakpoint.sm}px) {
    position: absolute;
    top: 0;
    left: 0;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    height: calc(100vh);
    padding: 0.9rem 1.5rem 1.5rem 1.5rem;
    translate: ${({ $isOpen }) => ($isOpen ? '0' : '-100% 0')};
    background-color: ${Colors.background_background_white};
    box-shadow: 0px 3px 23px 0px #0000000a;
    transition: 0.4s;
    z-index: 997;

    .header-lang-wide {
      display: none;
    }
  }
`;

export const RightWrapperSm = styled.div`
  display: none;
  justify-content: flex-end;
  gap: 1rem;

  @media (max-width: ${breakpoint.sm}px) {
    display: flex;
  }
`;

export const ShowHideMenuSmBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0 0 0.5rem;
  border: 1px solid ${Colors.transparent};
  background-color: ${Colors.transparent};
  cursor: pointer;
`;

export const LogoWrapper = styled.div`
  flex-grow: 1;
  display: none;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  padding-bottom: 1.5rem;

  @media (max-width: ${breakpoint.sm}px) {
    display: flex;
  }
`;
