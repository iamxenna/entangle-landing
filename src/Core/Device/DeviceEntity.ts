import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IWithNetworkState, withNetworkReducers, withNetworkState } from "helpers/networks";
import { IDeviceEntityState } from "./DeviceEntity.interfaces";

const initialState: IDeviceEntityState & IWithNetworkState = {
  ...withNetworkState,
  isMobile: false,
  isDesktop: true,
  burgerActive: false,
  headerActive: true,
  isTablet: false,
  isMobileLayoutForTablet: false,
};

export const DeviceEntity = createSlice({
  name: "DeviceEntity",
  initialState,
  reducers: {
    ...withNetworkReducers,
    setMobile(state) {
      state.isMobile = true;
      state.isTablet = false;
      state.isDesktop = false;
      state.isMobileLayoutForTablet = false;
    },
    setBurgerActive(state, action: PayloadAction<boolean>) {
      state.burgerActive = action.payload;
      state.headerActive = !action.payload;
    },
    setHeaderActive(state, action: PayloadAction<boolean>) {
      state.headerActive = action.payload;
      state.burgerActive = !action.payload;
    },
    setTablet(state) {
      state.isTablet = true;
      state.isMobile = false;
      state.isDesktop = false;
      state.isMobileLayoutForTablet = false;
    },
    setDesktop(state) {
      state.isTablet = false;
      state.isMobile = false;
      state.isDesktop = true;
      state.isMobileLayoutForTablet = false;
    },
    setMobileLayoutForTablet(state) {
      state.isMobileLayoutForTablet = true;
      state.isTablet = false;
      state.isMobile = false;
      state.isDesktop = false;
    },
  },
});
