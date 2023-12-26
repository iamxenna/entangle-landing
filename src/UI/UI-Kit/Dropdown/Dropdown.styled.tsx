import styled from "styled-components";
import { DropdownProps } from "./Dropdown.interfaces";

const DropdownWrapper = styled.div<DropdownProps>`
  position: absolute;
  top: ${({ top }) => `${top}`};
  bottom: ${({ bottom }) => `${bottom}`};
  right: ${({ right }) => `${right}`};
  left: ${({ left }) => `${left}`};
  width: 74px;
  height: 512px;
  margin: 0 auto;
  padding: 2px;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%), #101010;
  display: flex;
  gap: 7px;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  border-radius: 0 0 8px 8px;
  opacity: 0.949999988079071;
  box-shadow: 0px -16px 11px 0px rgba(0, 0, 0, 0.5);
  transition: 1.5s ease;
  z-index: 100;
`;

export { DropdownWrapper };
