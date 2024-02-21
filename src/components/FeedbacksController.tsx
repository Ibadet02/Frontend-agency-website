import React from "react";
import { StyledFeedbacksController } from "../styles/components/FeedbacksController.styled";
import { FeedbacksControllerProps } from "./props";
import SmallHeading from "./SmallHeading";
import ContentHeading from "./ContentHeading";
import Controllers from "./Controllers";

const FeedbacksController: React.FC<FeedbacksControllerProps> = ({
  img,
  smallHeadingProps,
  contentHeadingProps,
  styles,
}) => {
  return (
    <StyledFeedbacksController className="feedbacksController" $styles={styles}>
      <img src={img.src} alt={img.alt} />
      <SmallHeading {...smallHeadingProps} />
      <ContentHeading {...contentHeadingProps} />
      <Controllers />
    </StyledFeedbacksController>
  );
};

export default FeedbacksController;
