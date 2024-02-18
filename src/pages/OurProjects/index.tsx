import { StyledOurProjects } from "../../styles/OurProjects/index.styled";
// import DesignInfoWrapper from "../../components/DesignInfoWrapper";
// import {
//   ourProjectsDesignInfoWrappers,
//   ourProjectsBanners,
//   ourProjectsPortfolio,
// } from "../../data/OurProjects";
// import { DesignInfoWrapperProps } from "../../components/props";
// import Banner from "../../components/Banner";
// import Portfolio from "../Home/Portfolio";
import Construction from "../../components/Construction";

// const {
//   first: firstDesignInfoWrapperProps,
//   second: secondDesignInfoWrapperProps,
// } = ourProjectsDesignInfoWrappers;
// const { first: firstBannerProps } = ourProjectsBanners;
// const { first: firstPortfolioProps, second: secondPortfolioProps } =
//   ourProjectsPortfolio;
const OurProjects = () => {
  return (
    <StyledOurProjects>
      {/* <DesignInfoWrapper
        {...(firstDesignInfoWrapperProps as DesignInfoWrapperProps)}
      />
      <Banner {...firstBannerProps} />
      <DesignInfoWrapper {...secondDesignInfoWrapperProps} />
      <Portfolio {...firstPortfolioProps} />
      <Portfolio {...secondPortfolioProps} /> */}
      <Construction text="Caution! This page is under construction. We're adding more zeros to our code to make it 1000% better. It's a math thing, you wouldn't understand" />
    </StyledOurProjects>
  );
};

export default OurProjects;
