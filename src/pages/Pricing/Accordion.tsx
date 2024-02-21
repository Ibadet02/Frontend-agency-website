import React from "react";
import { StyledAccordion } from "../../styles/pages/Pricing/Accordion.styled";
import { AccordionProps } from "./props";
import { StyledAnswer } from "../../styles/pages/Pricing/Answer.styled";
import { StyledQuestion } from "../../styles/pages/Pricing/Question.styled";

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
