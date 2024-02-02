
import { StyledFAQContent } from "../../styles/Pricing/FAQContent.styled";
import Accordion from "./Accordion";
import { accordions } from "../../data/accordions";
const FAQContent = () => {
  return (
    <StyledFAQContent>
      {accordions.map((accordionProps) => {
        return <Accordion key={accordionProps.id} {...accordionProps} />;
      })}
    </StyledFAQContent>
  );
};

export default FAQContent;
