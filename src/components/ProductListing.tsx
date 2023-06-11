import Card from "../components/Card";
import { Product } from "../types/interfaces";
import { Grid, Spinner, VStack } from "@chakra-ui/react";
import Paginate from "../components/Paginate";
import { useProducts } from "../contexts/ProductListingContext";

const ProductListing = () => {
  const { products, loading } = useProducts();
  return (
    <div>
      {loading ? (
        <VStack h={"100vh"} justifyContent={"center"} alignItems={"center"}>
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        </VStack>
      ) : (
        <Grid
          w={"100%"}
          p={{ sm: "0", md: "1rem" }}
          gap={["1rem", "2rem"]}
          templateColumns={{
            base: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
            "2xl": "repeat(4, 1fr)",
          }}
        >
          {products.map((product: Product, index: number) => (
            <Card key={index} product={product} />
          ))}
        </Grid>
      )}

      <Paginate />
    </div>
  );
};

export default ProductListing;
