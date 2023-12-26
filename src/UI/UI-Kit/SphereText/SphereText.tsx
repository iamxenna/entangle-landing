import React, { FC } from "react";
import { SphereTextProps } from "./SphereText.interfaces";
import { SphereTextLine, SphereTextWrapper, ItemText, ItemTitle } from "./SphereText.styled";
import { useTranslation } from "next-i18next";

export const SphereText: FC<SphereTextProps> = ({ title, text }) => {
  const { t } = useTranslation();
  return (
    <SphereTextWrapper>
      <ItemTitle>{t(title)}</ItemTitle>
      <SphereTextLine />
      <ItemText>{t(text)}</ItemText>
    </SphereTextWrapper>
  );
};
