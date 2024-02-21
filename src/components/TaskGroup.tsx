import React from "react";
import { TaskGroupProps } from "../pages/Pricing/props";
import { StyledTaskGroup } from "../styles/components/TaskGroup.styled";
import Task from "./Task";

const TaskGroup: React.FC<TaskGroupProps> = ({ tasksProps }) => {
  return (
    <StyledTaskGroup className="taskGroup">
      {tasksProps.map((taskProp) => {
        return <Task key={taskProp.id} {...taskProp} />;
      })}
    </StyledTaskGroup>
  );
};

export default TaskGroup;
