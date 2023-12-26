import React, { useState } from "react";
import Image from "next/image";
import { useDispatch } from "react-redux";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Container } from "UI/UI-Kit/Styled/Container";
import { Flex } from "UI/UI-Kit/Styled/Flex";
import { Underline, HeaderTitle, LogoContainer, GlobeWrapper } from "./Header.styled";
import { ANCHORS } from "Constants/Anchors";
import { useStore } from "Core/store";
import locales from "../../../../locales";
import { useRouter } from "next/router";
import { Dropdown } from "../../UI-Kit/Dropdown/Dropdown";
import Link from "next/link";
import { Typography } from "../../UI-Kit/Typography/Typography";
import { languages } from "Core/App";
import { useTranslation } from "next-i18next";

export const Header = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { asPath, locale, pathname } = useRouter();
  const [isDropdownOpened, setIsDropdownOpened] = useState<boolean>(false);
  const {
    store: {
      Device: { isDesktop },
      Anchor: { active },
    },
    actions: {
      Anchor: { setAnchor },
    },
  } = useStore((store) => ({
    Device: store.Device,
    Anchor: store.Anchor,
  }));

  return (
    <Container
      height={`var(--header-height)`}
      zIndex={25}
      backdropFilter={"blur(2px)"}
      bg={"rgba(0, 0, 25, 0.8)"}
      position={"fixed"}
      top={0}
      left={0}
      width={"100%"}
      padding={"0 5.6%"}
    >
      <Flex height={100} align={"center"} justify={"space-between"}>
        <LogoContainer>
          <Image src={require("public/assets/images/Logo.svg")} fill quality={100} alt={"entangle-logo"} />
        </LogoContainer>
        <Flex gap={38} align={"center"}>
          {ANCHORS.map(({ title, ...props }, idx) => {
            const isActive = title === active;
            return (
              <AnchorLink
                key={idx}
                onClick={() => {
                  if (props?.href) {
                    window.open(props.href, "__blank");
                    return;
                  }
                  dispatch(setAnchor(title));
                }}
                href={props?.to}
                offset={80}
              >
                <Container position="relative">
                  <HeaderTitle isActive={isActive}>{t(title.toLowerCase())}</HeaderTitle>
                  <Underline isActive={isActive} />
                </Container>
              </AnchorLink>
            );
          })}
        </Flex>
        <Flex
          align="center"
          gap={38}
          onMouseLeave={() => setIsDropdownOpened(false)}
          onMouseOver={() => setIsDropdownOpened(true)}
        >
          <Flex gap={14} align={"center"} cursor="pointer">
            <GlobeWrapper>
              <Image src={require("public/assets/images/globe.svg")} fill quality={100} alt={"entnagle-globe-asset"} />
            </GlobeWrapper>
            <Flex padding={"14px 0"} gap={10} align={"center"} position={"relative"}>
              <HeaderTitle isActive={true}>{locale}</HeaderTitle>
              {isDropdownOpened && (
                <Dropdown top={"100%"} right={"0"}>
                  {locales.map((el: languages, key: number) => (
                    <Link href={asPath} locale={el} key={key} passHref>
                      <Typography upper color={"#676C9E"} variant={"usual"} fSize={18}>
                        {el}
                      </Typography>
                    </Link>
                  ))}
                </Dropdown>
              )}
              <Image src={"/assets/images/DropArrow.svg"} width={14} height={9} quality={100} alt={"entangle-arrow"} />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Container>
  );
};
