import { Typography } from "UI/UI-Kit/Typography/Typography";
import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  ArrowWrapper,
  InfoContainer,
  InfoWrapper,
  LeftArrowContainer,
  ReadMoreContainer,
  RightArrowContainer,
  SpaceWrapper,
} from "./Info.styled";
import { InfoItem } from "UI/UI-Kit/InfoItem/InfoItem";
import { useDispatch } from "react-redux";
import { useStore } from "Core/store";
import Image from "next/image";
import useUpdateAnchor from "hooks/useUpdateAnchor";
import { useTranslation } from "next-i18next";

export const Info = () => {
  const dispatch = useDispatch();
  const scrollViewRef = useRef<HTMLDivElement>();
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const {
    store: {
      Blog: { posts },
      Device: { isDesktop },
    },
    asyncActions: {
      Blog: { getBlog },
    },
  } = useStore((store) => ({
    Blog: store.Blog,
    Device: store.Device,
  }));

  const nextClicked = useCallback(() => {
    const totalItems = posts.length;
    if (activeIndex < totalItems - 1) {
      const nextInd = activeIndex + 1;
      scrollViewRef.current.children[nextInd].scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
      setActiveIndex(nextInd);
    }
  }, [activeIndex, posts]);

  const previousClicked = useCallback(() => {
    if (activeIndex > 0) {
      const nextInd = activeIndex - 1;
      scrollViewRef.current.children[nextInd].scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
      setActiveIndex(nextInd);
    }
  }, [activeIndex]);
  const { t } = useTranslation();

  useEffect(() => {
    dispatch(getBlog());
  }, []);

  const wrapperRef = useUpdateAnchor("COMMUNITY");

  return (
    <InfoWrapper ref={wrapperRef} id={"community"}>
      {isDesktop && (
        <SpaceWrapper>
          <Image
            style={{ maxWidth: "100%" }}
            src={"/assets/images/space_sphere.png"}
            width={1400}
            height={915}
            quality={100}
            alt="entangle-space-asset"
          />
        </SpaceWrapper>
      )}
      <Typography variant="title" upper>
        {t("latestUpdates")}
      </Typography>
      {isDesktop && (
        <ArrowWrapper>
          <LeftArrowContainer onClick={previousClicked}>
            <Image
              src={require("public/assets/images/FAQItemArrow.svg")}
              fill
              quality={100}
              alt="entangle-arrow-asset"
            />
          </LeftArrowContainer>
          <RightArrowContainer onClick={nextClicked}>
            <Image
              src={require("public/assets/images/FAQItemArrow.svg")}
              fill
              quality={100}
              alt="entangle-arrow-asset"
            />
          </RightArrowContainer>
        </ArrowWrapper>
      )}
      <InfoContainer ref={scrollViewRef}>
        {posts?.map((el, idx) => (
          <InfoItem key={idx} {...el} />
        ))}
      </InfoContainer>
      <ReadMoreContainer onClick={() => window.open("https://blog.entangle.fi/", "__blank")}>
        Read More
      </ReadMoreContainer>
    </InfoWrapper>
  );
};
