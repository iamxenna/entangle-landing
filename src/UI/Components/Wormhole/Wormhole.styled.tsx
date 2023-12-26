import { desktop, smallDesktop } from "Constants/Devices";
import styled from "styled-components";

const CanvasWrapper = styled.div`
  position: relative;
`;

const StickyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem 0;
  height: 100%;
  margin-top: -50rem;
`;

const ItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 168rem;
  margin: 147px 0 196px 0;

  @media screen and (max-width: ${desktop}px) {
    margin: 147px 0 106px 0;
    height: 118rem;
  }

  @media screen and (max-width: ${smallDesktop}px) {
    height: 118rem;
  }
`;

const ItemWrapper = styled.div`
  //margin: 0 auto;
  margin: 0 15% 0 15%;
  max-width: 80%;
  z-index: 5;
`;

const TitleWrapper = styled.div`
  z-index: 15;
`;

const ButtonWrapper = styled.div`
  margin: 0 auto;
  width: 270px;
  height: 60px;
  z-index: 5;
`;

export { ItemWrapper, CanvasWrapper, TitleWrapper, ButtonWrapper, StickyWrapper, ItemsWrapper };
