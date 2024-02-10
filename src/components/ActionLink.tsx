import React from "react";
import { StyledActionLink } from "../styles/components/ActionLink.styled";
import { ActionLinkProps } from "./props";
import Reveal from "./Animation/Reveal";

const ActionLink: React.FC<ActionLinkProps> = ({
  title,
  path,
  icon,
  styles,
}) => {
  return (
    <Reveal>
      <StyledActionLink to={path!} $styles={styles}>
        <span className="title">{title}</span>
        {icon && <span className="icon">{icon}</span>}
      </StyledActionLink>
    </Reveal>
  );
};

export default ActionLink;
