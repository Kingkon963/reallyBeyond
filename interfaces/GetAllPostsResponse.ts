export interface GetAllPostsResponse {
  data: Post[];
  meta: Meta;
}

export interface Post {
  id: number;
  attributes: PostAttributes;
}

export interface PostAttributes {
  title: string;
  slug: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  author: Author;
}

export interface Author {
  data: AuthorData;
}

export interface AuthorData {
  id: number;
  attributes: PurpleAttributes;
}

export interface PurpleAttributes {
  username: string;
  avatar: Avatar;
}

export interface Avatar {
  data: AvatarData;
}

export interface AvatarData {
  id: number;
  attributes: FluffyAttributes;
}

export interface FluffyAttributes {
  url: string;
}

export interface Meta {
  pagination: Pagination;
}

export interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}
