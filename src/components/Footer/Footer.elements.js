// Import: Dependencies
import styled from "styled-components/macro";

// Element: Container
export const Container = styled.div`
  background: ${(props) => props.theme.colors.global.backgroundSecondary};
  height: auto;
  padding: 4rem 0;
  transition: all 150ms linear;
  width: 100%;
`;

// Element: Wrapper
export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: space-between;
  margin: auto;
  width: 85%;

  @media screen and (max-width: 1024px) {
    width: 95%;
  }
`;

// Element: Heading
export const Heading = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 0.6rem 1rem;

  & h3 {
    color: ${(props) => props.theme.colors.global.textPrimary};
    font-size: 1.6rem;
    font-weight: 400;
    letter-spacing: 0.8px;
    text-transform: uppercase;
    transition: all 150ms linear;
  }
`;

// Element: ScaleCTA
export const ScaleCTA = styled.div`
  transform: scale(0.65);
  -webkit-tap-highlight-color: transparent;
`;

// Element: Navigation
export const Navigation = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`;

// Element: NavigationItem
export const NavigationItem = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;

  & span {
    color: ${(props) => props.theme.colors.global.textSecondary};
    cursor: pointer;
    font-size: 1.2rem;
    padding: 0.6rem 1rem;
    text-transform: uppercase;
    transition: all 150ms linear;

    &:hover {
      color: ${(props) => props.theme.colors.global.highlightPrimary};
      transition: all 150ms linear;
    }
  }
`;
