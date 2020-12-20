// Import: Dependencies
import styled from "styled-components";

// Element: Container
export const Container = styled.header`
  align-items: center;
  background: ${(props) => props.theme.colors.global.backgroundPrimary};
  box-shadow: 0 5px 8px -9px rgba(0, 0, 0, 0.75);
  display: flex;
  justify-content: center;
  height: 65px;
  position: sticky;
  top: 0;
  transition: all 100ms linear;
  width: 100%;
  z-index: 2;
`;

// Element: Wrapper
export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
