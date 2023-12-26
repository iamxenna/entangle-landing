import React, { FC } from "react";
import Image from "next/image";
import { Wrapper } from "./AssetWrapper.styled";
import { AssetWrapperProps } from "./AssetWrapper.interfaces";
import { useStore } from "Core/store";

export const AssetWrapper: FC<AssetWrapperProps> = ({ isForMobile, ...props }) => {
  const {
    store: {
      Device: { isMobile },
    },
  } = useStore((store) => ({
    Device: store.Device,
  }));

  if (isForMobile && !isMobile) return;

  return (
    <Wrapper {...props}>
      <Image {...props} style={{ maxWidth: "100%" }} quality={100} alt={`entangle-${props.alttext}-asset`} />
    </Wrapper>
  );
};
