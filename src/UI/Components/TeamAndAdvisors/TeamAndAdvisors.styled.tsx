import { desktop, mobile, tablet } from "Constants/Devices";
import styled from "styled-components";

const AdvisorWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 24px;
  margin-top: 163px;

  @media screen and (max-width: ${desktop}px) {
    margin-top: 120px;
  }

  @media screen and (max-width: ${tablet}px) {
    grid-template-columns: repeat(6, 1fr);
    overflow-x: scroll;
    padding: 0 21px;
    padding-bottom: 15px;
    scroll-snap-type: x mandatory;
  }

  @media screen and (max-width: ${mobile}px) {
    margin-top: 28px;
  }
`;

const AdvisorsBlockWrapper = styled.div`
  margin-top: 235px;

  @media screen and (max-width: ${desktop}px) {
    margin-top: 66px;
  }

  @media screen and (max-width: ${mobile}px) {
    margin-top: 66px;
  }
`;

const RespWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  overflow-x: scroll;
  margin-top: 2rem;
`;

export { AdvisorWrapper, AdvisorsBlockWrapper, RespWrapper };
