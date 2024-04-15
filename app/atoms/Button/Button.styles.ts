import { Colors } from '@/app/utils/constans';
import styled from 'styled-components';
import { ButtonSizes, ButtonColors } from './Button.variables';

// Utils

// Components

const getBtnColors = (variant?: keyof typeof ButtonColors) => {
  switch (variant) {
    case 'primary':
      return {
        border: 'none',
        backgroundColor: Colors.background_interactive,
        color: Colors.text_primary,
        hoverBackgroundColor: Colors.background_interactive_hover,
      };
    case 'transparent':
      return {
        border: `1px solid ${Colors.background_interactive}`,
        borderHover: `1px solid ${Colors.background_interactive_hover}`,
        backgroundColor: Colors.transparent,
        color: Colors.text_primary,
        hoverBackgroundColor: 'rgba(0,0,0,0.01)',
      };
    default:
      return {
        border: 'none',
        backgroundColor: Colors.background_interactive,
        color: Colors.text_primary,
        hoverBackgroundColor: Colors.background_interactive_hover,
      };
  }
};

const getBtnSizes = (size?: keyof typeof ButtonSizes) => {
  switch (size) {
    case 'normal':
      return {
        height: '2.75rem',
        padding: '0 1.6rem',
        borderRadius: '1.325rem',
      };
    case 'large':
      return {
        height: '3rem',
        padding: '0 1.8rem',
        borderRadius: '1.5rem',
      };
    default:
      return {
        height: '2.75rem',
        padding: '0 1.6rem',
        borderRadius: '1.325rem',
      };
  }
};

export type ButtonWrapperType = {
  color?: keyof typeof ButtonColors;
  size?: keyof typeof ButtonSizes;
};

export const ButtonWrapper = styled.button<ButtonWrapperType>`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: ${({ size }) => getBtnSizes(size).height};
  padding: ${({ size }) => getBtnSizes(size).padding};
  border: ${({ color }) => getBtnColors(color).border};
  border-radius: ${({ size }) => getBtnSizes(size).borderRadius};
  background-color: ${Colors.transparent};
  color: ${({ color }) => getBtnColors(color).color};
  cursor: pointer;

  > * {
    position: relative;
    z-index: 1;
  }

  .button-icon {
    transition: 0.2s;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: ${({ size }) => getBtnSizes(size).borderRadius};
    background-color: ${({ color }) => getBtnColors(color).backgroundColor};
    z-index: 0;
    transform-origin: center left;
    transition: 0.2s;
  }

  &:hover {
    border: ${({ color }) => getBtnColors(color).borderHover};
  }

  &:hover::after {
    background-color: ${({ color }) =>
      getBtnColors(color).hoverBackgroundColor};
    transform: scaleX(1.02);
  }

  &:hover .button-icon {
    transform: translateX(3px);
  }
`;
