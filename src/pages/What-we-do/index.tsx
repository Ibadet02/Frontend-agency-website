import { StyledWhatWeDo } from "../../styles/What-we-do/index.styled";
import Banner from "../../components/Banner";
import {
  whatWeDoBanners,
  whatWeDoDesignInfoWrappers,
} from "../../data/WhatWeDo";
import DesignInfoWrapper from "../../components/DesignInfoWrapper";

const { first: firstBannerProps } = whatWeDoBanners;
const { first: firstDesignInfoWrappers, second: secondDesignInfoWrappers } =
  whatWeDoDesignInfoWrappers;
const WhatWeDo = () => {
  return (
    <StyledWhatWeDo>
      <Banner {...firstBannerProps} />
      <DesignInfoWrapper {...firstDesignInfoWrappers} />
      <DesignInfoWrapper {...secondDesignInfoWrappers} />
    </StyledWhatWeDo>
  );
};

export default WhatWeDo;
