import { NextSeo } from "next-seo";
import React from "react";

export const Seo = () => {
  return (
    <>
      <NextSeo
        title="Entangle - Liquidity Resolved"
        description="The web3 interoperability protocol unifying liquidity to form the composable ocean."
        themeColor="#00001d"
        twitter={{
          handle: "@handle",
          site: "@site",
          cardType: "summary",
        }}
        openGraph={{
          url: "https://dev.landing.entangle.fi",
          title: "Entangle - Liquidity Resolved",
          description: "The web3 interoperability protocol unifying liquidity to form the composable ocean.",
          images: [
            {
              url: "https://dev.landing.entangle.fi/assets/entangle-01.png",
              width: 1280,
              height: 720,
              alt: "Entangle Preview Logo 1",
              type: "image/png",
            },
            {
              url: "https://dev.landing.entangle.fi/assets/entangle-02.png",
              width: 512,
              height: 512,
              alt: "Entangle Preview Logo 2",
              type: "image/png",
            },
          ],
          siteName: "Entangle",
        }}
      />
    </>
  );
};
