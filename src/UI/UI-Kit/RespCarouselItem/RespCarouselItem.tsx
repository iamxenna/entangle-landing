import React, { FC, ReactNode, useEffect } from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { ImageContainer, SliderContainer, Title, Text, TitleContainer, CarouselLine } from "./RespCarouselItem.styled";
import { useTranslation } from "next-i18next";

interface RespCarouselItemProps {
  title: string;
  text: ReactNode;
  idx: number;
  image: string;
  setItem: (idx: number) => void;
}

export const RespCarouselItem: FC<RespCarouselItemProps> = ({ title, text, idx, image, setItem }) => {
  const { ref, inView } = useInView();
  const { t } = useTranslation();

  useEffect(() => {
    if (inView) {
      setItem(idx);
    }
  }, [inView]);

  return (
    <SliderContainer>
      <ImageContainer ref={ref}>
        <Image
          src={require(`public/assets/images/wormhole/${image}.png`)}
          fill
          quality={100}
          alt="entangle-wormhole-asset"
        />
      </ImageContainer>
      <TitleContainer>
        <Title>{t(title)}</Title>
        <CarouselLine />
      </TitleContainer>
      <Text>{text}</Text>
    </SliderContainer>
  );
};
