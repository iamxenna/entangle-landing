import React, { FC } from "react";
import Image from "next/image";
import { WormholeProps } from "./WormholeItem.interfaces";
import { ImageContainer, ItemText, ItemTitle, ItemWrapper, TextContainer } from "./WormholeItem.styled";
import { useTranslation } from "next-i18next";

export const WormholeItem: FC<WormholeProps> = ({ title, text, image }) => {
  const { t } = useTranslation();
  return (
    <ItemWrapper>
      <TextContainer>
        <ItemTitle>{t(title)}</ItemTitle>
        <ItemText>{text}</ItemText>
      </TextContainer>
      <ImageContainer>
        <Image src={`/assets/images/wormhole/${image}.png`} fill quality={100} alt={`entangle-${title}-asset`} />
      </ImageContainer>
    </ItemWrapper>
  );
};
