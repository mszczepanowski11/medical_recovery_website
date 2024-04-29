import { Colors, breakpoint } from '@/app/utils/constans';
import Link from 'next/link';
import styled from 'styled-components';

// Utils

// Components

export const FooterWrapper = styled.footer``;

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
export const LinksWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;
  height: 100%;
  padding: 0 130px 0 130px;

  @media (max-width: calc(${breakpoint.md}px - 100px)) {
    justify-content: flex-end;
    gap: 1.5rem;
    padding: 0 1rem 0 0;
  }

  @media (max-width: ${breakpoint.sm}px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
`;
export const LinksLogoWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding-bottom: 2rem;
  border-bottom: 1px solid ${Colors.border};

  .footer-logo-link {
    position: absolute;
    top: 0;
    left: 0;
  }

  @media (max-width: ${breakpoint.sm}px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5rem;

    .footer-logo-link {
      position: static;
    }
  }
`;
