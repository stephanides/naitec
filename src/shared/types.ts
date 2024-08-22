export type Pagination = {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
};

export type ImageFormat = {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: string | null;
  size: number;
  width: number;
  height: number;
  sizeInBytes: number;
};

export type ImageAttributes = {
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: {
    large: ImageFormat;
    small: ImageFormat;
    medium: ImageFormat;
    thumbnail: ImageFormat;
  };
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: any | null;
  createdAt: string;
  updatedAt: string;
};

export type Image = {
  id: number;
  attributes: ImageAttributes;
};

type StoreAttributes = {
  title: string;
  street: string;
  lat: string;
  lng: string;
  email: string;
  phone: string;
  air_conditioner: boolean;
  accessories: boolean;
  household: boolean;
  website: string;
  content: string;
  image?: {
    data: Image;
  };
};

export type Store = {
  id: number;
  attributes: StoreAttributes;
};

export type StoresResponse = {
  data: Store[];
  meta: {
    pagination: Pagination;
  };
};
