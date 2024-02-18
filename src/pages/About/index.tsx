import DesignInfoWrapper from "../../components/DesignInfoWrapper";
import { StyledAbout } from "../../styles/About/index.styled";
import { aboutDesignInfoWrappers, aboutImagesProps } from "../../data/About";
import { StyledInformation } from "../../styles/About/Information.styled";
import MainDescription from "../../components/MainDescription";
import Image from "../../components/Banner/Image";
import { StyledInformationContent } from "../../styles/About/InformationContent.styled";

const { first: firstDesignInfoWrapperProps } = aboutDesignInfoWrappers;

const { first: firstImageProps, second: secondImageProps } = aboutImagesProps;

const About = () => {
  return (
    <StyledAbout>
      <DesignInfoWrapper {...firstDesignInfoWrapperProps} />
      <StyledInformation>
        <StyledInformationContent>
          <div className="info-frame">
            <Image {...firstImageProps} />
            <MainDescription text="lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum." />
          </div>
          <div className="info-frame">
            <Image {...secondImageProps} />
            <MainDescription text="lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum." />
          </div>
        </StyledInformationContent>
      </StyledInformation>
    </StyledAbout>
  );
};

export default About;
