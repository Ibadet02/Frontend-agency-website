import Banner from "../../components/Banner/index";
import {
  whatWeDoBanners,
  whatWeDoDesignInfoWrappers,
} from "../../data/WhatWeDo";
import DesignInfoWrapper from "../../components/DesignInfoWrapper";
import { StyledPage } from "../../styles/pages/index.styled";
import { StyledSection } from "../../styles/pages/Section.styled";

const { first: firstBannerProps } = whatWeDoBanners;
const { second: secondDesignInfoWrapperProps } = whatWeDoDesignInfoWrappers;
const WhatWeDo = () => {
  return (
    <StyledPage>
      <StyledSection>
        <Banner {...firstBannerProps} />
      </StyledSection>
      <StyledSection>
        <DesignInfoWrapper {...secondDesignInfoWrapperProps} />
      </StyledSection>
    </StyledPage>
  );
};

export default WhatWeDo;
