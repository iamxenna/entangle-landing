import styled from "styled-components";

const Underline = styled.div`
  position: absolute;
  bottom: -7px;
  height: 2px;
  width: 100%;
  background: linear-gradient(90deg, var(--pink) -1.89%, var(--neon-blue) 100%);
`;

const SidebarWrapper = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 100vh;
  width: 55%;
`;

const SidebarContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 32px 28px 27px 40px;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 61.52%), #101010;
  opacity: 0.95;
  box-shadow: 0px -16px 11px rgba(0, 0, 0, 0.5);
`;

const SidebarText = styled.p<{ isActive: boolean }>`
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  letter-spacing: 0.02em;

  color: ${({ isActive }) => (isActive ? "#FFFFFF" : "#676c9e")};
`;

const CloseContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 61px;
  cursor: pointer;
`;

const LangText = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  color: #ffffff;
  text-transform: uppercase;
`;

export { Underline, SidebarWrapper, SidebarContainer, SidebarText, CloseContainer, LangText };
