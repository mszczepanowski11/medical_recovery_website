import { Flex } from '@/app/utils/GlobalStyles';
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
  overflow: hidden;
`;

export const FAQCardTitle = styled(Flex)`
  width: 100%;
  border: none;
  padding-left: 1rem;
  background-color: ${Colors.transparent};
  cursor: pointer;
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
`;

export const ContentWrapper = styled.div`
  * {
    color: ${Colors.text_primary};
    margin: 0 0 1rem 0;
  }

  h2 {
    margin-bottom: 0.75rem;
  }

  p {
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }

  a {
    display: inline-block;
    margin-bottom: 0;
    border-radius: 0.25rem;
    text-decoration: underline;
  }
`;
