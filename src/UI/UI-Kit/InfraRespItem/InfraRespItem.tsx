import React, { FC, useEffect } from "react";
import { InfraRespImage, InfraRespContainer, InfraRespText } from "./InfraRespItem.styled";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

interface InfraRespItemProps {
  text: string;
  image: string;
  idx: number;
  setItem(idx: number): void;
}

export const InfraRespItem: FC<InfraRespItemProps> = ({ image, text, idx, setItem }) => {
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      setItem(idx);
    }
  }, [inView, idx]);

  return (
    <InfraRespContainer>
      <InfraRespImage>
        <Image
          src={`/assets/images/infrastructureResp/${image}.png`}
          fill
          quality={100}
          alt={`entangle-${image}-asset`}
        />
      </InfraRespImage>
      <InfraRespText ref={ref}>{text}</InfraRespText>
    </InfraRespContainer>
  );
};
