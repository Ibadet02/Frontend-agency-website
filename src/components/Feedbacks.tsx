import React from "react";
import { StyledFeedbacks } from "../styles/components/Feedbacks.styled";
import FeedbacksContent from "./FeedbacksContent";
import { FeedbacksProps } from "./props";

const Feedbacks: React.FC<FeedbacksProps> = (feedbacksContentProps) => {
  return (
    <StyledFeedbacks>
      <FeedbacksContent {...feedbacksContentProps} />
    </StyledFeedbacks>
  );
};

export default Feedbacks;
