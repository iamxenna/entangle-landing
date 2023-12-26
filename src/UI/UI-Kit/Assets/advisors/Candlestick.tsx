import React, { FC } from "react";
import SVGUniqueID from "react-svg-unique-id";
import { IAsset } from "../types";

export const Candlestick: FC<IAsset> = ({ isActive }) => (
  <SVGUniqueID>
    <svg width="142" height="39" viewBox="0 0 142 39" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M56 0.285156H88V38.0029H56V0.285156ZM75.688 11.3956V9.41384H82.5429V11.3956H80.9835V24.2281L78.4819 26.7945H74.1611V29.7509H75.688V32.3174H68.4434V29.7509H70.0028V26.7945H65.6495L63.1154 24.2281V11.3956H61.5885V9.41384H68.4109V11.3956H67.0464V22.4737H70.0028V7.88693H68.4434V5.87272H75.7205V7.88693H74.1611V22.4737H77.085V11.3956H75.688Z"
        fill={isActive ? "#C0DAF3" : "#676C9E"}
      />
    </svg>
  </SVGUniqueID>
);
