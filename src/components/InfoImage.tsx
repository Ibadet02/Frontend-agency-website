import React from "react";
import { InfoImageProps } from "./props";
import { StyledInfoImage } from "../styles/components/InfoImage.styled";
import SmallHeading from "./SmallHeading";
import MainDescription from "./MainDescription";
import Heading from "./Heading";

const InfoImage: React.FC<InfoImageProps> = ({
  img,
  smallHeadingProps,
  headingProps,
  descriptionProps,
  styles,
}) => {
  return (
    <StyledInfoImage $styles={styles}>
      {img && <img src={img.src} alt={img.alt} />}
      {smallHeadingProps && <SmallHeading {...smallHeadingProps} />}
      {}
      {headingProps && <Heading {...headingProps} />}
      {descriptionProps && <MainDescription {...descriptionProps} />}
    </StyledInfoImage>
  );
};

export default InfoImage;
