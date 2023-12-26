import React, { FC, useEffect } from "react";
import { AdvisorContainer, ItemWrapper, ViewPort } from "./TeamAdvisorRespItem.styled";
import { IAsset } from "../Assets/types";
import { useInView } from "react-intersection-observer";

interface TeamAdvisorRespItemProps {
  items: {
    image: FC<IAsset>;
  }[];
  idx: number;
  setHovered(idx: number): void;
  setShowedItem(idx: number): void;
}

export const TeamAdvisorRespItem: FC<TeamAdvisorRespItemProps> = ({ items, idx, setHovered, setShowedItem }) => {
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      setShowedItem(idx);
    }
  }, [inView]);

  return (
    <ItemWrapper>
      {items.map((el, idX) => (
        <AdvisorContainer key={idX} onMouseOver={() => setHovered(idx)} onMouseOut={() => setHovered(null)}>
          <el.image />
        </AdvisorContainer>
      ))}
      <ViewPort ref={ref} />
    </ItemWrapper>
  );
};
