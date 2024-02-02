import React from "react";
import { StyledImageCaption } from "../styles/components/ImageCaption.styled";
import { ImageCaptionProps } from "./props";
import Heading from "./Heading";
import MainDescription from "./MainDescription";

const ImageCaption: React.FC<ImageCaptionProps> = ({
  headingProps,
  descriptionProps,
  styles,
}) => {
  return (
    <StyledImageCaption $styles={styles}>
      <div className="caption-text">
        <Heading {...headingProps} />
        <MainDescription {...descriptionProps} />
      </div>
    </StyledImageCaption>
  );
};

export default ImageCaption;
