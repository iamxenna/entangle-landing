import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IWithNetworkState, withNetworkReducers, withNetworkState } from "helpers/networks";
import { IBlogEntity, IBlogUnit } from "./BlogEntity.interfaces";

const initialState: IBlogEntity & IWithNetworkState = {
  ...withNetworkState,
  posts: [],
};

export const BlogEntity = createSlice({
  name: "BlogEntity",
  initialState,
  reducers: {
    ...withNetworkReducers,
    setPosts(state, action: PayloadAction<IBlogUnit[]>) {
      state.posts = action.payload;
    },
  },
});
