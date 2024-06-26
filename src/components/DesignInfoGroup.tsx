import React from "react";
import { StyledDesignInfoGroup } from "../styles/components/DesignInfoGroup.styled";
import { DesignInfoGroupProps } from "./props";
import DesignInfo from "./DesignInfo";

const DesignInfoGroup: React.FC<DesignInfoGroupProps> = ({
  designInfosProps,
  flexBasis,
  styles,
}) => {
  return (
    <StyledDesignInfoGroup className="designInfoGroup" $styles={styles} $flexBasis={flexBasis}>
      {designInfosProps.map((designInfoProps) => {
        return <DesignInfo key={designInfoProps.id} {...designInfoProps} />;
      })}
    </StyledDesignInfoGroup>
  );
};

export default DesignInfoGroup;
