// Import: Dependencies
import styled from "styled-components/macro";

// Element: Container
export const Container = styled.div`
  align-items: center;
  background: ${(props) => props.theme.colors.global.backgroundPrimary};
  cursor: pointer;
  display: flex;
  justify-content: center;
  padding: 1.2rem 2rem;
  transition: all 150ms linear;

  @media screen and (max-width: 400px) {
    display: none;
  }

  & p {
    color: ${(props) => props.theme.colors.global.textSecondary};
    font-size: 1.6rem;
    letter-spacing: 1px;
    text-transform: uppercase;
    transition: all 150ms linear;
    user-select: none; /* supported by Chrome and Opera */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
  }

  & svg {
    fill: ${(props) => props.theme.colors.global.textSecondary};
    height: 25px;
    margin-left: 1rem;
    transition: all 150ms linear;
    width: 25px;
  }

  &:hover {
    border-radius: 40px;
    transition: all 150ms linear;

    & p {
      color: ${(props) => props.theme.colors.global.highlightPrimary};
      transition: all 150ms linear;
    }

    & svg {
      fill: ${(props) => props.theme.colors.global.highlightPrimary};
      transition: all 150ms linear;
    }
  }
`;
