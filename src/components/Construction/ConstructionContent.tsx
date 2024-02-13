import { StyledConstructionContent } from "../../styles/components/Construction/ConstructionContent.styled";
import ConstructionSVG from "../../assets/icons/ConstructionSVG";
import ContentHeading from "../ContentHeading";
import { css } from "styled-components";
import NewsLetterForm from "../NewsLetterForm";
import SmallHeading from "../SmallHeading";
import Reveal from "../Animation/Reveal";

const ConstructionContent = () => {
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
          Caution! Website under construction. We're adding more zeros to our
          code to make it 1000% better. It's a math thing, you wouldn't
          understand
        </ContentHeading>
        <NewsLetterForm />
      </div>
    </StyledConstructionContent>
  );
};

export default ConstructionContent;
