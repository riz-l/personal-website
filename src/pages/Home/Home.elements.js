// Import: Dependencies
import styled, { keyframes } from "styled-components/macro";

// Element: Background
export const Background = styled.div`
  background: ${(props) => props.theme.colors.global.backgroundPrimary};
  height: 100%;
  width: 100%;
`;

// Element: Container
export const Container = styled.div`
  background: ${(props) => props.theme.colors.global.backgroundPrimary};
  height: auto;
  position: relative;
  transition: all 150ms linear;
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
  height: 84vh;
  transition: all 350ms ease-in-out;
  width: 100%;

  @media screen and (max-height: 618px) {
    margin-bottom: 8rem;
  }
`;

// Element: Heading
export const Heading = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  margin: auto;
  text-align: center;
  transition: all 150ms linear;
  width: 75%;

  @media screen and (max-width: 1024px) {
    width: 85%;
  }

  @media screen and (max-width: 648px) {
    width: 90%;
  }

  & h1 {
    color: ${(props) => props.theme.colors.global.backgroundPrimary};
    font-size: clamp(3.2rem, 4vw, 6rem);
    font-weight: 600;
    letter-spacing: 4px;
    text-transform: uppercase;
    transition: all 150ms linear;

    @media screen and (max-width: 502px) {
      letter-spacing: 1px;
    }

    @media screen and (max-width: 459px) {
      font-size: 2.6rem;
    }

    @media screen and (max-width: 376px) {
      font-size: 2.2rem;
    }
  }

  & span {
    color: ${(props) => props.theme.colors.global.backgroundSecondary};
    font-size: clamp(1.2rem, 4vw, 2rem);
    margin-bottom: 4rem;
    text-transform: uppercase;
    transition: all 150ms linear;

    @media screen and (max-width: 718px) {
      font-size: 1.8rem;
    }

    @media screen and (max-width: 431px) {
      font-size: 1.4rem;
    }

    @media screen and (max-height: 371px) {
      margin-bottom: 1rem;
    }
  }
`;

// Element: GalleryWrapper
export const GalleryWrapper = styled.div`
  background: ${(props) => props.theme.colors.global.backgroundSecondary};
  height: auto;
  margin: -6rem auto auto auto;
  width: 75%;

  @media screen and (max-width: 1024px) {
    width: 85%;
  }
`;
