export interface GetAllSlugsResponse {
  data: Post[];
  meta: Meta;
}

export interface Post {
  id: number;
  attributes: Attributes;
}

export interface Attributes {
  slug: string;
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
