import React, { FC } from "react";
import { Typography } from "../Typography/Typography";
import { ButtonProps } from "./Button.interfaces";
import { ButtonWrapper } from "./Button.styled";

export const Button: FC<ButtonProps> = ({ onClick, children, variant, isGradiented = false }) => (
  <ButtonWrapper variant={variant} isGradiented={isGradiented} onClick={onClick}>
    <Typography variant="button">{children}</Typography>
  </ButtonWrapper>
);
