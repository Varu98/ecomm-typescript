import Card from "../components/Card";
import { Product } from "../types/interfaces";
import { Grid } from "@chakra-ui/react";
import Paginate from "../components/Paginate";
import { useProducts } from "../contexts/ProductListingContext";
const ProductListing = () => {
  const { products, index, setIndex } = useProducts();
  return (
    <div>
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
        {products.map((product: Product) => (
          <Card product={product} />
        ))}
      </Grid>

      <Paginate index={index} setIndex={setIndex} />
    </div>
  );
};

export default ProductListing;
