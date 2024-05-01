import { Colors } from '@/app/utils/constans';
import styled from 'styled-components';

// Utils

// Components

export const TabsWrapper = styled.div``;

export const TabButton = styled.button<{ $active: boolean }>`
  position: relative;
  padding: 0 0.75rem;
  padding-bottom: 0.35rem;
  border: none;
  background-color: ${Colors.transparent};
  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    right: 100%;
    height: 2px;
    width: 100%;
    transition: 0.25s;
    box-shadow: ${({ $active }) =>
      $active
        ? `inset 20rem 0 0 0 ${Colors.background_interactive_hover}`
        : undefined};
  }

  &:hover {
    &::after {
      box-shadow: inset 20rem 0 0 0 ${Colors.background_interactive_hover};
    }
  }
`;
