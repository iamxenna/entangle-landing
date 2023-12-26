import React, { FC, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { generateWormholeItems } from "../Wormhole.constants";
import { Container } from "UI/UI-Kit/Styled/Container";
import { SliderWrapper } from "./RespCarousel.styled";
import { Typography } from "UI/UI-Kit/Typography/Typography";
import { RespCarouselItem } from "UI/UI-Kit/RespCarouselItem/RespCarouselItem";
import { CirclePagination } from "UI/UI-Kit/CirclePagination/CirclePagination";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "next-i18next";
import { Button } from "../../../UI-Kit/Button/Button";
import { ButtonContainer } from "Components/SphereBlock/SphereBlock.styled";

export const RespCarousel: FC = () => {
  const wrapperRef = useRef<HTMLDivElement>();
  const { ref, inView } = useInView();
  const [showedItem, setShowedItem] = useState<number>(0);

  useEffect(() => {
    function foo() {
      let i = 0;
      const interval = setInterval(() => {
        circleClickHandler(i);
        if (i === 3) {
          i = 0;
        } else {
          i++;
        }
      }, 2000);

      return () => {
        clearInterval(interval);
      };
    }
    const clear = foo();

    if (!inView) {
      clear();
      return;
    }

    return () => {
      clear();
    };
  }, [inView]);
  const { t } = useTranslation();

  const preparedItems = useMemo(() => {
    return generateWormholeItems(t);
  }, [t]);

  const circleClickHandler = useCallback((idx: number) => {
    if (!wrapperRef.current) return;
    wrapperRef.current.children[idx].scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
    setShowedItem(idx);
  }, []);

  return (
    <Container position="relative" margin="42px 0 0 0" ref={ref}>
      <Typography variant="title" upper>
        {t("connectAndBuild")}
      </Typography>
      <Container padding="var(--mobilePaddings)">
        <Typography variant="undertitle">
          {t("instantlyConnectDApps")} <br /> {t("scaleOmnichain")}
        </Typography>
      </Container>
      <SliderWrapper ref={wrapperRef}>
        {preparedItems.map((el, idx) => (
          <RespCarouselItem {...el} idx={idx} key={idx} setItem={setShowedItem} />
        ))}
      </SliderWrapper>
      <CirclePagination circleCount={4} showedItem={showedItem} circleClickHandler={circleClickHandler} />
      <ButtonContainer>
        <Button
          variant="big"
          isGradiented
          onClick={() =>
            window.open("https://entangle-protocol.gitbook.io/entangle-protocol/overview/introduction", "__blank")
          }
        >
          {t("readMore")}
        </Button>
      </ButtonContainer>
    </Container>
  );
};
