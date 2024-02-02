import React from "react";
import { StyledAccordion } from "../../styles/Pricing/Accordion.styled";
import { AccordionProps } from "./props";
import { StyledHeading } from "../../styles/components/Heading.styled";
import { StyledMainDescription } from "../../styles/components/MainDescription.styled";

const Accordion: React.FC<AccordionProps> = ({ heading, description }) => {
  return (
    <StyledAccordion>
      <StyledHeading>{heading}</StyledHeading>
      <StyledMainDescription>{description}</StyledMainDescription>
    </StyledAccordion>
  );
};

export default Accordion;
