import React, { useRef } from "react";
import {
  SynthVaultContainer,
  SynthVaultWrapper,
  VertexText,
  VertexTextContainer,
  VertexVideoWrapper,
} from "../SyntheticVaults.styled";
import { Flex } from "UI/UI-Kit/Styled/Flex";
import { VERTEX_TEXTS } from "./Vertex.constants";
import { useTranslation } from "next-i18next";

export const Vertex = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { t } = useTranslation();

  return (
    <SynthVaultWrapper ref={wrapperRef}>
      <SynthVaultContainer>
        {VERTEX_TEXTS.map((el, idx) => (
          <VertexTextContainer idx={idx}>
            <VertexText>{t(el?.title)}</VertexText>
          </VertexTextContainer>
        ))}
        <Flex justify="center" align="center">
          <VertexVideoWrapper ref={videoRef} autoPlay loop muted preload="auto">
            <source src="/assets/videos/vertex.webm" type="video/webm" />
          </VertexVideoWrapper>
        </Flex>
      </SynthVaultContainer>
    </SynthVaultWrapper>
  );
};
