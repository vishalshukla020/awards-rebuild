import { createGlobalStyle } from "styled-components";
import styled, { css } from "styled-components";
import { normalize } from "styled-normalize";

export const GlobalStyles = createGlobalStyle`
${normalize}

*{
    
    box-sizing:border-box;
    text-decoration:none;
}

html{
    padding:0;
    margin:0;
    font-size:16px;
   
}

body{
    overscroll-behavior:none;
    overflow-x:none;
    font-family:--apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background:${(props) => props.theme.background}
}
`;

export const Flex = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;

  ${(props) =>
    props.spaceBetween &&
    css`
      justify-content: space-between;
    `}

  ${(props) =>
    props.alignTop &&
    css`
      align-items: flex-start;
    `}
  ${(props) =>
    props.flexEnd &&
    css`
      justify-content: flex-end;
    `}

  ${(props) =>
    props.noHeight &&
    css`
      height: 0;
    `}

  ${(props) =>
    props.responsive &&
    css`
      @media (max-width: 900px) {
        flex-direction: column;
      }
    `}
  ${(props) =>
    props.column &&
    css`
      flex-direction: column;
    `}
`;

export const Container = styled.div`
  position: relative;
  flex-grow: 1;
  margin: 0 auto;
  padding: 0 32px;
  width: auto;
  height: 100%;
  @media (min-width: 1024px) {
    max-width: 960px;
  }
  @media (min-width: 1216px) {
    max-width: 1152px;
  }
  @media (min-width: 1468px) {
    max-width: 1244px;
  }
  ${(props) =>
    props.fluid &&
    css`
      margin: 0;
      padding: 0;
      max-width: 100% !important;
    `}
`;

export const Cursor = styled.div`
  position: absolute;
  top: -50px;
  left: -50px;

  border-radius: 50%;
  width: 20px;
  height: 20px;
  transform: translate(-50%, -50%);
  z-index: 999;

  background: ${(props) => props.theme.red};
  pointer-events: none;

  transition-property: width, height, border;
  will-change: width, height, transform, border;

  @media (max-width: 767px) {
    display: none;
  }

  &.hovered {
    width: 50px;
    height: 50px;
    background: transparent !important;
    border: 2px solid ${(props) => props.theme.red};
  }
  &.pointer {
    width: 50px;
    height: 50px;
    background: transparent !important;
    border: 2px solid ${(props) => props.theme.text};
  }
  &.nav-open {
    background: ${(props) => props.theme.text};
  }
`;

export const darkTheme = {
  background: "#000000",
  blur: "rgba(0, 0, 0, 0.3)",
  text: "#ffffff",
  red: "#ea291e",
};

export const lightTheme = {
  background: "#ffffff",
  blur: "rgba(255, 255, 255, 0.3)",
  text: "#000000",
  red: "#ea291e",
};
