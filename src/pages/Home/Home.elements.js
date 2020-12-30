// Import: Dependencies
import styled, { keyframes } from "styled-components/macro";

// Element: Container
export const Container = styled.div`
  background: ${(props) => props.theme.colors.global.backgroundPrimary};
  height: 76vh;
  width: 100%;
`;

// Animation: animatedGradient
const animatedGradient = keyframes`
    0% {background-position: 0 50%};
    50% {background-position: 100% 50%};
    100% {background-position: 0 50%};
`;

// Element: Splash
export const Splash = styled.div`
  animation-duration: 10s;
  animation-name: ${animatedGradient};
  animation-iteration-count: infinite;
  background: ${(props) => props.theme.colors.global.backgroundSecondary};
  background: linear-gradient(
    -45deg,
    ${(props) => props.theme.colors.homeGradient.gradientPrimary} 15%,
    ${(props) => props.theme.colors.homeGradient.gradientSecondary},
    ${(props) => props.theme.colors.homeGradient.gradientTertiary}
  );
  background-size: 400% 400%;
  height: 100%;
  padding-bottom: 18rem;
  transition: all 350ms ease-in-out;
  width: 100%;
`;

// Element: Heading
export const Heading = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  text-align: center;
  transition: all 100ms linear;
  width: 100%;

  & h1 {
    color: ${(props) => props.theme.colors.global.backgroundPrimary};
    font-size: 4rem;
    text-transform: uppercase;
    transition: all 100ms linear;
  }

  & span {
    color: ${(props) => props.theme.colors.global.backgroundSecondary};
    font-size: 2rem;
    text-transform: uppercase;
    transition: all 100ms linear;
  }
`;
