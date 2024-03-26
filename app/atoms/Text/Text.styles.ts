import { Colors } from '@/app/utils/constans';
import styled from 'styled-components';
import { TextVariants } from './Text.variables';

// Utils

// Components

const getFont = (
  as: keyof typeof TextVariants | any,
  pSmall?: boolean | 1 | 0,
) => {
  switch (as) {
    case 'p':
      return { fontSize: pSmall ? '0.75rem' : '1rem', lineHeight: 1 };
    case 'span':
      return { fontSize: '1rem', lineHeight: 1 };
    case 'label':
      return { fontSize: '1rem', lineHeight: 1 };
    case 'h1':
      return { fontSize: '1rem', lineHeight: 1 };
    case 'h2':
      return { fontSize: '1rem', lineHeight: 1 };
    case 'h3':
      return { fontSize: '1rem', lineHeight: 1 };
    case 'h4':
      return { fontSize: '1rem', lineHeight: 1 };
    case 'h5':
      return { fontSize: '1rem', lineHeight: 1 };
    default:
      return { fontSize: '1rem', lineHeight: 1 };
  }
};

export type TextWrapperType = {
  as?: keyof typeof TextVariants;
  $psmall: boolean | 1 | 0;
  bold?: boolean;
  color?: keyof typeof Colors;
};

export const TextWrapper = styled.p<TextWrapperType>`
  margin: 0;
  margin-bottom: 1em;
  line-height: ${({ $psmall, as }) => getFont(as, $psmall).lineHeight};
  color: ${({ color }) => (color ? Colors[color] : color)};
  font-size: ${({ $psmall, as }) => getFont(as, $psmall).fontSize};
  font-weight: ${({ bold }) => (bold ? 800 : 500)};
`;
