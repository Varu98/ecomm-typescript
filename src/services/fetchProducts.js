import { BaseUrl } from "../constants/urls";

export const fetchProducts = async (
  limit,
  setLoading,
  setProducts,
  paginate,
  setPaginate
) => {
  try {
    const response = await fetch(
      BaseUrl + `/products?limit=${limit}&page=${paginate.page}`
    );
    const data = await response.json();
    if (data) {
      setLoading(false);
      setProducts(data.data);
      setPaginate((prev) => ({ ...prev, pageCount: data.pageCount }));
    }
  } catch (error) {
    console.error(error);
  }
};
