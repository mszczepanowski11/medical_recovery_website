import { Colors, breakpoint } from '@/app/utils/constans';
import { motion } from 'framer-motion';
import styled from 'styled-components';

// Utils

// Components

export const CookiePopupWrapper = styled(motion.div)`
  position: fixed;
  bottom: 1.5rem;
  left: 0;
  right: 0;
  margin: auto;
  pointer-events: none;
  z-index: 10;
  transition: 0.4s;

  @media (max-width: ${breakpoint.sm}px) {
    bottom: 1rem;
  }
`;

export const CookieContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
  margin-left: 8vw;
  border: 1px solid ${Colors.border};
  border-radius: 1rem;
  background-color: ${Colors.primitives_grey};
  pointer-events: auto;

  @media (max-width: ${breakpoint.md}px) {
    margin-left: 0;
  }
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 1.5rem;
  right: 1rem;
  border: none;
  background-color: ${Colors.transparent};
  cursor: pointer;
`;
