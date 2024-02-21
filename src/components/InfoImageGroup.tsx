import React from "react";
import { InfoImageGroupProps } from "./props";
import { StyledInfoImageGroup } from "../styles/components/InfoImageGroup.styled";
import InfoImage from "./InfoImage";

const InfoImageGroup: React.FC<InfoImageGroupProps> = ({styles, infoImagesProps}) => {
  return (
    <StyledInfoImageGroup className="indoImageGroup" $styles={styles}>
      {infoImagesProps.map((infoImageProps) => {
        return <InfoImage key={infoImageProps.id} {...infoImageProps} />;
      })}
    </StyledInfoImageGroup>
  );
};

export default InfoImageGroup;
