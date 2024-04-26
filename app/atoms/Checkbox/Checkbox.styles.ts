import { Colors } from '@/app/utils/constans';
import { motion } from 'framer-motion';
import styled from 'styled-components';

// Utils

// Components

export const CheckboxWrapper = styled(motion.button)<{ $checkedItem: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.65rem;
  padding: 0;
  border: 0;
  background-color: ${Colors.transparent};
  cursor: pointer;

  &:hover {
    .checkbox-radio {
      box-shadow: ${({ $checkedItem }) =>
        $checkedItem
          ? `0 0 0 1px ${Colors.text_interactive}`
          : `inset 0 0 0 1px ${Colors.border}`};
    }
  }
`;
export const CheckboxButton = styled(motion.div)`
  position: relative;
  width: 1rem;
  height: 1rem;
  border: 1px solid ${Colors.border};
  border-radius: 0.5rem;
  background-color: ${Colors.transparent};
  transition: 0.2s;
`;
export const InsideCircle = styled(motion.span)`
  position: absolute;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  border-radius: 50%;
  background-color: ${Colors.text_interactive};
`;
