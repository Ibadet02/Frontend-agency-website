import { aboutDesignInfoProps } from "../../data/About";
import { StyledInformation } from "../../styles/pages/About/Information.styled";
import MainDescription from "../../components/MainDescription";
import { StyledInformationContent } from "../../styles/pages/About/InformationContent.styled";
import robert from "../../assets/images/backend-dev.jpg";
import ibadet from "../../assets/images/ibadet.jpg";
import { StyledPage } from "../../styles/pages/index.styled";
import { StyledSection } from "../../styles/pages/Section.styled";
import DesignInfo from "../../components/DesignInfo";
import Reveal from "../../components/Animation/Reveal";
const { first: firstDesignInfoProps } = aboutDesignInfoProps;

const About = () => {
  return (
    <StyledPage>
      <StyledSection>
        <DesignInfo {...firstDesignInfoProps} />
      </StyledSection>
      <StyledInformation>
        <StyledInformationContent>
          <div className="info-frame">
            {/* <Image {...firstImageProps} /> */}
            <Reveal>
              <img src={robert} alt="" className="aboutUs-image" />
            </Reveal>
            <Reveal withSlide>
              <h2 className="name">Robert Zet</h2>
            </Reveal>
            <MainDescription text="lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum." />
          </div>
          <div className="info-frame">
            {/* <Image {...secondImageProps} /> */}
            <Reveal>
              <img src={ibadet} alt="" className="aboutUs-image" />
            </Reveal>
            <Reveal withSlide>
              <h2 className="name">Ibadet Ismayilov</h2>
            </Reveal>
            <MainDescription text="lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum." />
          </div>
        </StyledInformationContent>
      </StyledInformation>
    </StyledPage>
  );
};

export default About;
