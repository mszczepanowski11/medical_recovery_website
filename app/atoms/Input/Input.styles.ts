import { Colors } from '@/app/utils/constans';
import styled from 'styled-components';

// Utils

// Components

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const InputElement = styled.input<{
  $hasIcon?: boolean;
  as?: 'textarea' | 'input';
}>`
  height: ${({ as }) => (as === 'textarea' ? '16rem' : '3rem')};
  width: 100%;
  padding: 1.25rem;
  padding-right: ${({ $hasIcon }) => ($hasIcon ? '2.25rem' : undefined)};
  border: 1px solid ${Colors.border};
  border-radius: ${({ as }) => (as === 'textarea' ? '0.5rem' : '1.5rem')};
  font-size: 1rem;
  font-weight: 500;
  color: ${Colors.text_primary};
  transition: 0.2s;
  resize: none;

  &:hover {
    box-shadow: 0 0 0 1px ${Colors.border};
  }

  &:focus-within {
    outline: none;
    border-color: ${Colors.text_interactive};

    &:hover {
      box-shadow: none;
    }
  }
`;
