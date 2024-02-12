import React from "react";
import { DesignInfoProps } from "./props";
import { StyledDesignInfo } from "../styles/components/DesignInfo.styled";
import SmallHeading from "./SmallHeading";
import ContentHeading from "./ContentHeading";
import MainDescription from "./MainDescription";
import ActionLink from "./ActionLink";
import NumberedOrder from "./NumberedOrder";
import NewsLetterInput from "./NewsLetterInput";
import Reveal from "./Animation/Reveal";
import LetsTalkButton from "./Buttons/LetsTalkButton";

const DesignInfo: React.FC<DesignInfoProps> = ({
  numberedOrderProps,
  img,
  smallHeadingProps,
  contentHeadingProps,
  descriptionProps,
  actionLinkProps,
  doesInputExist,
  styles,
}) => {
  return (
    <StyledDesignInfo $styles={styles}>
      {numberedOrderProps && <NumberedOrder {...numberedOrderProps} />}
      {img && (
        <Reveal>
          <img src={img.src} alt={img.alt} className="design-img" />
        </Reveal>
      )}
      {smallHeadingProps && <SmallHeading {...smallHeadingProps} />}
      <ContentHeading {...contentHeadingProps} />
      {descriptionProps && <MainDescription {...descriptionProps} />}
      {doesInputExist && <NewsLetterInput />}
      {actionLinkProps && <LetsTalkButton {...actionLinkProps} />}
    </StyledDesignInfo>
  );
};

export default DesignInfo;
