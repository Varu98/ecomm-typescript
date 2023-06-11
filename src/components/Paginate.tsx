import { Flex, Button, ButtonGroup } from "@chakra-ui/react";
import { PaginateProps } from "../types/interfaces";

let paginateIndices = [1, 2, 3, 4, 5];

const Paginate = ({ setIndex }: PaginateProps) => {
  const onClickHandler = (num: number) => {
    setIndex(num);
  };
  return (
    <Flex maxW={"20rem"} mx={"auto"} p={4} justifyContent={"space-around"}>
      {paginateIndices.map((num: number) => (
        <ButtonGroup>
          <Button onClick={() => onClickHandler(num)}>{num}</Button>
        </ButtonGroup>
      ))}
    </Flex>
  );
};

export default Paginate;
