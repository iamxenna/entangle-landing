import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IScrollEntityState } from "./ScrollEntity.interfaces";

const initialState: IScrollEntityState = {
  scrollToOffset: {},
};

export const ScrollEntity = createSlice({
  name: "ScrollEntity",
  initialState,
  reducers: {
    setScrollToOffset(state, action: PayloadAction<Record<string, number>>) {
      state.scrollToOffset = { ...state.scrollToOffset, ...action.payload };
    },
    clearScrollToOffset(state) {
      state.scrollToOffset = {};
    },
  },
});
