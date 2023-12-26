import { StaticImageData } from "next/image";

type AssetWrapperProps = {
  src: StaticImageData | string;
  width?: number;
  height?: number;
  left?: number;
  right?: number;
  top?: number;
  bottom?: number;
  centered?: boolean;
  isForMobile?: boolean;
  alttext: string;
  className?: string;
};

export type { AssetWrapperProps };
