import { Colors } from '@/app/utils/constans';
import { motion } from 'framer-motion';
import styled from 'styled-components';

// Utils

// Components

export const SortWrapper = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  height: 3rem;
  width: 100%;
  padding: 0 1.25rem;
  border: 1px solid ${Colors.border};
  border-radius: 1.5rem;
  font-size: 1rem;
  font-weight: 500;
  color: ${Colors.text_primary};
  background-color: ${Colors.transparent};
  transition: 0.2s;
  cursor: pointer;

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

export const SortDropdown = styled(motion.div)`
  position: absolute;
  top: calc(100% + 0.5rem);
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
  padding: 1rem;
  border: 1px solid ${Colors.border};
  border-radius: 1.5rem;
  background-color: ${Colors.primitives_white};
  z-index: 9;
`;

export const SortOption = styled.button<{
  $noBorder?: boolean;
  $active?: boolean;
}>`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  height: 2.4rem;
  width: 100%;
  padding: 0.5rem 1.1rem;
  border: none;
  /* border-bottom: ${({ $noBorder }) =>
    $noBorder ? 'none' : `1px solid ${Colors.border}`}; */
  border-radius: 1.2rem;
  background-color: ${({ $active }) =>
    $active ? '#D8FFD4' : Colors.primitives_grey};
  transition: 0.2s;
  cursor: pointer;

  &:hover {
    background-color: ${Colors.border};
  }
`;
