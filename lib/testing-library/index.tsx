/* eslint-disable import/no-extraneous-dependencies */
import { render, RenderOptions } from '@testing-library/react';
import { ReactElement, ReactNode } from 'react';

import { ThemeProvider } from '@lib/styled-components';
import { theme } from '@styles/theme';

const Providers = ({ children }: { children: ReactNode }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: Providers, ...options });

export * from '@testing-library/react';
export { customRender as render };
