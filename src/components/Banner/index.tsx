import React from "react";
import { StyledBanner } from "../../styles/components/Banner/index.styled";
import BannerContent from "./BannerContent";
import { BannerProps } from "./props";

const Banner: React.FC<BannerProps> = (props) => {
  return (
    <StyledBanner>
      <BannerContent {...props} />
    </StyledBanner>
  );
};

export default Banner;
