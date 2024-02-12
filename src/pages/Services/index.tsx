import { StyledServices } from "../../styles/Services/index.styled";
import { servicesBanners } from "../../data/Services";
import Banner from "../../components/Banner";
import DesignInfoWrapper from "../../components/DesignInfoWrapper";
import { servicesDesignInfoWrappers } from "../../data/Services";
import { whatWeDoDesignInfoWrappers } from "../../data/WhatWeDo";
import Feedbacks from "../../components/Feedbacks";
import { feedbacks as feedbacksProps } from "../../data/components/Feedbacks";

const { first: firstDesignInfoWrapperProps } = servicesDesignInfoWrappers;

const { first: firstBannerProps } = servicesBanners;
const { second: secondDesignInfoWrappers } = whatWeDoDesignInfoWrappers;
const Services = () => {
  return (
    <StyledServices>
      <Banner {...firstBannerProps} />
      <DesignInfoWrapper {...firstDesignInfoWrapperProps} />
      <DesignInfoWrapper {...secondDesignInfoWrappers} />
      <Feedbacks {...feedbacksProps} />
    </StyledServices>
  );
};

export default Services;
