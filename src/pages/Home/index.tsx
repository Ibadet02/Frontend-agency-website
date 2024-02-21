import Banner from "../../components/Banner";
import DesignInfoWrapper from "../../components/DesignInfoWrapper";
import { homeBanners, homeDesignInfoWrappers } from "../../data/Home";
import { StyledSection } from "../../styles/pages/Section.styled";
import { StyledPage } from "../../styles/pages/index.styled";

const {
  first: firstBannerProps,
  second: secondBannerProps,
  third: thirdBannerProps,
} = homeBanners;
const {
  first: firstDesignInfoWrapperProps,
  second: secondDesignInfoWrapperProps,
} = homeDesignInfoWrappers;

const Home = () => {
  return (
    <StyledPage>
      <StyledSection>
        <Banner {...firstBannerProps} />
      </StyledSection>
      <StyledSection>
        <DesignInfoWrapper {...firstDesignInfoWrapperProps} />
      </StyledSection>
      <StyledSection>
        <Banner {...secondBannerProps} />
      </StyledSection>
      <StyledSection>
        <DesignInfoWrapper {...secondDesignInfoWrapperProps} />
      </StyledSection>
      <StyledSection>
        <Banner {...thirdBannerProps} />
      </StyledSection>
    </StyledPage>
  );
};

export default Home;
