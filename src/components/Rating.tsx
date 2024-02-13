import React from "react";
import { StyledRating } from "../styles/components/Rating.styled";
import { RatingProps } from "./props";
import star from "../assets/icons/star.svg";

const stars = new Array(5).fill(star);
const Rating: React.FC<RatingProps> = ({}) => {
  return (
    <StyledRating>
      {stars.map((icon, index) => {
        return <img key={index} src={icon} alt="" />;
      })}
    </StyledRating>
  );
};

export default Rating;
