"use client";

import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { StyledComponentsRegistry } from "./Registry";
import { GlobalStyles } from "./GlobalStyles";

export const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <StyledComponentsRegistry>
      <GlobalStyles />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </StyledComponentsRegistry>
  );
};
