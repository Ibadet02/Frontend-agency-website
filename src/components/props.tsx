import { LinkProps } from "react-router-dom";
import { RuleSet } from "styled-components";

export interface ContentHeadingProps {
  tagName: keyof JSX.IntrinsicElements | React.ComponentType<LinkProps>;
  to?: string;
  children: React.ReactNode;
  styles?: RuleSet<object>;
}

export interface ActionLinkProps {
  title: string;
  path?: string;
  icon?: React.ReactNode;
  styles?: RuleSet<object>;
}

export interface MainDescriptionProps {
  text: string;
  styles?: RuleSet<object>;
}

export interface SmallHeadingProps {
  text: string;
}

export interface NumberedOrderProps {
  numberContent: string;
  styles?: RuleSet<object>;
}

export interface DesignInfoProps {
  img?: {
    src: string;
    alt: string;
  };
  flexBasis?: "50%" | "auto";
  numberedOrderProps?: NumberedOrderProps;
  smallHeadingProps?: SmallHeadingProps;
  contentHeadingProps: ContentHeadingProps;
  descriptionProps?: MainDescriptionProps;
  actionLinkProps?: ActionLinkProps;
  doesInputExist?: boolean;
  styles?: RuleSet<object>;
  id?: number;
}
export interface DesignInfoWrapperProps {
  designInfoGroupProps?: DesignInfoGroupProps;
  designInfoProps?: DesignInfoProps;
  flexDirection: string;
  styles?: RuleSet<object>;
}
export interface DesignInfoGroupProps {
  designInfosProps: DesignInfoProps[];
  flexBasis: "50%" | "auto";
  styles?: RuleSet<object>;
}
export interface HeadingProps {
  text: string;
  styles?: RuleSet<object>;
}
export interface InfoImageProps {
  img: {
    src: string;
    alt: string;
  };
  id: number;
  smallHeadingProps?: SmallHeadingProps;
  headingProps?: HeadingProps;
  descriptionProps?: MainDescriptionProps;
  styles?: RuleSet<object>;
}
export interface InfoImageGroupProps {
  infoImagesProps: InfoImageProps[];
  styles?: RuleSet<object>;
}

export interface ImageCaptionProps {
  headingProps: HeadingProps;
  descriptionProps: MainDescriptionProps;
  styles?: RuleSet<object>;
}

export interface RatingProps {
  rating?: number;
  styles?: RuleSet<object>;
}

export interface FeedbacksControllerProps {
  img: {
    src: string;
    alt: string;
  };
  smallHeadingProps: SmallHeadingProps;
  contentHeadingProps: ContentHeadingProps;
  styles?: RuleSet<object>;
}

export interface FeedbackProps {
  numberedOrderProps: NumberedOrderProps;
  description1Props: MainDescriptionProps;
  img: {
    src: string;
    alt: string;
  };
  headingProps: HeadingProps;
  description2Props: MainDescriptionProps;
  ratingProps: RatingProps;
  id?: number;
  styles?: RuleSet<object>;
}

export interface FeedbackGroupProps {
  feedbacksProps: FeedbackProps[];
  styles?: RuleSet<object>;
}

export interface FeedbacksProps {
  feedbacksControllerProps: FeedbacksControllerProps;
  feedbackGroupProps: FeedbackGroupProps;
  styles?: RuleSet<object>;
}

export interface MainButtonProps {
  text: string;
  styles?: RuleSet<object>;
}

export interface MessageProps {
  text: string;
  isVisible: boolean;
}
