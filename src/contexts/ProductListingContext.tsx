import { createContext, useContext, useEffect, useState } from "react";
import {
  Paginate,
  Product,
  ProductContextProps,
  ProductProviderProps,
} from "../types/interfaces";
import { fetchProducts } from "../services/fetchProducts";

const limit = 10;
const ProductsContext = createContext<ProductContextProps>({
  products: [],
  loading: true,
  index: 1,
  paginate: {
    page: 1,
    count: limit,
    pageCount: 10,
  },
  setIndex: () => {},
  setPaginate: () => {},
});

const ProductsProvider = ({ children }: ProductProviderProps) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [index, setIndex] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);
  const [paginate, setPaginate] = useState<Paginate>({
    page: 1,
    count: limit,
    pageCount: 10,
  });

  useEffect(() => {
    fetchProducts(limit, index, setLoading, setProducts, paginate, setPaginate);
  }, [paginate.page]);
  console.log(products);
  return (
    <ProductsContext.Provider
      value={{ products, loading, index, setIndex, paginate, setPaginate }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => useContext(ProductsContext);
export { ProductsProvider };
