import { Colors, breakpoint } from '@/app/utils/constans';
import { motion } from 'framer-motion';
import styled from 'styled-components';

// Utils

// Components

export const OfferCollapseListWrapper = styled.div`
  margin-top: 4.5rem;

  @media (max-width: ${breakpoint.sm}px) {
    margin-top: 2.5rem;
  }
`;

export const CollapseItemWrapper = styled(motion.div)`
  border-bottom: 1px solid #d7d7d7;
  overflow: hidden;
`;

export const CollapseItemTitle = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 48px;
  width: 100%;
  padding: 0;
  border: none;

  background-color: ${Colors.transparent};
  cursor: pointer;
`;
