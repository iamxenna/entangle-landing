import styled from "styled-components";

type IProp = { isExpanded: boolean };

const FAQItemWrapper = styled.div`
  border-top: 2px solid #393b5381;
  padding: 32px 0;
  &:last-child {
    border-bottom: 2px solid #393b5381;
  }
`;

const FAQAnswerContainer = styled.div<IProp>`
  transition: height 2s;
  height: ${({ isExpanded }) => (isExpanded ? "auto" : "0px")};
  overflow: hidden;
`;

const ArrowContainer = styled.div<IProp>`
  transform: ${({ isExpanded }) => (isExpanded ? "rotateX(0)" : "rotateX(180deg)")};
`;

export { FAQItemWrapper, ArrowContainer, FAQAnswerContainer };
