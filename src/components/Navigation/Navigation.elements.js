// Import: Dependencies
import styled from "styled-components/macro";

// Element: Container
export const Container = styled.nav`
  background: ${(props) => props.theme.colors.global.backgroundPrimary};
  height: 100vh;
  max-height: 100vh;
  min-height: 100vh;
  position: fixed;
  right: 0;
  top: 0;
  transform: ${({ isNavOpen }) =>
    isNavOpen ? `translateX(0)` : `translateX(100%)`};
  transition: transform 0.3s ease-in-out, visibility 0.3s ease-in-out;
  visibility: ${({ isNavOpen }) => (isNavOpen ? `visible` : `hidden`)};
  width: 100vw;
  max-width: 100vw;
  min-width: 100vw;
  z-index: 99999;
`;

// Element: ToggleWrapper
export const ToggleWrapper = styled.div`
  align-items: center;
  display: flex;
  height: 75px;
  justify-content: center;
  top: 0;
  transition: all 150ms linear;
  z-index: 100;
`;

// Element: Toggle
export const Toggle = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-end;
  margin: auto;
  width: 70%;

  @media screen and (max-width: 1024px) {
    width: 85%;
  }

  & .MuiButtonBase-root {
    transition: all 150ms linear;

    &:hover {
      background: ${(props) => props.theme.colors.global.backgroundSecondary};
      transition: all 150ms linear;
    }

    & .MuiIconButton-label {
      & .MuiSvgIcon-root {
        color: ${(props) => props.theme.colors.global.textSecondary};
        transition: all 150ms linear;
      }
    }
  }
`;

// Element: ToggleButton
export const ToggleButton = styled.div`
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

// Element: Options
export const Options = styled.div`
  display: flex;
  flex-direction: column;
  height: 80vh;
  align-items: center;
  justify-content: center;
  margin: auto;

  & p {
    color: ${(props) => props.theme.colors.global.textPrimary};
    cursor: pointer;
    font-size: 2.4rem;
    font-weight: 600;
    letter-spacing: 2px;
    padding: 2rem 0;
    text-transform: uppercase;
    transition: color 150ms linear;

    &:hover {
      color: ${(props) => props.theme.colors.global.highlightPrimary};
      transition: color 150ms linear;
    }

    @media screen and (max-width: 1024px) {
      font-size: 1.8rem;
    }
  }
`;
