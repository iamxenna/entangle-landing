import { ReactNode } from "react";

interface TypographyContainerProps {
  variant: "title" | "gradient" | "usual" | "undertitle" | "button";
  color?: string;
  fSize?: number;
  lHeight?: number;
  pointer?: boolean;
  upper?: boolean;
  weight?: number;
  maxWidth?: string;
}

interface TypographyProps extends TypographyContainerProps {
  children: ReactNode;
}

export type { TypographyProps, TypographyContainerProps };
