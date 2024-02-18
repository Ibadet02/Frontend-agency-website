import { StyledConstructionContent } from "../../styles/components/Construction/ConstructionContent.styled";
import ConstructionSVG from "../../assets/icons/ConstructionSVG";
import ContentHeading from "../ContentHeading";
import { css } from "styled-components";
import NewsLetterForm from "../NewsLetterForm";
import SmallHeading from "../SmallHeading";
import Reveal from "../Animation/Reveal";
import { ConstructionContentProps } from "./props";

const ConstructionContent: React.FC<ConstructionContentProps> = ({ text }) => {
  return (
    <StyledConstructionContent>
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
    </StyledConstructionContent>
  );
};

export default ConstructionContent;
