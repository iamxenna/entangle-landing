import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { useSelector } from "react-redux";

import { AppEntity } from "./App/AppEntity";
import { DeviceEntity } from "./Device/DeviceEntity";
import { ScrollEntity } from "Core/Scroll";
import { AnchorEntity } from "./Anchor/Anchor";

import { BlogEntity } from "Core/Blog/BlogEntity";
import { BlogInteractor, IBlogInteractor } from "Core/Blog/BlogInteractor";

export const store = configureStore({
  reducer: {
    App: AppEntity.reducer,
    Device: DeviceEntity.reducer,
    Store: ScrollEntity.reducer,
    Anchor: AnchorEntity.reducer,
    Blog: BlogEntity.reducer,
  },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware({ serializableCheck: false })],
});

export type IStore = ReturnType<typeof store.getState>;

interface IActions {
  App: typeof AppEntity.actions;
  Device: typeof DeviceEntity.actions;
  Scroll: typeof ScrollEntity.actions;
  Anchor: typeof AnchorEntity.actions;
  Blog: typeof BlogEntity.actions;
}

export const actions: IActions = {
  App: AppEntity.actions,
  Device: DeviceEntity.actions,
  Scroll: ScrollEntity.actions,
  Anchor: AnchorEntity.actions,
  Blog: BlogEntity.actions,
};

export interface IAsyncActions {
  Blog: IBlogInteractor;
}

export const asyncActions: IAsyncActions = {
  Blog: BlogInteractor,
};

export const useStore = <T>(
  selector: (store: IStore) => T,
): { store: T; actions: IActions; asyncActions: IAsyncActions } => {
  return {
    actions,
    store: useSelector(selector),
    asyncActions,
  };
};

export default createWrapper(() => store);
