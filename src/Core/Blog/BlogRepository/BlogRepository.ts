import type { IBlogRepository } from "./BlogRepository.interfaces";

export const BlogRepository: IBlogRepository = {
  getPosts: async () => {
    try {
      return await (
        await fetch("https://entangle-2.ghost.io/ghost/api/content/posts/?key=bc0fd074874e86ecf8527a5607")
      ).json();
    } catch (err) {
      console.log(err);
      throw new Error(err);
    }
  },
};
