import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import type { IAnchorEntityState } from "./Anchor.interfaces";

const initialState: IAnchorEntityState = {
  active: "HOME",
};

export const AnchorEntity = createSlice({
  name: "AnchorEntity",
  initialState,
  reducers: {
    setAnchor(state, action: PayloadAction<string>) {
      state.active = action.payload;
    },
  },
});
