// Import: Dependencies
import styled from "styled-components/macro";

// Element: Container
export const Container = styled.header`
  align-items: center;
  background: ${(props) => props.theme.colors.global.backgroundPrimary};
  box-shadow: 0 5px 8px -9px rgba(0, 0, 0, 0.75);
  display: flex;
  justify-content: center;
  height: 75px;
  position: sticky;
  top: 0;
  transition: all 150ms linear;
  width: 100%;
  z-index: 2;
`;

// Element: Wrapper
export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: space-between;
  width: 85%;

  @media screen and (max-width: 1024px) {
    width: 95%;
  }
`;

// Element: Left
export const Left = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
`;

// Element: ScaleSwitch
export const ScaleSwitch = styled.div`
  transform: scale(0.65);
  -webkit-tap-highlight-color: transparent;
`;

// Element: LightLabel
export const LightLabel = styled.span`
  color: ${(props) => props.theme.colors.global.textSecondary};
  letter-spacing: 1px;
  margin-left: 1rem;
  text-transform: uppercase;
  user-select: none; /* supported by Chrome and Opera */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */

  @media screen and (max-width: 1024px) {
    display: none;
    margin-left: 0;
  }
`;

// Element: DarkLabel
export const DarkLabel = styled.span`
  color: ${(props) => props.theme.colors.global.textSecondary};
  letter-spacing: 1px;
  text-transform: uppercase;
  user-select: none; /* supported by Chrome and Opera */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
`;

// Element: Right
export const Right = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
`;

// Element: NavToggle
export const NavToggle = styled.div`
  background: ${(props) => props.theme.colors.global.backgroundPrimary};
  align-items: center;
  cursor: pointer;
  display: flex;
  height: 100%;
  justify-content: center;
  padding: 0 1rem;
  transition: all 150ms linear;

  &:hover {
    background: ${(props) => props.theme.colors.global.backgroundSecondary};
    transition: all 150ms linear;

    & svg {
      fill: ${(props) => props.theme.colors.global.textPrimary};
      transition: all 150ms linear;
    }
  }

  & svg {
    fill: ${(props) => props.theme.colors.global.textSecondary};
    height: 35px;
    transition: all 150ms linear;
    width: 35px;
  }
`;
