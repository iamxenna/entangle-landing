type languages = "en" | "ru" | "vt" | "de" | "pk" | "id" | "cn" | "fr" | "ua" | "jp" | "kr" | "in" | "ph" | "tr" | "si";
type themes = "dark";

interface IAppEntityState {
  language: languages;
  theme: themes;
  appLoaded: boolean;
}

export type { IAppEntityState, languages, themes };
