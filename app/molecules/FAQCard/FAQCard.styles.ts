import { Colors } from '@/app/utils/constans';
import { motion } from 'framer-motion';
import styled from 'styled-components';

// Utils

// Components

export const FAQCardWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  height: 58px;
  border: 1px solid ${Colors.border};
  background-color: ${Colors.primitives_white};
  border-radius: 1rem;
  cursor: pointer;
  overflow: hidden;
`;

export const ShowMoreBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 58px;
  width: 58px;
  border: none;
  border-radius: 50%;
  background-color: ${Colors.transparent};

  transition: 0.2s;
  /* 
  &:active {
    background-color: rgba(0, 0, 0, 0.05);
  } */
`;
