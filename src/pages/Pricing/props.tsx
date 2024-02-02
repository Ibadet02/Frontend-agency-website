import {
  ActionLinkProps,
  ContentHeadingProps,
  HeadingProps,
  MainDescriptionProps,
  SmallHeadingProps,
} from "../../components/props";
export interface TaskProps {
  icon: React.ReactNode;
  contentHeadingProps: ContentHeadingProps;
  id: number;
}
export interface TaskGroupProps {
  tasksProps: TaskProps[];
}

export interface AccordionProps {
  heading: string;
  description: string;
  isAccordionActive?: (index: number) => string;
  accordionIndex?: number;
  handleAccordionState?: (
    e: React.MouseEvent<HTMLElement>,
    index: number
  ) => void;
  id: number;
}
export interface FAQProps {
  accordionsProps: AccordionProps[];
}
export interface PriceProps {
  smallHeadingProps: SmallHeadingProps;
  price: HeadingProps;
  duration: MainDescriptionProps;
  descriptionProps: MainDescriptionProps;
  taskGroupProps: TaskGroupProps;
  actionLinkProps: ActionLinkProps;
  id: number;
}
export interface PriceGroupContentProps {
  pricesProps: PriceProps[];
}

export type PriceGroupProps = PriceGroupContentProps;
