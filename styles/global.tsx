import { createGlobalStyle } from "styled-components";
import { mobile, smallDesktop, tablet } from "Constants/Devices";
import "animate.css";

export const headerHeight = 100;
export const smallDesktopHeaderHeight = 56;
export const mtMobile = 18;
export const mobileHeaderHeight = 74;
export const desktopPaddings = 7.5;
export const tabletPaddings = 32;
export const mobilePadding = 23;

const GlobalStyles = createGlobalStyle`
  :root {
    --gray: #393B53;
    --blue: #696D99;
    --milky: #F9F8F8;
    --light-blue: #C0DAF3;
    --bgColor: #00001d;
    --white: #FFFFFF;
    --pink: #FB37FF;
    --neon-blue: #0094FF;
    --paddings: ${desktopPaddings}%;
    --marginTop: ${headerHeight}px;
    --header-height: ${headerHeight}px;
  }

  *,
  *::after,
  *::before {
    user-select: none;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    -webkit-tap-highlight-color: transparent;
  }

  html {
    font-size: 16px;
    overflow-x: hidden;
  }

  ::-webkit-scrollbar {
	  width: 0;
  }

  a {
    text-decoration: none;
  }

  html,
  button,
  input {
    font-family: "Manrope", sans-serif;
  }

  @media only screen and (max-width: ${tablet}px) {
    :root {
      --paddings: ${tabletPaddings}px;
    }
  }

  @media only screen and (max-width: ${smallDesktop}px) {
    :root {
      --header-height: ${smallDesktopHeaderHeight}px;
    }
  }

  @media only screen and (max-width: ${mobile}px) {
    :root {
      --header-height: ${mobileHeaderHeight}px;
      --marginTop: ${mobileHeaderHeight}px;
      --paddings: ${mobilePadding}px;
      --mobilePaddings: 0 30px;
    }
  }
`;

export default GlobalStyles;
