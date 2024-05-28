import { Colors } from '@/app/utils/constans';
import styled from 'styled-components';

// Utils

// Components

export const SpecialistPageWrapper = styled.div``;

export const ServicesList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  margin: 0;
  padding: 0 0 0 1.2rem;
  /* list-style-type: none; */
`;

export const ServicesListItem = styled.li`
  &::marker {
    color: ${Colors.text_secondary};
  }

  .specialist-page-service-link {
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const SpecialistDataList = styled.ul``;

export const SpecialistDataItem = styled.li`
  margin-bottom: 0.7rem;
`;
