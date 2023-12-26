import { mobile } from "Constants/Devices";
import styled from "styled-components";

const RespCoinWrapper = styled.div`
  width: 80%;
  position: relative;
  margin: 0 auto;
  padding: 0 0.5rem;

  @media screen and (max-width: ${mobile}px) {
    width: 100%;
    padding: 0 1.2rem;
  }
`;

const RespLineContainer = styled.div<{ isEven: boolean }>`
  width: 34px;
  height: 19px;
  margin-top: 2rem;
  display: flex;
  ${({ isEven }) =>
    isEven
      ? `
    right: 1.5rem;
    transform: rotateY(180deg);
    
    `
      : `
      left: 1.5rem
    `}
`;

const Text = styled.p<{ isEven: boolean }>`
  font-weight: 400;
  font-size: 13px;
  line-height: 140%;
  letter-spacing: 0.05em;
  color: #c0daf3;
  margin-top: 1.5rem;
  max-width: 50%;

  ${({ isEven }) =>
    isEven &&
    `
    text-align: right;
  `}
`;

const CoinContainer = styled.div`
  min-width: 102px;
  min-height: 102px;
  max-width: 102px;
  max-height: 102px;
  width: 100%;
  height: 100%;
`;

const CoinVideoContainer = styled.video`
  min-width: 102px;
  min-height: 102px;
  max-width: 102px;
  max-height: 102px;
  width: 100%;
  height: 100%;
`;

export { Text, CoinContainer, CoinVideoContainer, RespCoinWrapper, RespLineContainer };
