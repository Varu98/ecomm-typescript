import { createContext, useContext, useEffect, useState } from "react";
import {
  Product,
  ProductContextProps,
  ProductProviderProps,
} from "../types/interfaces";

const ProductsContext = createContext<ProductContextProps>({
  products: [],
  loading: true,
  index: 1,
  setIndex: () => {},
});

const ProductsProvider = ({ children }: ProductProviderProps) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [index, setIndex] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://ecom-mock.mumzworld.tech/products?limit=10&page=${index}`
      );
      const data = await response.json();
      if (data) {
        setLoading(false);
        setProducts(data.data);
      }
    };
    fetchData();
  }, [index]);
  console.log(products);
  return (
    <ProductsContext.Provider value={{ products, loading, index, setIndex }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => useContext(ProductsContext);
export { ProductsProvider };
