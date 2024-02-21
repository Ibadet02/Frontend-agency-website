import React from "react";
import { StyledFeedbackGroup } from "../styles/components/FeedbackGroup.styled";
import { FeedbackGroupProps } from "./props";
import Feedback from "./Feedback";

const FeedbackGroup: React.FC<FeedbackGroupProps> = ({
  feedbacksProps,
  styles,
}) => {
  return (
    <StyledFeedbackGroup className="feedbackGroup" $styles={styles}>
      {feedbacksProps.map((feedbackProps) => {
        return <Feedback key={feedbackProps.id} {...feedbackProps} />;
      })}
    </StyledFeedbackGroup>
  );
};

export default FeedbackGroup;
