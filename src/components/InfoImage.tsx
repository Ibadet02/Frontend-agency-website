import React from "react";
import { InfoImageProps } from "./props";
import { StyledInfoImage } from "../styles/components/InfoImage.styled";
import SmallHeading from "./SmallHeading";
import MainDescription from "./MainDescription";
import Heading from "./Heading";
import Reveal from "./Animation/Reveal";

const InfoImage: React.FC<InfoImageProps> = ({
  img,
  smallHeadingProps,
  headingProps,
  descriptionProps,
  styles,
}) => {
  return (
    <Reveal>
      <StyledInfoImage className="infoImage" $styles={styles}>
        {img && <img src={img.src} alt={img.alt} />}
        {smallHeadingProps && <SmallHeading {...smallHeadingProps} />}
        {}
        {headingProps && <Heading {...headingProps} />}
        {descriptionProps && <MainDescription {...descriptionProps} />}
      </StyledInfoImage>
    </Reveal>
  );
};

export default InfoImage;
