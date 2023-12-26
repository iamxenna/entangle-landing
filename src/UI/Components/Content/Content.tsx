import React, { useMemo, useEffect, useRef, memo } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import type { AppProps } from "next/app";
import { useStore } from "Core/store";
import { Header } from "Components/Header/Header";
import { Footer } from "Components/Footer/Footer";
import { Burger } from "Components/Burger/Burger";
import { tablet } from "Constants/Devices";

type ContentManagerProps = {
  appProps: AppProps;
};

const Wrapper = styled.main`
  width: 100%;
  display: block;
  padding: var(--marginTop) 0 0 0;
  position: relative;
  background-color: #00001d;
  background-image: url("/assets/images/background.png");
  background-position: center;
  background-size: 30%;
  @media screen and (max-width: ${tablet}px) {
    overflow-x: hidden;
    background-size: 100%;
  }
`;

const Container = styled.div`
  width: 100%;
  font-size: 1rem;
`;

const MemoizedFooter = memo(Footer);

function Content(props: ContentManagerProps) {
  const { Component, pageProps } = props.appProps;
  const dispatch = useDispatch();
  const lastActive = useRef<"burger" | "header" | null>(null);

  const {
    store: {
      Device: { burgerActive, isDesktop, headerActive },
    },
    actions: {
      Device: { setBurgerActive, setHeaderActive },
    },
  } = useStore((store) => ({
    Device: store.Device,
  }));

  useEffect(() => {
    if (burgerActive) {
      if (lastActive.current == "burger") {
        dispatch(setBurgerActive(false));
      } else {
        dispatch(setHeaderActive(false));
      }
    } else {
      if (burgerActive) {
        lastActive.current = "burger";
      } else if (headerActive) {
        lastActive.current = "header";
      }
    }
  }, [burgerActive, headerActive, dispatch]);

  const MemoizedComponent = useMemo(() => <Component {...pageProps} />, [pageProps, Component]);

  return (
    <>
      <Wrapper>
        {!isDesktop ? <Burger /> : <Header />}
        <Container>{MemoizedComponent}</Container>
      </Wrapper>
      <MemoizedFooter />
    </>
  );
}

export default Content;
