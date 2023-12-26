import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import React, { FC, useMemo, useRef } from "react";
import { useStore } from "Core/store";
import { Container } from "UI/UI-Kit/Styled/Container";
import { Typography } from "UI/UI-Kit/Typography/Typography";
import { generateWormholeItems } from "./Wormhole.constants";
import { WormholeItem } from "UI/UI-Kit/WormholeItem/WormholeItem";
import { Camera } from "./ThreeComponents/Camera";
import { Square } from "./ThreeComponents/Square";
import {
  ItemWrapper,
  CanvasWrapper,
  TitleWrapper,
  ButtonWrapper,
  StickyWrapper,
  ItemsWrapper,
} from "./Wormhole.styled";
import { RespCarousel } from "./RespCarousel/RespCarousel";
import { Button } from "UI/UI-Kit/Button/Button";
import { useTranslation } from "next-i18next";

export const Wormhole: FC = () => {
  const SQUARE_COUNTS = 64;
  const wrapperRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const {
    store: {
      Device: { isDesktop },
    },
  } = useStore((store) => ({
    Device: store.Device,
  }));
  const { t } = useTranslation();

  const preparedItems = useMemo(() => {
    return generateWormholeItems(t);
  }, [t]);

  return (
    <Container position="relative" margin="90px 0 0 0" ref={wrapperRef}>
      {isDesktop ? (
        <CanvasWrapper>
          <Canvas
            ref={canvasRef}
            style={{ position: "sticky", width: "100%", height: "100vh", top: 0 }}
            onCreated={({ gl }) => {
              gl.setClearColor(new THREE.Color("#00001d"));
            }}
          >
            <Camera canvasRef={canvasRef} />
            {Array.from({ length: SQUARE_COUNTS }).map((_, idx) => (
              <Square key={idx} idx={idx} />
            ))}
          </Canvas>
          <StickyWrapper>
            <TitleWrapper>
              <Typography variant="title" upper>
                {t("connectAndBuild")}
              </Typography>
              <Typography variant="undertitle">
                {t("instantlyConnectDApps")} <br /> {t("scaleOmnichain")}
              </Typography>
            </TitleWrapper>
            <ItemsWrapper>
              {preparedItems.map((el, idx) => (
                <ItemWrapper key={idx}>
                  <WormholeItem {...el} />
                </ItemWrapper>
              ))}
            </ItemsWrapper>
            <ButtonWrapper>
              <Button
                variant="big"
                isGradiented
                onClick={() =>
                  window.open("https://entangle-protocol.gitbook.io/entangle-protocol/entangle-blockchain", "__blank")
                }
              >
                READ MORE
              </Button>
            </ButtonWrapper>
          </StickyWrapper>
        </CanvasWrapper>
      ) : (
        <RespCarousel />
      )}
    </Container>
  );
};
