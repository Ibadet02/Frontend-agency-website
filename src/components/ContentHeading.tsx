import React from "react";
import { StyledContentHeading } from "../styles/components/ContentHeading.styled";
import { ContentHeadingProps } from "./props";
import { LinkProps } from "react-router-dom";
import Reveal from "./Animation/Reveal";

const ContentHeading: React.FC<ContentHeadingProps> = ({
  tagName,
  children,
  to,
  styles,
}) => {
  const renderComponent = () => {
    const ContentHeadingContent = (
      <>
        {children}
        <span className="dot">.</span>
      </>
    );
    if (typeof tagName === "string") {
      const IntrinsicTag = tagName as keyof JSX.IntrinsicElements;
      return (
        <IntrinsicTag className="content-heading heading">
          {ContentHeadingContent}
        </IntrinsicTag>
      );
    }
    const ComponentTag = tagName as React.ComponentType<LinkProps>;
    return (
      <ComponentTag className="content-heading link" to={to!}>
        {ContentHeadingContent}
      </ComponentTag>
    );
  };
  return (
    <StyledContentHeading className="contentHeading" $mutualStyles={styles}>
      <Reveal withSlide>{renderComponent()}</Reveal>
    </StyledContentHeading>
  );
};

export default ContentHeading;
