import { Flex } from '@/app/utils/GlobalStyles';
import { Colors, breakpoint } from '@/app/utils/constans';
import styled from 'styled-components';

// Utils

// Components

export const SpecialistCardWrapper = styled(Flex)`
  flex-grow: 1;
  max-width: calc(50% - 1rem);
  padding: 1.5rem;
  border-radius: 1.25rem;
  background-color: ${Colors.primitives_white};
  box-shadow: 0px 0px 40px 0px #22253b0d;

  @media (max-width: ${breakpoint.md}px) {
    max-width: 100%;
    padding: 1.2rem;
  }
`;
