import React from "react";
import { StyledBannerContent } from "../../styles/components/Banner/BannerContent.styled";
import { BannerContentProps } from "./props";
import ImageDemonstrator from "./ImageDemonstrator";
import DesignInfo from "../DesignInfo";

const BannerContent: React.FC<BannerContentProps> = ({
  imageDemonstratorProps,
  designInfoProps,
  styles,
}) => {
  return (
    <StyledBannerContent $styles={styles}>
      <DesignInfo {...designInfoProps} />
      {imageDemonstratorProps && (
        <ImageDemonstrator {...imageDemonstratorProps} />
      )}
    </StyledBannerContent>
  );
};

export default BannerContent;
