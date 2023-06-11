import { BaseUrl } from "../constants/urls";

export const fetchProducts = async (
  limit,
  index,
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
      console.log(data);
      setLoading(false);
      setProducts(data.data);
      setPaginate((prev) => ({ ...prev, pageCount: data.pageCount }));
    }
  } catch (error) {
    console.log(error);
  }
};
