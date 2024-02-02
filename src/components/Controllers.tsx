import React from "react";
import { StyledControllers } from "../styles/components/Controllers.styles";

const Controllers = () => {
  return (
    <StyledControllers>
      <button id="previous">{"<"}</button>
      <button id="next">{">"}</button>
    </StyledControllers>
  );
};

export default Controllers;
