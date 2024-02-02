import React from "react";
import { StyledRating } from "../styles/components/Rating.styled";
import { RatingProps } from "./props";
import star from "../assets/icons/star";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";

const stars = new Array(5).fill(star);
const Rating: React.FC<RatingProps> = ({ rating }) => {
  return (
    <StyledRating>
      {stars.map((_icon, index) => {
        return (
          <FontAwesomeIcon
            key={index}
            icon={faStar}
            style={{ color: "#FFD43B", fill: "#FFD43B" }}
          />
        );
      })}
    </StyledRating>
  );
};

export default Rating;
