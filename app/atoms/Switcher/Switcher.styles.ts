import { Colors } from '@/app/utils/constans';
import styled from 'styled-components';

// Utils

// Components

export const SwitcherWrapper = styled.button<{ $active: boolean }>`
  flex-shrink: 0;
  position: relative;
  display: inline-flex;
  height: 1.4rem;
  width: 2.8rem;
  padding: 0.2rem;
  border: none;
  border-radius: 0.7rem;
  background-color: ${({ $active }) =>
    $active ? `rgba(128, 246, 117, 0.3)` : Colors.border};
  transition: 0.2s ease-in-out;
  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    top: 0.2rem;
    left: ${({ $active }) =>
      $active ? 'calc(2.8rem - 1rem - 0.2rem)' : '0.2rem'};
    width: 1rem;
    aspect-ratio: 1;
    border-radius: 0.7rem;
    background-color: ${Colors.background_interactive_hover};
    transition: 0.2s ease-in-out;
  }

  &:disabled {
    cursor: not-allowed;
    &::after {
      background-color: #bbbbbb;
    }
  }
`;
