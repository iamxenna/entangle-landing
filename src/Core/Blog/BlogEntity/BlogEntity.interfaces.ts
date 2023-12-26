interface IBlogUnit {
  id: string;
  title: string;
  slug: string;
  feature_image: string;
  updated_at: string;
  url: string;
  excerpt: string;
}

interface IBlogEntity {
  posts: IBlogUnit[];
}

export type { IBlogEntity, IBlogUnit };
