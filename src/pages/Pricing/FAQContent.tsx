import { StyledFAQContent } from "../../styles/Pricing/FAQContent.styled";
import Accordion from "./Accordion";
import { accordions } from "../../data/accordions";
import { useState } from "react";
const INITIAL_ACCORDION_STATE: boolean[] = accordions.map(() => false);
const FAQContent = () => {
  const [accordionState, setAccordionState] = useState<boolean[]>(
    INITIAL_ACCORDION_STATE
  );
  const isAccordionActive = (index: number): string => {
    return accordionState[index] ? "active" : "";
  };
  const handleAccordionState = (
    e: React.MouseEvent<HTMLElement>,
    index: number
  ) => {
    const target = e.target as HTMLElement;
    const extendable = target.nextElementSibling;
    if (extendable instanceof HTMLElement) {
      if (accordionState[index]) {
        extendable.style.maxHeight = "0";
      } else {
        extendable.style.maxHeight = extendable.scrollHeight + "px";
      }
      setAccordionState((prev) => {
        return prev.map((state, ind) => {
          if (ind === index) {
            return !state;
          }
          return state;
        });
      });
    }
  };
  return (
    <StyledFAQContent>
      {accordions.map((accordionProps, index) => {
        return (
          <Accordion
            key={accordionProps.id}
            {...accordionProps}
            isAccordionActive={isAccordionActive}
            accordionIndex={index}
            handleAccordionState={handleAccordionState}
          />
        );
      })}
    </StyledFAQContent>
  );
};

export default FAQContent;
