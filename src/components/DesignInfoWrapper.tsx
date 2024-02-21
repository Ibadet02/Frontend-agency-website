import React from "react";
import { StyledDesignInfoWrapper } from "../styles/components/DesignInfoWrapper.styled";
import DesignInfo from "./DesignInfo";
import DesignInfoGroup from "./DesignInfoGroup";
import { DesignInfoWrapperProps } from "./props";

const DesignInfoWrapper: React.FC<DesignInfoWrapperProps> = ({
  designInfoProps,
  designInfoGroupProps,
  flexDirection,
  styles,
}) => {
  return (
    <StyledDesignInfoWrapper className="designInfoWrapper" $styles={styles} $flexDirection={flexDirection}>
      {designInfoProps && <DesignInfo {...designInfoProps} />}
      {designInfoGroupProps && <DesignInfoGroup {...designInfoGroupProps} />}
    </StyledDesignInfoWrapper>
  );
};

export default DesignInfoWrapper;
