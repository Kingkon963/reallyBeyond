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
  data?: AuthorData;
}

export interface AuthorData {
  id: number;
  attributes: AuthorAttributes;
}

export interface AuthorAttributes {
  username: string;
  avatar?: Avatar;
}

export interface Avatar {
  data: AvatarData;
}

export interface AvatarData {
  id: number;
  attributes: AvatarAttributes;
}

export interface AvatarAttributes {
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  formats?: Formats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: null;
  provider: string;
  provider_metadata: null;
  createdAt: Date;
  updatedAt: Date;
}

export interface Formats {
  thumbnail?: Media;
  medium?: Media;
  small?: Media;
  xsmall?: Media;
}

export interface Media {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  width: number;
  height: number;
  size: number;
  path: null;
  url: string;
}

export interface PostMeta {
  pagination: Pagination;
}

export interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}
