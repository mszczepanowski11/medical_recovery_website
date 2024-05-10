import { Flex } from '@/app/utils/GlobalStyles';
import { Colors, breakpoint } from '@/app/utils/constans';
import styled from 'styled-components';

// Utils

// Components

export const AboutUsIdeaWrapper = styled.div``;

export const IdeaCard = styled(Flex)`
  padding: 1.5rem 1rem;
  border-radius: 2rem;
  background-color: ${Colors.primitives_white};
  box-shadow: 0px 0px 40px 0px #22253b0d;
`;

export const IdeaList = styled.ul`
  margin: 0;
  padding-left: 1.5rem;
`;

export const IdeaItem = styled.li`
  &::marker {
    color: ${Colors.text_secondary};
  }
`;

export const IconCardsWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;

  > * {
    flex-grow: 1;
    flex-basis: calc(25% - (3 * 1.5rem) / 4);
  }

  @media (max-width: 1150px) {
    flex-wrap: wrap;

    > * {
      align-self: stretch;
      flex-basis: calc(50% - (3 * 1.5rem) / 4);
      min-width: 300px;

      &:last-child {
        align-self: flex-start;
      }
    }
  }

  @media (max-width: ${breakpoint.md}px) {
  }
`;
