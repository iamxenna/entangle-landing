import Image from "next/image";
import React, { FC, useState } from "react";
import { Flex } from "UI/UI-Kit/Styled/Flex";
import { Typography } from "UI/UI-Kit/Typography/Typography";
import { FAQItemProps } from "./FAQItem.interfaces";
import { ArrowContainer, FAQAnswerContainer, FAQItemWrapper } from "./FAQItem.styled";
import { useStore } from "Core/store";

export const FAQItem: FC<FAQItemProps> = ({ title, text }) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const {
    store: {
      Device: { isMobile },
    },
  } = useStore((store) => ({
    Device: store.Device,
  }));
  return (
    <FAQItemWrapper onClick={() => setIsExpanded(!isExpanded)}>
      <Flex direction="row" align="center" justify="space-between">
        <Flex direction="column" width={isMobile && 85} gap={isExpanded && 16}>
          <Typography variant="gradient" fSize={isMobile ? 16 : 24} lHeight={isMobile && 17}>
            {title}
          </Typography>
          <FAQAnswerContainer isExpanded={isExpanded}>
            <Typography variant="usual" fSize={isMobile ? 13 : 18} lHeight={isMobile && 14} color={"#C0DAF3"}>
              {text}
            </Typography>
          </FAQAnswerContainer>
        </Flex>
        <ArrowContainer isExpanded={isExpanded}>
          <Image
            src={"/assets/images/FAQItemArrow.svg"}
            width="36"
            height="36"
            quality={100}
            alt={"entangle-faq-arrow"}
          />
        </ArrowContainer>
      </Flex>
    </FAQItemWrapper>
  );
};
