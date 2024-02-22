// import DesignInfoWrapper from "../../components/DesignInfoWrapper";
// import {
//   ourProjectsDesignInfoWrappers,
//   ourProjectsBanners,
//   ourProjectsPortfolio,
// } from "../../data/OurProjects";
// import { DesignInfoWrapperProps } from "../../components/props";
// import Banner from "../../components/Banner";
// import Portfolio from "../Home/Portfolio";
import Construction from "../../components/Construction/index";
import { StyledSection } from "../../styles/pages/Section.styled";
import { StyledPage } from "../../styles/pages/index.styled";

// const {
//   first: firstDesignInfoWrapperProps,
//   second: secondDesignInfoWrapperProps,
// } = ourProjectsDesignInfoWrappers;
// const { first: firstBannerProps } = ourProjectsBanners;
// const { first: firstPortfolioProps, second: secondPortfolioProps } =
//   ourProjectsPortfolio;
const OurProjects = () => {
  return (
    <StyledPage>
      {/* <DesignInfoWrapper
        {...(firstDesignInfoWrapperProps as DesignInfoWrapperProps)}
      />
      <Banner {...firstBannerProps} />
      <DesignInfoWrapper {...secondDesignInfoWrapperProps} />
      <Portfolio {...firstPortfolioProps} />
      <Portfolio {...secondPortfolioProps} /> */}
      <StyledSection>
        <Construction text="Caution! This page is under construction. We're adding more zeros to our code to make it 1000% better. It's a math thing" />
      </StyledSection>
    </StyledPage>
  );
};

export default OurProjects;
