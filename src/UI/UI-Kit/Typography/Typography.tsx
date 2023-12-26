import React, { FC } from "react";
import { TypographyProps } from "./Typography.interfaces";
import { TypographyContainer, TypographyWrapper, Line } from "./Typography.styled";

export const Typography: FC<TypographyProps> = (props) => {
  return (
    <TypographyWrapper>
      <TypographyContainer {...props}>{props.children}</TypographyContainer>
      {props.variant === "title" && <Line />}
    </TypographyWrapper>
  );
};
