// Import: Dependencies
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

// Import: Icons
import { BiMenu as NavIcon } from "react-icons/bi";

// Import: Elements
import {
  Container,
  ToggleWrapper,
  Toggle,
  ToggleButton,
  Options,
} from "./Navigation.elements";

// Component: Navigation
export default function Navigation({ isDarkTheme, isNavOpen, setIsNavOpen }) {
  // Effect: Upon navigation from Navigation, DOM moves to top of window
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container isNavOpen={isNavOpen} isDarkTheme={isDarkTheme}>
      <ToggleWrapper>
        <Toggle>
          <ToggleButton onClick={() => setIsNavOpen((isNavOpen) => !isNavOpen)}>
            <NavIcon />
          </ToggleButton>
        </Toggle>
      </ToggleWrapper>

      <Options>
        <Link
          to="/"
          onClick={() => {
            setIsNavOpen((isNavOpen) => !isNavOpen);
          }}
        >
          <p>Home</p>
        </Link>

        <Link
          to="/portfolio"
          onClick={() => {
            setIsNavOpen((isNavOpen) => !isNavOpen);
          }}
        >
          <p>Portfolio</p>
        </Link>

        <Link
          to="/about"
          onClick={() => {
            setIsNavOpen((isNavOpen) => !isNavOpen);
          }}
        >
          <p>About</p>
        </Link>

        <Link
          to="/contact"
          onClick={() => {
            setIsNavOpen((isNavOpen) => !isNavOpen);
          }}
        >
          <p>Contact</p>
        </Link>
      </Options>
    </Container>
  );
}
