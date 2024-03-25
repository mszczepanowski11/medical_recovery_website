import { Colors } from '@/app/utils/constans';
import styled from 'styled-components';
import { ButtonSizes, ButtonColors } from './Button.variables';

// Utils

// Components

const getBtnColors = (variant?: keyof typeof ButtonColors) => {
  switch (variant) {
    case 'primary':
      return {
        backgroundColor: Colors.primary,
        color: Colors.white,
        hoverBackgroundColor: Colors.primaryDark,
      };
    case 'secodnary':
      return {
        backgroundColor: Colors.secondary,
        color: Colors.white,
        hoverBackgroundColor: Colors.secondaryDark,
      };
    default:
      return {
        backgroundColor: Colors.primary,
        color: Colors.white,
        hoverBackgroundColor: Colors.primaryDark,
      };
  }
};

const getBtnSizes = (size?: keyof typeof ButtonSizes) => {
  switch (size) {
    case 'normal':
      return { height: '2rem', padding: '0 2rem', borderRadius: '0.5rem' };
    case 'small':
      return { height: '1.6rem', padding: '0 1.6rem', borderRadius: '0.5rem' };
    case 'large':
      return { height: '3rem', padding: '0 3rem', borderRadius: '0.5rem' };
    default:
      return { height: '2rem', padding: '0 2rem', borderRadius: '0.5rem' };
  }
};

export type ButtonWrapperType = {
  color?: keyof typeof ButtonColors;
  size?: keyof typeof ButtonSizes;
};

export const ButtonWrapper = styled.button<ButtonWrapperType>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: ${({ size }) => getBtnSizes(size).height};
  padding: ${({ size }) => getBtnSizes(size).padding};
  border: none;
  border-radius: ${({ size }) => getBtnSizes(size).borderRadius};
  background-color: ${({ color }) => getBtnColors(color).backgroundColor};
  color: ${({ color }) => getBtnColors(color).color};
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background-color: ${({ color }) =>
      getBtnColors(color).hoverBackgroundColor};
  }
`;
