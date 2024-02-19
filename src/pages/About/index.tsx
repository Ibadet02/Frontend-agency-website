import DesignInfoWrapper from "../../components/DesignInfoWrapper";
import { StyledAbout } from "../../styles/About/index.styled";
import { aboutDesignInfoWrappers } from "../../data/About";
import { StyledInformation } from "../../styles/About/Information.styled";
import MainDescription from "../../components/MainDescription";
import { StyledInformationContent } from "../../styles/About/InformationContent.styled";
import robert from "../../assets/images/backend-dev.jpg";
const { first: firstDesignInfoWrapperProps } = aboutDesignInfoWrappers;

const About = () => {
  return (
    <StyledAbout>
      <DesignInfoWrapper {...firstDesignInfoWrapperProps} />
      <StyledInformation>
        <StyledInformationContent>
          <div className="info-frame">
            {/* <Image {...firstImageProps} /> */}
            <img src={robert} alt="" className="aboutUs-image" />
            <MainDescription text="lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum." />
          </div>
          <div className="info-frame">
            {/* <Image {...secondImageProps} /> */}
            <img src={robert} alt="" className="aboutUs-image" />
            <MainDescription text="lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum." />
          </div>
        </StyledInformationContent>
      </StyledInformation>
    </StyledAbout>
  );
};

export default About;
