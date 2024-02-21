import { servicesBanners } from "../../data/Services";
import Banner from "../../components/Banner/index";
import DesignInfoWrapper from "../../components/DesignInfoWrapper";
import { servicesDesignInfoWrappers } from "../../data/Services";
import { whatWeDoDesignInfoWrappers } from "../../data/WhatWeDo";
import { StyledPage } from "../../styles/pages/index.styled";
import { StyledSection } from "../../styles/pages/Section.styled";

const { first: firstDesignInfoWrapperProps } = servicesDesignInfoWrappers;
const { first: firstBannerProps } = servicesBanners;
const { second: secondDesignInfoWrapperProps } = whatWeDoDesignInfoWrappers;
const Services = () => {
  return (
    <StyledPage>
      <StyledSection>
        <Banner {...firstBannerProps} />
      </StyledSection>
      {/* <StyledSection>
        <StyledContent>
          <DesignInfoGroup {...firstDesignInfoGroupProps} />
        </StyledContent>
      </StyledSection> */}
      <StyledSection>
        <DesignInfoWrapper {...firstDesignInfoWrapperProps} />
      </StyledSection>
      <StyledSection>
        <DesignInfoWrapper {...secondDesignInfoWrapperProps} />
      </StyledSection>
    </StyledPage>
  );
};

export default Services;
