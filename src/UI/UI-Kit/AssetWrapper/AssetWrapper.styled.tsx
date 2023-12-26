import styled from "styled-components";
import { AssetWrapperProps } from "./AssetWrapper.interfaces";

const Wrapper = styled.div<AssetWrapperProps>`
  position: absolute;
  ${({ centered }) =>
    centered &&
    `
    margin: auto;
    
  `}
  top: ${({ top }) => top && `${top}rem`};
  bottom: ${({ bottom }) => bottom && `${bottom}rem`};
  left: ${({ left }) => left && `${left}rem`};
  right: ${({ right }) => right && `${right}rem`};
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
  max-width: 100%;
`;

export { Wrapper };
