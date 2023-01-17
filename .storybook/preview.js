import GlobalStyle from '../src/styles/globalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from '../src/styles/theme/theme';
import { RecoilRoot } from 'recoil';

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <RecoilRoot>
        <GlobalStyle />
        <Story />
      </RecoilRoot>
    </ThemeProvider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
