// Import: Dependencies
import styled from "styled-components/macro";

// Element: Container
export const Container = styled.div`
  align-items: center;
  background: ${(props) => props.theme.colors.global.backgroundPrimary};
  display: grid;
  grid-gap: 1.6rem;
  grid-template-columns: repeat(2, 1fr);
  height: auto;
  margin: auto;
  padding: 1.6rem;
  transition: all 150ms linear;

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

// Element: Item
export const Item = styled.div`
  height: 40vh;

  /* Enable if odd number of Items */
  /* @media screen and (min-width: 800px) {
    &:last-child {
      grid-column: span 2;
    }
  } */
`;
