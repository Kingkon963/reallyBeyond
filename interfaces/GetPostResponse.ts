export interface GetPostResponse {
  data: Datum[];
  meta: Meta;
}

export interface Datum {
  id: number;
  attributes: DatumAttributes;
}

export interface DatumAttributes {
  title: string;
  slug: string;
  content: string;
  description?: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  author?: Author;
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
  data?: AvatarData;
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
