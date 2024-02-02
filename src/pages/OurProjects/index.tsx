import { StyledOurProjects } from "../../styles/OurProjects/index.styled";
import DesignInfoWrapper from "../../components/DesignInfoWrapper";
import {
  ourProjectsDesignInfoWrappers,
  ourProjectsBanners,
  ourProjectsPortfolio,
} from "../../data/OurProjects";
import { DesignInfoWrapperProps } from "../../components/props";
import Banner from "../../components/Banner";
import Portfolio from "../Home/Portfolio";

const {
  first: firstDesignInfoWrapperProps,
  second: secondDesignInfoWrapperProps,
} = ourProjectsDesignInfoWrappers;
const { first: firstBannerProps } = ourProjectsBanners;
const { first: firstPortfolioProps, second: secondPortfolioProps } =
  ourProjectsPortfolio;
const OurProjects = () => {
  return (
    <StyledOurProjects>
      <DesignInfoWrapper
        {...(firstDesignInfoWrapperProps as DesignInfoWrapperProps)}
      />
      <Banner {...firstBannerProps} />
      <DesignInfoWrapper {...secondDesignInfoWrapperProps} />
      <Portfolio {...firstPortfolioProps} />
      <Portfolio {...secondPortfolioProps} />
    </StyledOurProjects>
  );
};

export default OurProjects;
