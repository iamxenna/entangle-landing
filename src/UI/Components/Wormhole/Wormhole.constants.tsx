import { TFunction } from "i18next";

export const generateWormholeItems = (t: TFunction<"translation", undefined>) => {
  return [
    {
      title: t("achieveInteroperability"),
      text: (
        <>
          {t("cross-chainCommunication")}
          <br /> {t("developOnEntangleLayer")}
        </>
      ),
      image: "1",
    },
    {
      title: t("customizationAtTheCore"),
      text: (
        <>
          {t("facilitateAnyType")} <br /> {t("setYourOwnSecurity")}
        </>
      ),
      image: "2",
    },
    {
      title: t("decentralization"),
      text: (
        <>
          {t("entangleBlockchainSecured")} {t("securityDeposits")}
        </>
      ),
      image: "3",
    },
    {
      title: t("entangleInfrastructure"),
      text: (
        <>
          {t("participateInEntangle")} {t("entangleOracles")} {t("provenTrackRecords")}
        </>
      ),
      image: "4",
    },
  ];
};
