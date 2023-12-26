import styled from "styled-components";

interface ContainerProps {
  withPaddings?: boolean;
  position?: "absolute" | "relative" | "fixed" | "sticky";
  width?: string;
  height?: string;
  maxW?: string;
  maxH?: string;
  right?: number;
  bottom?: number;
  top?: number | string;
  left?: number;
  margin?: string;
  padding?: string;
  cursor?: string;
  backgroundImage?: string;
  bg?: string;
  zIndex?: number;
  backdropFilter?: string;
}

export const Container = styled.div<ContainerProps>`
  position: ${({ position = "static" }) => position};
  left: ${({ left }) => `${left}rem`};
  right: ${({ right }) => `${right}rem`};
  bottom: ${({ bottom }) => `${bottom}rem`};
  top: ${({ top }) => (typeof top === "string" ? top : `${top}rem`)};
  max-width: ${({ maxW }) => `${maxW}px`};
  max-height: ${({ maxH }) => `${maxH}px`};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  background-image: ${({ backgroundImage }) => `url(${backgroundImage})`};
  z-index: ${({ zIndex }) => zIndex};
  cursor: ${({ cursor }) => cursor};
  background: ${({ bg }) => bg};
  backdrop-filter: ${({ backdropFilter }) => backdropFilter};
  ${(props) =>
    props.backgroundImage &&
    `
    background-image: ${({ backgroundImage }) => `url(${backgroundImage})`};
    background-position: ${({ bgPosition }) => bgPosition || "center"};
    background-repeat: no-repeat;
    background-size: contain;
  `}

  ${({ withPaddings = false }) =>
    withPaddings &&
    `
    padding: 0 var(--paddings);
  `}
`;
