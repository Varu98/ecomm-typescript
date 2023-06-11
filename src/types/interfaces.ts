import { Dispatch, ReactNode, SetStateAction } from "react";

export interface Product {
  id: number;
  name: string;
  sku: string;
  description: string;
  url_key: string;
  image: string;
  price: number;
  special_price: number;
  is_sale: boolean;
  qty: number;
  stock_status: number;
  status: number;
  categoryId: number;
  gender: string;
  brand: string;
  rating: number;
  created_at: string;
  updated_at: string;
}

export interface Paginate {
  page: number;
  count: number;
  pageCount: number;
}
export interface ProductContextProps {
  products: Product[];
  loading: boolean;
  paginate: Paginate;
  setPaginate: Dispatch<SetStateAction<Paginate>>;
}

export interface ProductProviderProps {
  children: ReactNode;
}

export interface PaginateProps {
  index: number;
  setIndex: Dispatch<SetStateAction<number>>;
}
