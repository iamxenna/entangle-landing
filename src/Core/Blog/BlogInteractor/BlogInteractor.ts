import { createAsyncThunk } from "@reduxjs/toolkit";
import { Thunk } from "Core/types/Interactor";
import { BlogRepository, IBlogRepository } from "../BlogRepository";
import { BlogEntity } from "../BlogEntity";

export interface IBlogInteractor {
  getBlog: Thunk<void>;
}

export const createBlogInteractor = (Repository: IBlogRepository, Entity: typeof BlogEntity): IBlogInteractor => ({
  getBlog: createAsyncThunk("CardTypesInteractor/getCardTypes", async (_, { dispatch }) => {
    try {
      dispatch(Entity.actions.setLoading(true));
      const data = await Repository.getPosts();
      dispatch(Entity.actions.setPosts(data.posts));
    } catch (err: any) {
      dispatch(Entity.actions.setError(err.message));
    } finally {
      dispatch(Entity.actions.setLoading(false));
    }
  }),
});

export const BlogInteractor = createBlogInteractor(BlogRepository, BlogEntity);
