import React from "react";
import { StyledBanner } from "../../styles/components/Banner/index.styled";
import { BannerProps } from "./props";
import ImageDemonstrator from "./ImageDemonstrator";
import DesignInfo from "../DesignInfo";

const Banner: React.FC<BannerProps> = ({
  imageDemonstratorProps,
  designInfoProps,
  styles,
  flexDirection,
}) => {
  return (
    <StyledBanner className="banner" $styles={styles} $flexDirection={flexDirection}>
      <DesignInfo {...designInfoProps} />
      {imageDemonstratorProps && (
        <ImageDemonstrator {...imageDemonstratorProps} />
      )}
    </StyledBanner>
  );
};

export default Banner;
