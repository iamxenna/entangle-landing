import React, { FC } from "react";
import { DropdownWrapper } from "./Dropdown.styled";
import { DropdownProps } from "./Dropdown.interfaces";

export const Dropdown: FC<DropdownProps> = (props) => {
  return <DropdownWrapper {...props}>{props.children}</DropdownWrapper>;
};
