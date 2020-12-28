// Import: Dependencies
import React from "react";

// Import: Icons
import { BiMenu as NavIcon } from "react-icons/bi";

// Import: Elements, Components
import {
  Container,
  Wrapper,
  Left,
  LightLabel,
  ScaleSwitch,
  DarkLabel,
  Right,
  NavToggle,
} from "./Header.elements";
import { Switch } from "../index";

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
        <Left>
          <LightLabel>Light</LightLabel>
          <ScaleSwitch>
            <Switch
              isOn={isDarkTheme}
              handleToggle={() => {
                setIsDarkTheme((isDarkTheme) => !isDarkTheme);
                localStorage.setItem(
                  "isDarkTheme",
                  (isDarkTheme) => !isDarkTheme
                );
              }}
              onColor="#06d6A0"
            />
          </ScaleSwitch>
          <DarkLabel>Dark</DarkLabel>
        </Left>

        <Right>
          <NavToggle onClick={() => setIsNavOpen((isNavOpen) => !isNavOpen)}>
            <NavIcon />
          </NavToggle>
        </Right>
      </Wrapper>
    </Container>
  );
}
