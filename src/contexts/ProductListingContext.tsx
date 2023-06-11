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
  paginate: {
    page: 1,
    count: limit,
    pageCount: 10,
  },
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setPaginate: () => {},
});

const ProductsProvider = ({ children }: ProductProviderProps) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [paginate, setPaginate] = useState<Paginate>({
    page: 1,
    count: limit,
    pageCount: 10,
  });

  useEffect(() => {
    setLoading(true);
    fetchProducts(limit, setLoading, setProducts, paginate, setPaginate);
  }, [paginate.page]);
  return (
    <ProductsContext.Provider
      value={{ products, loading, paginate, setPaginate }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => useContext(ProductsContext);
export { ProductsProvider };
