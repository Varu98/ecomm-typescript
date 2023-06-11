import { Flex, Button, ButtonGroup } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useProducts } from "../contexts/ProductListingContext";
import { PaginateProps } from "../types/interfaces";

const Paginate = ({ setIndex }: PaginateProps) => {
  const { paginate, setPaginate } = useProducts();
  const { pageCount } = paginate;
  const [paginateIndices, setPageIndices] = useState<number[]>([]);
  const [prev, setPrev] = useState(0);
  const [next, setNext] = useState(5);

  useEffect(() => {
    let paginationArr = Array.from(
      { length: pageCount },
      (_, i) => i + 1
    ).slice(prev, next);
    setPageIndices(paginationArr);
  }, [pageCount, next, prev]);

  const onClickHandler = (num: number) => {
    setPaginate((prev) => ({ ...prev, page: num }));
  };

  const paginateLeft = () => {
    if (prev < 5) return;
    setNext(prev);
    setPrev((previousCount) => previousCount - 5);
  };
  const paginateRight = () => {
    if (next >= pageCount) return;
    setPrev(next);
    setNext((previousCount) => previousCount + 5);
  };

  return (
    <Flex maxW={"20rem"} mx={"auto"} p={4} justifyContent={"space-around"}>
      {prev !== 0 && (
        <Button onClick={paginateLeft}>
          <BsChevronLeft />
        </Button>
      )}

      <ButtonGroup mx={"0.5rem"}>
        {paginateIndices.map((num: number) => (
          <Button
            bgColor={paginate.page === num ? "blue.500" : ""}
            color={paginate.page === num ? "white" : ""}
            onClick={() => onClickHandler(num)}
          >
            {num}
          </Button>
        ))}
      </ButtonGroup>
      <Button onClick={paginateRight}>
        <BsChevronRight />
      </Button>
    </Flex>
  );
};

export default Paginate;
