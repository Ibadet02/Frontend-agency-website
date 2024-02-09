import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import {
  ThemeProvider,
  StyledThemeProviderWrapper,
} from "./context/ThemeContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <StyledThemeProviderWrapper>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </StyledThemeProviderWrapper>
    </ThemeProvider>
  </React.StrictMode>
);
