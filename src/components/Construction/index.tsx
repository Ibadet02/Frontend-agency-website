import { StyledConstruction } from "../../styles/components/Construction/index.styled";
import ConstructionSVG from "../../assets/icons/ConstructionSVG";
import ContentHeading from "../ContentHeading";
import { css } from "styled-components";
import NewsLetterForm from "../NewsLetterForm";
import SmallHeading from "../SmallHeading";
import Reveal from "../Animation/Reveal";
import { ConstructionProps } from "./props";

const Construction: React.FC<ConstructionProps> = ({ text }) => {
  return (
    <StyledConstruction className="construction">
      <div className="construction-svg-wrapper">
        <Reveal>
          <ConstructionSVG />
        </Reveal>
      </div>
      <div className="info">
        <SmallHeading text="This page is under construction" />
        <ContentHeading
          tagName={"h2"}
          styles={css`
            text-align: center;
            font-size: 1.8rem;
          `}
        >
          {text}
        </ContentHeading>
        <NewsLetterForm />
      </div>
    </StyledConstruction>
  );
};

export default Construction;
