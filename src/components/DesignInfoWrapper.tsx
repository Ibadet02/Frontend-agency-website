import React from "react";
import { StyledDesignInfoWrapper } from "../styles/components/DesignInfoWrapper.styled";
import DesignInfoWrapperContent from "./DesignInfoWrapperContent";
import { DesignInfoWrapperProps } from "./props";

const DesignInfoWrapper: React.FC<DesignInfoWrapperProps> = (
  designInfoWrapperContentProps
) => {
  return (
    <StyledDesignInfoWrapper>
      <DesignInfoWrapperContent {...designInfoWrapperContentProps} />
    </StyledDesignInfoWrapper>
  );
};

export default DesignInfoWrapper;
