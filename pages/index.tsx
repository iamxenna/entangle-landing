import { LiqResolved } from "Components/LiqResolved/LiqResolved";
import { SphereBlock } from "Components/SphereBlock/SphereBlock";
import { Infrastructure } from "Components/Infrastructure/Infrastructure";
import { SyntheticVaults } from "Components/SyntheticVaults/SyntheticVaults";
import { Roadmap } from "Components/Roadmap/Roadmap";
import { TeamAndAdvisors } from "Components/TeamAndAdvisors/TeamAndAdvisors";
import { Wormhole } from "Components/Wormhole/Wormhole";
import { Info } from "Components/Info/Info";
import { useEffect } from "react";
import { MarqueContainer } from "Components/MarqueContainer/MarqueContainer";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Home() {
  useEffect(() => {
    console.log(navigator.userAgent);
  }, []);
  return (
    <>
      <LiqResolved />
      <MarqueContainer />
      <SphereBlock />
      <Infrastructure />
      <SyntheticVaults />
      <Wormhole />
      <Roadmap />
      <TeamAndAdvisors />
      <Info />
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
