import { Colors } from '@/app/utils/constans';
import styled from 'styled-components';

// Utils

// Components

export const SpecialistsLangFilterWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  height: 100%;
`;

export const LangMenuWrapper = styled.div`
  position: relative;

  .sub-menu {
    position: absolute;
    top: 100%;
    left: 50%;
    translate: -50% 0;
  }

  .lang-dropdown-menu {
    padding: 0.5rem 0.8rem;
    border-radius: 0.5rem;
    border: 1px solid ${Colors.border};
    background-color: ${Colors.primitives_white};
  }
`;

export const SelectedLangBtn = styled.button<{
  $noBorder?: boolean;
  $active?: boolean;
}>`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  height: 2.4rem;
  padding: 0.5rem 0.8rem;
  border: ${({ $noBorder }) =>
    $noBorder ? 'none' : `1px solid ${Colors.border}`};
  border-radius: 1.2rem;
  background-color: ${({ $active }) =>
    $active ? '#D8FFD4' : Colors.primitives_grey};
  transition: 0.2s;
  cursor: pointer;

  &:hover {
    background-color: ${Colors.border};
  }
`;

export const LanguagesDropdownWrapper = styled.div`
  padding: 0.5rem;
  border-radius: 0.5rem;
  background-color: #fff;
  z-index: 10;
`;
