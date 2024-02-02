import React from "react";
import { StyledFeedback } from "../styles/components/Feedback.styled";
import { FeedbackProps } from "./props";
import NumberedOrder from "./NumberedOrder";
import MainDescription from "./MainDescription";
import Heading from "./Heading";
import Rating from "./Rating";

const Feedback: React.FC<FeedbackProps> = ({
  numberedOrderProps,
  description1Props,
  img,
  headingProps,
  description2Props,
  ratingProps,
}) => {
  return (
    <StyledFeedback>
      <NumberedOrder {...numberedOrderProps} />
      <MainDescription {...description1Props} />
      <img src={img.src} alt={img.alt} className="feedback-img" />
      <Heading {...headingProps} />
      <MainDescription {...description2Props} />
      <Rating {...ratingProps} />
    </StyledFeedback>
  );
};

export default Feedback;
