import { ReactNode } from "react";

type IVariant = "big" | "small";

interface ButtonProps {
  variant: IVariant;
  isGradiented?: boolean;
  children: ReactNode;
  onClick(): void;
}

export type { ButtonProps };
