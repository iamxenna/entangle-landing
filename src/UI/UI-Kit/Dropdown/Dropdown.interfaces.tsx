import { ReactNode } from "react";

interface DropdownProps {
  children: ReactNode;
  top?: string;
  bottom?: string;
  right?: string;
  left?: string;
  boxShadow?: string;
}

export type { DropdownProps };
