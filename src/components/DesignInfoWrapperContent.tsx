import React from "react";
import { StyledDesignInfoWrapperContent } from "../styles/components/DesignInfoWrapperContent.styled";
import DesignInfo from "./DesignInfo";
import DesignInfoGroup from "./DesignInfoGroup";
import { DesignInfoWrapperContentProps } from "./props";

const DesignInfoWrapperContent: React.FC<DesignInfoWrapperContentProps> = ({
  designInfoProps,
  designInfoGroupProps,
  styles,
}) => {
  return (
    <StyledDesignInfoWrapperContent $styles={styles}>
      {designInfoProps && <DesignInfo {...designInfoProps} />}
      {designInfoGroupProps && <DesignInfoGroup {...designInfoGroupProps} />}
    </StyledDesignInfoWrapperContent>
  );
};

export default DesignInfoWrapperContent;
