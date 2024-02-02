import React from "react";
import { StyledImage } from "../../styles/components/Banner/Image.styled";
import { ImageProps } from "./props";
import ImageCaption from "../ImageCaption";

const Image: React.FC<ImageProps> = ({
  src,
  alt,
  // id,
  className,
  isCircle,
  imageCaptionProps,
  styles,
}) => {
  const generateFigCaption = () => {
    if (imageCaptionProps) {
      return <ImageCaption {...imageCaptionProps} />;
    }
  };
  return (
    <StyledImage $isCircle={isCircle} $styles={styles}>
      <img title={alt} src={src} alt={alt} className={`image ${className}`} />
      {generateFigCaption()}
    </StyledImage>
  );
};

export default Image;
