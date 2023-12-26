import React, { useCallback, useEffect, useRef, useState } from "react";
import { Typography } from "UI/UI-Kit/Typography/Typography";
import { ADVISOR } from "./TeamAndAdvisors.constnants";
import { AdvisorWrapper, AdvisorsBlockWrapper, RespWrapper } from "./TeamAndAdvisors.styled";
import { Container } from "UI/UI-Kit/Styled/Container";
import { useStore } from "Core/store";
import { CirclePagination } from "UI/UI-Kit/CirclePagination/CirclePagination";
import { TeamAdvisorRespItem } from "UI/UI-Kit/TeamAdvisorRespItem/TeamAdvisorRespItem";
import { AdvisorContainer } from "UI/UI-Kit/TeamAdvisorRespItem/TeamAdvisorRespItem.styled";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "next-i18next";

export const TeamAndAdvisors = () => {
  const [hovered, setHovered] = useState<number | null>(null);
  const wrapperRef = useRef<HTMLDivElement>();
  const [showedItem, setShowedItem] = useState<number>(0);
  const { ref, inView } = useInView();
  const {
    store: {
      Device: { isTablet, isMobile, isDesktop },
    },
  } = useStore((store) => ({
    Device: store.Device,
  }));

  useEffect(() => {
    function foo() {
      let i = 0;
      const interval = setInterval(() => {
        circleClickHandler(i);
        if (i === 2) {
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

  const circleClickHandler = useCallback((idx: number) => {
    if (!wrapperRef.current) return;
    wrapperRef.current.children[idx].children[4].scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
    setShowedItem(idx);
  }, []);
  const { t } = useTranslation();

  return (
    <AdvisorsBlockWrapper ref={ref}>
      <Container withPaddings>
        <Typography variant="title">{t("experienceOfTeamAdvisors")}</Typography>
        {isDesktop || isTablet ? (
          <AdvisorWrapper>
            {ADVISOR.map((el, idx) => (
              <AdvisorContainer key={idx}>
                <el.image isActive={hovered === idx} />
              </AdvisorContainer>
            ))}
          </AdvisorWrapper>
        ) : (
          <RespWrapper ref={wrapperRef}>
            {Array.from({ length: 3 }).map((_, idx) => (
              <TeamAdvisorRespItem
                items={ADVISOR.slice(idx * 4, idx * 4 + 4)}
                setShowedItem={setShowedItem}
                idx={idx}
                key={idx}
                setHovered={setHovered}
              />
            ))}
          </RespWrapper>
        )}
        {(isTablet || isMobile) && (
          <CirclePagination circleCount={3} showedItem={showedItem} circleClickHandler={circleClickHandler} />
        )}
      </Container>
    </AdvisorsBlockWrapper>
  );
};
