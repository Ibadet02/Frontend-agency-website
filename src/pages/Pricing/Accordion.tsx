import React from "react";
import { StyledAccordion } from "../../styles/Pricing/Accordion.styled";
import { AccordionProps } from "./props";
import { StyledHeading } from "../../styles/components/Heading.styled";
import { StyledMainDescription } from "../../styles/components/MainDescription.styled";
import { StyledAnswer } from "../../styles/Pricing/Answer.styled";
import { StyledQuestion } from "./Question.styled";

const Accordion: React.FC<AccordionProps> = ({
  heading,
  description,
  isAccordionActive,
  accordionIndex,
  handleAccordionState,
}) => {
  return (
    <StyledAccordion>
      <StyledQuestion
        className={`${isAccordionActive!(accordionIndex!)}`}
        onClick={(e) => handleAccordionState!(e, accordionIndex!)}
      >
        {heading}
      </StyledQuestion>
      <StyledAnswer className={`${isAccordionActive!(accordionIndex!)}`}>
        {description}
      </StyledAnswer>
    </StyledAccordion>
  );
};

export default Accordion;
