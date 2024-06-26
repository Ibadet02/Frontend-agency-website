import { RuleSet } from "styled-components";
import { DesignInfoProps, ImageCaptionProps } from "../props";

export interface ImageProps {
  src: string;
  alt: string;
  id?: number;
  className: string;
  isCircle: boolean;
  imageCaptionProps?: ImageCaptionProps;
  styles?: RuleSet<object>;
}

export interface ImageDemonstratorProps {
  imagesProps: ImageProps[];
  flexBasis?: "50%" | "auto";
  styles?: RuleSet<object>;
}

export interface BannerProps {
  imageDemonstratorProps?: ImageDemonstratorProps;
  designInfoProps: DesignInfoProps;
  flexDirection?: string;
  styles?: RuleSet<object>;
}
