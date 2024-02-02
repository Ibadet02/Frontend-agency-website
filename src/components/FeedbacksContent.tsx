import React from "react";
import { StyledFeedbacksContent } from "../styles/components/FeedbacksContent.styled";
import FeedbackController from "./FeedbacksController";
import FeedbackGroup from "./FeedbackGroup";
import { FeedbacksContentProps } from "./props";

const FeedbacksContent: React.FC<FeedbacksContentProps> = ({
  feedbacksControllerProps,
  feedbackGroupProps,
  styles,
}) => {
  return (
    <StyledFeedbacksContent $styles={styles}>
      <FeedbackController {...feedbacksControllerProps} />
      <FeedbackGroup {...feedbackGroupProps} />
    </StyledFeedbacksContent>
  );
};

export default FeedbacksContent;
