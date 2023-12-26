import React, { FC } from "react";
import Image from "next/image";
import {
  FooterWrapper,
  TopContainer,
  BottomContainer,
  Line,
  AnchorsContainer,
  CenteredContainer,
  SocialContainer,
  SocialItem,
  AnchorText,
  EntangleDescr,
  TermsAndPrivacy,
  LiqResolved,
  LogoContainer,
} from "./Footer.styled";
import { Flex } from "UI/UI-Kit/Styled/Flex";
import { LINKS, SOCIALS } from "./Footer.constants";
import { useStore } from "Core/store";
import { useTranslation } from "next-i18next";

export const Footer: FC = () => {
  const {
    store: {
      Device: { isMobile, isDesktop },
    },
  } = useStore((store) => ({
    Device: store.Device,
  }));
  const { t } = useTranslation();
  return (
    <FooterWrapper>
      <TopContainer>
        <AnchorsContainer>
          {LINKS.map(({ title, to, respInactive }, idx) => {
            if (isMobile && respInactive) return;
            return (
              <div onClick={() => window.open(to, "__blank")} key={idx}>
                <AnchorText>{t(title)}</AnchorText>
              </div>
            );
          })}
        </AnchorsContainer>
        <CenteredContainer>
          <LogoContainer>
            <Image src={require("public/assets/images/Logo.svg")} fill quality={100} alt={"entangle-logo-footer"} />
          </LogoContainer>
          <LiqResolved>{t("liquidityResolvedFooter")}</LiqResolved>
        </CenteredContainer>
        {isDesktop && (
          <SocialContainer>
            {SOCIALS.map(({ title, link }, idx) => (
              <SocialItem onClick={() => window.open(link, "__blank")} key={idx}>
                <Image
                  src={`/assets/images/socials/${title}.svg`}
                  width={32}
                  height={32}
                  quality={100}
                  alt={`entangle-${title}-asset`}
                />
                {title}
              </SocialItem>
            ))}
          </SocialContainer>
        )}
      </TopContainer>
      <Line />
      <BottomContainer>
        <EntangleDescr>© Entangle {new Date().getFullYear()}</EntangleDescr>
        <Flex
          gap={isMobile ? 18 : 40}
          align={isMobile ? "center" : "flex-start"}
          direction={isMobile ? "column" : "row"}
        >
          <TermsAndPrivacy>Terms & Conditions</TermsAndPrivacy>
          <TermsAndPrivacy>Privacy Policy</TermsAndPrivacy>
        </Flex>
      </BottomContainer>
    </FooterWrapper>
  );
};
