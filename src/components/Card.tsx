import {
  VStack,
  GridItem,
  Flex,
  Text,
  Image,
  Box,
  Button,
} from "@chakra-ui/react";
import Rating from "./Rating";
import { BsHandbag } from "react-icons/bs";
import { Product } from "../types/interfaces";
import React from "react";
interface Props {
  product: Product;
}
const Card = ({ product }: Props) => {
  const { id, name, image, description, price, rating, special_price } =
    product;

  return (
    <GridItem data-testid={"product-card"} w={"full"} key={id}>
      <VStack rounded={"sm"} p={4} gap={"1rem"}>
        <Box>
          <Image rounded={"md"} w={"100%"} src={image} />
        </Box>

        <Text
          alignSelf={"flex-start"}
          fontWeight={{ base: "semibold" }}
          fontSize={{ base: "lg", lg: "xl" }}
        >
          {name}
        </Text>
        <Text fontSize={{ base: "sm", lg: "lg" }}>{description}</Text>
        <Flex w={"full"} justifyContent={"end"} gap={"1rem"}>
          <Rating rating={rating} />
        </Flex>
        <Flex
          flexDirection={"row"}
          gap={{ base: "1rem" }}
          px={"1rem"}
          w={"full"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          {special_price ? (
            <VStack justifyContent={"start"}>
              <Text
                fontSize={{ base: "sm" }}
                fontWeight={"bold"}
                color={"red.300"}
              >
                AED {special_price}
              </Text>
              <Text
                fontSize={{ base: "sm" }}
                fontWeight={"bold"}
                color={"gray.300"}
                as={"s"}
              >
                AED {price}
              </Text>
            </VStack>
          ) : (
            <VStack>
              <Text
                fontSize={{ base: "sm" }}
                fontWeight={"bold"}
                color={"red.300"}
              >
                AED {price}
              </Text>
            </VStack>
          )}

          <Button w={"3rem"} h={"3rem"} rounded={"full"}>
            <BsHandbag width={"100%"} height={"100%"} />
          </Button>
        </Flex>
      </VStack>
    </GridItem>
  );
};
export default Card;
