import { createGlobalStyle } from 'styled-components';
import { calcWidth } from 'utils';

export const SCREENS = {
  MOBILE: '320px',
  TABLET: '768px',
  DESKTOP: '1440px',
};

export const GlobalStyle = createGlobalStyle`

section {
  padding: ${({ theme }) => calcWidth('50px', theme.width)} ${({ theme }) =>
  calcWidth('128px', theme.width)};
  margin-left: auto;
  margin-right: auto;
  min-height: 100vh;
}
`;
