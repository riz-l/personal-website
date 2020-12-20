// Import: Dependencies
import React, { useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";

// Import: Themes
import lightTheme from "./themes/lightTheme";
import darkTheme from "./themes/darkTheme";

// Import: Components
import { Header } from "./components";

// Component: App
export default function App() {
  // State: isDarkTheme, isNavOpen
  const [isDarkTheme, setIsDarkTheme] = useState(getInitialTheme());
  const [isNavOpen, setIsNavOpen] = useState(false);

  // Sets user preference for light/dark theme
  useEffect(() => {
    localStorage.setItem("dark", JSON.stringify(isDarkTheme));
  }, [isDarkTheme]);

  // Looks for user's preferred color scheme
  function getPrefColorTheme() {
    if (!window.matchMedia) return;
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  }

  // If returning user expressed preference for dark theme previously,
  // ... theme === darkTheme
  // ... otherwise, theme === lightTheme
  function getInitialTheme() {
    const isReturningUser = "dark" in localStorage;
    const savedTheme = JSON.parse(localStorage.getItem("dark"));
    const userPrefersDark = getPrefColorTheme();

    // If theme was saved, set theme to lightTheme/darkTheme
    if (isReturningUser) {
      return savedTheme;
    }
    // If preferred color theme is dark, sets theme to dark
    else if (userPrefersDark) {
      return true;
    }
    // Else sets theme to light
    else {
      return false;
    }
  }

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <Container>
        <Header
          isDarkTheme={isDarkTheme}
          setIsDarkTheme={setIsDarkTheme}
          isNavOpen={isNavOpen}
          setIsNavOpen={setIsNavOpen}
        />
        <h1>Riz</h1>
      </Container>
    </ThemeProvider>
  );
}

// Element: Container
const Container = styled.div`
  height: 100%;
  width: 100%;
`;
