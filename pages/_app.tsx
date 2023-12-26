import { appWithTranslation } from "next-i18next";
import { useDispatch } from "react-redux";
import { AppProps } from "next/app";
import { useEffect } from "react";
import Head from "next/head";
import { mobile, mobileLayoutForTablet, tablet } from "Constants/Devices";
import ContentManager from "Components/Content/Content";
import wrapper, { useStore } from "Core/store";
import GlobalStyles from "../styles/global";
import "../styles/fonts.css";
import { Seo } from "Components/Seo/Seo";

function MyApp(appProps: AppProps) {
  const dispatch = useDispatch();
  const {
    actions: {
      App: { setAppLoaded },
      Device: { setBurgerActive, setDesktop, setMobile, setMobileLayoutForTablet, setTablet },
    },
  } = useStore((store) => ({
    Device: store.Device,
    App: store.App,
  }));

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= mobile) {
        dispatch(setMobile());
      } else if (window.innerWidth <= mobileLayoutForTablet) {
        dispatch(setMobileLayoutForTablet());
        dispatch(setBurgerActive(false));
      } else if (window.innerWidth <= tablet) {
        dispatch(setTablet());
        dispatch(setBurgerActive(false));
      } else {
        dispatch(setDesktop());
        dispatch(setBurgerActive(false));
      }
    };

    const handleOnLoad = () => {
      dispatch(setAppLoaded());
    };

    const alreadyLoaded = document.readyState == "complete";

    if (alreadyLoaded) {
      handleOnLoad();
    } else {
      window.onload = handleOnLoad;
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Entangle | Landing</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </Head>
      <ContentManager appProps={appProps} />
      <Seo />
      <GlobalStyles />
    </>
  );
}

export default appWithTranslation(wrapper.withRedux(MyApp));
