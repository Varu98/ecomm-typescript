import { Text, Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import ProductListingCard from "./cards/ProductListingCard";

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://ecom-mock.mumzworld.tech/products");
      const { data } = await response.json();
      console.log(data);
      if (data.length < 1) setProducts(data);
    };
    fetchData();
  }, []);
  return (
    <Stack spacing={3}>
      <Text fontSize="6xl">(6xl) In love with React & Next</Text>
      <ProductListingCard data={data} />
    </Stack>
  );
}

export default App;
