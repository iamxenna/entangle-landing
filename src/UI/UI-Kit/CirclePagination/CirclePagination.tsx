import React, { FC } from "react";
import { Flex } from "../Styled/Flex";
import { Circle } from "./CirclePagination.styled";

interface CirclePaginationProps {
  showedItem: number;
  circleCount: number;
  circleClickHandler(idx: number): void;
}

export const CirclePagination: FC<CirclePaginationProps> = ({ showedItem, circleClickHandler, circleCount }) => {
  return (
    <Flex gap={15} justify="center" margin="25px 0 0 0">
      {Array.from({ length: circleCount }).map((_, idx) => (
        <Circle isActive={idx === showedItem} key={idx} onClick={() => circleClickHandler(idx)} />
      ))}
    </Flex>
  );
};
