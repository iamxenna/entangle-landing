import Image from "next/image";
import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import { Container } from "UI/UI-Kit/Styled/Container";
import { Flex } from "UI/UI-Kit/Styled/Flex";
import { CloseContainer, LangText, SidebarContainer, SidebarText, SidebarWrapper } from "./Burger.styled";
import { ANCHORS } from "Constants/Anchors";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useStore } from "Core/store";
import { useRouter } from "next/router";
import { Dropdown } from "../../UI-Kit/Dropdown/Dropdown";
import locales from "../../../../locales";
import { languages } from "Core/App";
import Link from "next/link";
import { Typography } from "../../UI-Kit/Typography/Typography";

export const Burger = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { asPath, locale, pathname } = useRouter();
  const [isDropdownOpened, setIsDropdownOpened] = useState<boolean>(false);
  const {
    store: {
      Anchor: { active },
    },
  } = useStore((store) => ({
    Anchor: store.Anchor,
  }));
  return (
    <Container
      height={`var(--header-height)`}
      zIndex={6}
      bg={"rgba(0, 0, 23, 0.9)"}
      position={"fixed"}
      padding="0 27px 0 25px"
      top={0}
      left={0}
      width={"100%"}
    >
      <Flex height={100} align={"center"} justify={"space-between"}>
        <Image src={"/assets/images/Logo.svg"} width="184" height="45" quality={100} alt={"entangle-logo-responsive"} />
        {!isOpen && (
          <Container width="24px" height="24px" cursor="pointer" onClick={() => setIsOpen(true)}>
            <Image
              src={"/assets/images/burger.svg"}
              width="30"
              height="30"
              quality={100}
              alt={"entangle-burger-asset"}
            />
          </Container>
        )}
      </Flex>
      <CSSTransition
        in={isOpen}
        classNames={{
          enterActive: "animate__animated animate__fadeInRight",
          exitActive: "animate__animated animate__fadeOutRight",
        }}
        unmountOnExit
        timeout={5000}
      >
        <SidebarWrapper>
          <SidebarContainer>
            <Flex direction="column" justify="space-between" width={100} height={100}>
              <Container width="100%" zIndex={25} height="100%">
                <CloseContainer onClick={() => setIsOpen(false)}>
                  <Image
                    src={"/assets/images/close.svg"}
                    width="16"
                    height="15"
                    quality={100}
                    alt="entangle-close-asset"
                  />
                </CloseContainer>
                <Flex direction="column" gap={40} cursor="pointer">
                  {ANCHORS.map(({ title, to, href }, idx) => (
                    <AnchorLink
                      href={to}
                      onClick={() => {
                        if (href) {
                          window.open(href, "__blank");
                          return;
                        }
                        setIsOpen(false);
                      }}
                      key={idx}
                      offset={80}
                    >
                      <SidebarText key={idx} isActive={active === title}>
                        {title}
                      </SidebarText>
                    </AnchorLink>
                  ))}
                </Flex>
              </Container>
              <Flex
                onMouseLeave={() => setIsDropdownOpened(false)}
                onMouseOver={() => setIsDropdownOpened(true)}
                align="center"
                justify="flex-end"
                cursor="pointer"
                gap={14}
                width={100}
              >
                <Flex padding={"14px 0 0 0"} position="relative" align="center" gap={8}>
                  <Image
                    src={"/assets/images/globe.svg"}
                    width={20}
                    height={20}
                    quality={100}
                    alt="entangle-languages-asset"
                  />
                  <LangText>{locale}</LangText>
                  {isDropdownOpened && (
                    <Dropdown bottom={"2rem"} right={"-0.5rem"}>
                      {locales.map((el: languages, key: number) => (
                        <Link href={asPath} locale={el} key={key} passHref>
                          <Typography upper color={"#676C9E"} variant={"usual"} fSize={18}>
                            {el}
                          </Typography>
                        </Link>
                      ))}
                    </Dropdown>
                  )}
                  <Image
                    src={"/assets/images/DropArrow.svg"}
                    width={10}
                    height={7}
                    quality={100}
                    alt="entangle-drop-arrow-asset"
                  />
                </Flex>
              </Flex>
            </Flex>
          </SidebarContainer>
        </SidebarWrapper>
      </CSSTransition>
    </Container>
  );
};
