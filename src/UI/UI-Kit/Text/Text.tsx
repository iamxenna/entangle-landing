import React, { FC } from "react";
import { TypographyProps } from "./Text.interfaces";
import { TextContainer } from "./Text.styled";

export const Text: FC<TypographyProps> = (props) => {
  return <TextContainer {...props}>{props.children}</TextContainer>;
};
