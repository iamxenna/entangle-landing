import { IBlogUnit } from "../BlogEntity";

interface IBlogRepository {
  getPosts: () => Promise<{ posts: IBlogUnit[] }>;
}

export type { IBlogRepository };
