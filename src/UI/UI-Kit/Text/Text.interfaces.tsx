import { ReactNode } from "react";

interface TextContainerProps {
  variant: "title" | "gradient" | "usual" | "undertitle" | "button";
  color?: string;
  fSize?: number;
  lHeight?: number;
  pointer?: boolean;
  upper?: boolean;
  weight?: number;
}

interface TypographyProps extends TextContainerProps {
  children: ReactNode;
}

export type { TypographyProps, TextContainerProps };
