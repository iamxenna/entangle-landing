import { mobile } from "Constants/Devices";
import styled from "styled-components";

const FAQWrapper = styled.div`
  max-width: 808px;
  margin: 200px auto 0 auto;
  padding: 63px 66px 86px 66px;

  background: linear-gradient(180deg, rgba(19, 19, 19, 0.25) -1.37%, rgba(17, 17, 38, 0.9) 100.32%);
  backdrop-filter: blur(7px);
  border-radius: 40px;

  &::before {
    content: "";
    position: absolute;
    border: 2px solid;

    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 40px;
    border: 1px solid transparent;
    background: linear-gradient(180deg, rgba(251, 55, 255, 0) 0%, #fb37ff 29.17%, #0094ff 100%) border-box;
    mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: destination-out;
    mask-composite: exclude;
  }

  @media screen and (max-width: ${mobile}px) {
    padding: 0;
    background: none;
    margin: 66px auto 0 auto;

    &::before {
      border: none;
      border-radius: 0;
      background: none;
      mask: none;
    }
  }
`;

const Line = styled.div`
  height: 1px;
  width: 62%;
  margin: 16px auto;
  background: linear-gradient(
    270deg,
    rgba(251, 55, 255, 0) 0%,
    #6831d6 30.72%,
    #fb37ff 67.05%,
    rgba(92, 0, 255, 0) 100%
  );
`;

export { FAQWrapper, Line };
