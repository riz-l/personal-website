// Import: Dependencies
import React from "react";

// Import: Elements
import { Container, Wrapper } from "./Header.elements";

// Component: Header
export default function Header({
  isDarkTheme,
  setIsDarkTheme,
  isNavOpen,
  setIsNavOpen,
}) {
  return (
    <Container>
      <Wrapper>
        <h2>Header</h2>
        <h2>Header</h2>
      </Wrapper>
    </Container>
  );
}
