import { StyledHome } from "../../styles/Home/index.styled";
import Banner from "../../components/Banner";
import DesignInfoWrapper from "../../components/DesignInfoWrapper";
import {
  homeBanners,
  homeDesignInfoWrappers,
  // portfolio as portfolioProps,
} from "../../data/Home";
// import Portfolio from "./Portfolio";
// import Feedbacks from "../../components/Feedbacks";
// import { feedbacks as feedbacksProps } from "../../data/components/Feedbacks";

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
    <StyledHome>
      <Banner {...firstBannerProps} />
      <DesignInfoWrapper {...firstDesignInfoWrapperProps} />
      <Banner {...secondBannerProps} />
      <DesignInfoWrapper {...secondDesignInfoWrapperProps} />
      {/* <Portfolio {...portfolioProps} /> */}
      <Banner {...thirdBannerProps} />
      {/* <Feedbacks {...feedbacksProps} /> */}
    </StyledHome>
  );
};

export default Home;
