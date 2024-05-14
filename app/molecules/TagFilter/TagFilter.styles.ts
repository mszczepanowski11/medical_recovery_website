import { Colors, breakpoint } from '@/app/utils/constans';
import styled from 'styled-components';

// Utils

// Components

export const TagFilterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  @media (max-width: ${breakpoint.sm}px) {
    margin-top: 1rem;

    .tag-filter-tags-wrapper {
      flex-wrap: nowrap;
      overflow-x: scroll;
      overflow-y: visible;

      &::-webkit-scrollbar-thumb {
        background-color: ${Colors.primitives_green};
        border-radius: 20px;
        border: 3px solid ${Colors.primitives_grey};
      }
    }
  }
`;
