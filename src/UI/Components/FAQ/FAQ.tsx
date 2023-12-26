import React from "react";
import { Container } from "UI/UI-Kit/Styled/Container";
import { Typography } from "UI/UI-Kit/Typography/Typography";
import { ITEMS } from "./FAQ.constants";
import { FAQWrapper, Line } from "./FAQ.styled";
import { FAQItem } from "./FAQItem/FAQItem";
import useUpdateAnchor from "hooks/useUpdateAnchor";

export const FAQ = () => {
  const wrapperRef = useUpdateAnchor("FAQ");
  return (
    <FAQWrapper id="faq" ref={wrapperRef}>
      <Container margin="0 0 56px 0">
        <Typography variant="title">Entangle FAQ</Typography>
        <Line />
      </Container>
      <Container withPaddings>
        {ITEMS.map((el, idx) => (
          <FAQItem key={idx} {...el} />
        ))}
      </Container>
    </FAQWrapper>
  );
};
