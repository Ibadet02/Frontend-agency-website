import React, { useRef } from "react";
import { StyledBottomBar } from "../../../styles/components/Navbar/MobileNavbar/BottomBar.styled";
import { NavLink } from "react-router-dom";
import { BottomBarProps } from "./props";
import { CSSTransition } from "react-transition-group";
const BottomBar: React.FC<BottomBarProps> = ({
  isBottomBarOpen
}) => {
  const nodeRef = useRef(null);
  return (
    <CSSTransition
      in={isBottomBarOpen}
      timeout={100}
      classNames="bottom-bar"
      nodeRef={nodeRef}
    >
      <StyledBottomBar ref={nodeRef}>
        <div className="nav-links">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/what-we-do"}>What we do?</NavLink>
          <NavLink to={"/our-services"}>Our services</NavLink>
          <NavLink to={"/our-projects"}>Our projects</NavLink>
          <NavLink to={"/pricing"}>Pricing</NavLink>
          <NavLink to={"/blog"}>Blog</NavLink>
        </div>
      </StyledBottomBar>
    </CSSTransition>
  );
};

export default BottomBar;
