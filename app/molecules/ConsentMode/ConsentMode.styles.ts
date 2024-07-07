import { Colors, breakpoint } from '@/app/utils/constans';
import { motion } from 'framer-motion';
import styled from 'styled-components';

// Utils

// Components

export const ConsentModeWrapper = styled(motion.div)<{
  $isPrivacyPolicy?: boolean;
}>`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  background-color: ${({ $isPrivacyPolicy }) =>
    $isPrivacyPolicy ? Colors.transparent : 'rgba(0, 0, 0, 0.3)'};
  pointer-events: ${({ $isPrivacyPolicy }) =>
    $isPrivacyPolicy ? 'none' : 'auto'};
  z-index: 998;
  transition: 0.4s;
`;

export const ConsentContainer = styled(motion.div)`
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
  margin: 3vw 3vh;
  border: 1px solid ${Colors.border};
  border-radius: 1rem;
  background-color: ${Colors.primitives_grey};
  pointer-events: auto;
  z-index: 998;

  @media (max-width: ${breakpoint.md}px) {
    margin-left: 0;
  }

  @media (max-width: ${breakpoint.sm}px) {
    min-width: auto;
    margin-right: 1rem;
    padding: 1rem;
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

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.2rem;
  width: 100%;

  > * {
    flex-grow: 1;
    width: calc(50% - 0.6rem);
    min-width: 150px;
  }
`;

export const ContentWrapper = styled(motion.div)`
  position: relative;
  overflow: hidden;
`;

export const ContentExpandedWrapperWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-height: min(400px, 70vh);
  height: min(400px, 70vh);
  padding-right: 0.75rem;
  padding-bottom: 1.5rem;
  overflow-y: scroll;

  @media (max-width: ${breakpoint.sm}px) {
    padding-right: 0;
  }
`;
