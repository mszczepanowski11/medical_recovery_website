import { Colors } from '@/app/utils/constans';
import styled from 'styled-components';

// Utils

// Components

export const SpecialistCommentWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 0.6rem;
  max-width: 650px;
  margin-bottom: 1rem;
  padding-bottom: 2rem;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 2rem;
    height: 1px;
    background-color: ${Colors.border};
  }

  &:last-child {
    margin-bottom: 0;
    padding-bottom: 0;

    &::after {
      display: none;
    }
  }

  a {
    text-decoration: underline;
  }
`;
