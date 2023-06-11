import { Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { BsStarFill, BsStarHalf } from "react-icons/bs";

interface StarProps {
  rating: number;
}

const Rating: React.FC<StarProps> = ({ rating }) => {
  const [stars, setStars] = useState<React.JSX.Element[]>([]);
  const [greyStars, setGreyStars] = useState<React.JSX.Element[]>([]);
  const fullStars = Math.floor(rating);
  const decimalPart = rating - fullStars;

  const renderStars = () => {
    const stars = [];
    const greyStars = [];
    for (let i = 0; i < fullStars; i++) {
      stars.push(<BsStarFill />);
    }
    if (decimalPart >= 0.5) stars.push(<BsStarHalf />);
    setStars(stars);  
    for (let i = fullStars; decimalPart >= 0.5 ? i < 4 : i < 5; i++) {
      greyStars.push(<BsStarFill />);
    }
    setGreyStars(greyStars);
  };

  useEffect(() => {
    renderStars();
  }, [rating]);

  return (
    <Flex>
      <Flex color={"yellow.400"} fontSize={"1.2rem"}>
        {stars.map((star, index) => (
          <span key={index}>{star}</span>
        ))}
      </Flex>
      <Flex color={"gray.200"} fontSize={"1.2rem"}>
        {greyStars.map((star, index) => (
          <span key={index}>{star}</span>
        ))}
      </Flex>
      {/* <Flex>
        {greyStars.map((star, index) => (
          <span key={index}>{star}</span>
        ))}
      </Flex> */}
    </Flex>
  );
};

export default Rating;
