import styled from "styled-components";

const SliderWrapper = styled.div`
  width: 100%;
  overflow-x: scroll;
  display: flex;
  flex-direction: row;
  scroll-snap-type: x mandatory;

  ::scrollbar {
    width: 0;
  }
`;

export { SliderWrapper };
