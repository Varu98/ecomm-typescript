import { Box, VStack,  Text, Button, Image } from "@chakra-ui/react";
import React from "react";
import { BsHandbag } from "react-icons/bs";

const ProductListingCard = ({item : any[]} ) => {
  return (
    <VStack>
      <Text>Image</Text>
      <Image />
      <Text>Discount Badge</Text>
      <Text>Current Price</Text>
      <Text>Earlier Price</Text>
      <Button>
        <BsHandbag />
      </Button>
    </VStack>
  );
};

export default ProductListingCard;
