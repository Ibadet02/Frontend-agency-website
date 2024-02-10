import React from "react";
import { StyledTask } from "../styles/components/Task.styled";
import { TaskProps } from "../pages/Pricing/props";
import ContentHeading from "./ContentHeading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const Task: React.FC<TaskProps> = ({ contentHeadingProps }) => {
  return (
    <StyledTask>
      <div className="icon-wrapper">
        <FontAwesomeIcon icon={faCheck} />
      </div>
      <ContentHeading {...contentHeadingProps} />
    </StyledTask>
  );
};

export default Task;
