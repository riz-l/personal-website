// Import: Dependencies
import styled, { keyframes } from "styled-components/macro";

// Animation: fadeInAnimation
const fadeInAnimation = keyframes`
  0% { opacity: 0; transform: translateY(-20px) };
  100% { opacity: 1; transform: translateY(0) };
`;

// Element: Container
export const Container = styled.div`
  animation-duration: 1.5s;
  animation-name: ${fadeInAnimation};
  animation-iteration-count: 1;
  background: ${(props) => props.theme.colors.global.backgroundPrimary};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
  filter: brightness(95%) saturate(30%);
  height: 100%;
  position: relative;
  transition: all 150ms ease-in-out;
  width: 100%;
  -webkit-tap-highlight-color: transparent;

  &:hover {
    box-shadow: 0 11px 8px -9px rgba(0, 0, 0, 0.35);
    filter: brightness(100%) saturate(100%);
    transform: translateY(-6px);
    transition: all 150ms ease-in-out;
  }
`;

// Element: TextWrapper
export const TextWrapper = styled.div`
  align-items: flex-end;
  display: flex;
  height: 100%;
  justify-content: center;
  padding-bottom: 1.6rem;
  position: absolute;
  width: 100%;
  z-index: 99;
  -webkit-tap-highlight-color: transparent;
`;

// Element: Text
export const Text = styled.div`
  background: ${(props) => props.theme.colors.global.backgroundPrimary};
  color: ${(props) => props.theme.colors.global.textPrimary};
  cursor: pointer;
  font-size: 1.4rem;
  letter-spacing: 1px;
  padding: 1rem 2rem;
  text-align: center;
  text-transform: uppercase;
  transition: background 150ms linear, color 150ms linear,
    border-radius 300ms linear;
  user-select: none; /* supported by Chrome and Opera */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */

  @media screen and (max-width: 392px) {
    padding: 0.8rem 0.8rem;
  }

  &:hover {
    color: ${(props) => props.theme.colors.global.highlightPrimary};
    border-radius: 80px;
    transition: background 150ms linear, color 150ms linear,
      border-radius 300ms linear;
  }
`;
