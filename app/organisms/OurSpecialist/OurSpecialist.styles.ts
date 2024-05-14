import { Flex } from '@/app/utils/GlobalStyles';
import { Colors, breakpoint } from '@/app/utils/constans';
import styled from 'styled-components';

// Utils

// Components

export const OurSpecialistWrapper = styled.div`
  .our-specialist-filter-sm {
    display: none;
  }
  @media (max-width: ${breakpoint.sm}px) {
    .our-specialist-more-btn {
      /* display: none; */
      margin: auto;
    }

    .our-specialist-filter-wide {
      display: none;
    }

    .our-specialist-filter-sm {
      display: flex;

      &::-webkit-scrollbar {
        width: 0px;
      }

      &::-webkit-scrollbar-track {
        background: ${Colors.transparent};
      }

      &::-webkit-scrollbar-thumb {
        background-color: ${Colors.transparent};
        border-radius: 20px;
        border: 3px solid ${Colors.transparent};
      }
    }
  }
`;

export const SpecialistCardsWrapper = styled(Flex)`
  @media (max-width: ${breakpoint.md}px) {
  }
`;
