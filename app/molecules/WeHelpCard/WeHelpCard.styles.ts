import { Colors } from '@/app/utils/constans';
import styled from 'styled-components';

// Utils

// Components

type WeHelpCardWrapperType = {
  color?: Colors | string;
};

export const WeHelpCardWrapper = styled.div<WeHelpCardWrapperType>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 1.5rem 1rem;
  border-radius: 1.25rem;
  background-color: ${({ color }) => color || Colors.primitives_blue};
  transition: 0.2s;

  &:hover {
    box-shadow: 0px 0px 40px 0px #22253b0d;
  }
`;
