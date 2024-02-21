import React from "react";
// import { StyledFeedbacks } from "../styles/components/Feedbacks.styled";
import FeedbackController from "./FeedbacksController";
import FeedbackGroup from "./FeedbackGroup";
import { FeedbacksProps } from "./props";
import { StyledFeedbacks } from "../styles/components/Feedbacks.styled";

const Feedbacks: React.FC<FeedbacksProps> = ({
  feedbacksControllerProps,
  feedbackGroupProps,
  styles,
}) => {
  return (
    <StyledFeedbacks className="feedbacks" $styles={styles}>
      <FeedbackController {...feedbacksControllerProps} />
      <FeedbackGroup {...feedbackGroupProps} />
    </StyledFeedbacks>
  );
};

export default Feedbacks;
