import { StyledServices } from "../../styles/Services/index.styled";
import { servicesBanners } from "../../data/Services";
import Banner from "../../components/Banner";
import DesignInfoWrapper from "../../components/DesignInfoWrapper";
import { servicesDesignInfoWrappers } from "../../data/Services";
import { whatWeDoDesignInfoWrappers } from "../../data/WhatWeDo";

const { first: firstDesignInfoWrapperProps, second: secondDesignInfoWrapperProps } = servicesDesignInfoWrappers;

const { first: firstBannerProps } = servicesBanners;
const { second: thirdDesignInfoWrapperProps } = whatWeDoDesignInfoWrappers;
const Services = () => {
  return (
    <StyledServices>
      <Banner {...firstBannerProps} />
      <DesignInfoWrapper {...firstDesignInfoWrapperProps} />
      <DesignInfoWrapper {...secondDesignInfoWrapperProps} />
      <DesignInfoWrapper {...thirdDesignInfoWrapperProps} />
      {/* <Feedbacks {...feedbacksProps} /> */}
    </StyledServices>
  );
};

export default Services;
