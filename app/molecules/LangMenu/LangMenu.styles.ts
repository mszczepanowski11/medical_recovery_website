import { Colors } from '@/app/utils/constans';
import styled from 'styled-components';

// Utils

// Components

export const LangMenuWrapper = styled.div``;

export const SelectedLangBtn = styled.button`
  display: flex;

  height: 2rem;
  padding: 0.5rem 0.8rem;
  border: 1px solid #e7e7e7;
  border-radius: 1rem;
  background-color: ${Colors.primitives_grey};
  transition: 0.2s;
  cursor: pointer;

  &:hover {
  }
`;

export const LanguagesDropdownWrapper = styled.div`
  padding: 0.5rem;
  border-radius: 0.5rem;
  background-color: #fff;
`;
