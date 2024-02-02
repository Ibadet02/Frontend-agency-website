import { StyledOurServices } from "../../styles/OurServices/index.styled";
import { ourServicesBanners } from "../../data/OurServices";
import Banner from "../../components/Banner";
import DesignInfoWrapper from "../../components/DesignInfoWrapper";
import { ourServicesDesignInfoWrappers } from "../../data/OurServices";
import { whatWeDoDesignInfoWrappers } from "../../data/WhatWeDo";
import Feedbacks from "../../components/Feedbacks";
import { feedbacks as feedbacksProps } from "../../data/components/Feedbacks";

const { first: firstDesignInfoWrapperProps } = ourServicesDesignInfoWrappers;

const { first: firstBannerProps } = ourServicesBanners;
const { second: secondDesignInfoWrappers } = whatWeDoDesignInfoWrappers;
const OurServices = () => {
  return (
    <StyledOurServices>
      <Banner {...firstBannerProps} />
      <DesignInfoWrapper {...firstDesignInfoWrapperProps} />
      <DesignInfoWrapper {...secondDesignInfoWrappers} />
      <Feedbacks {...feedbacksProps} />
    </StyledOurServices>
  );
};

export default OurServices;
