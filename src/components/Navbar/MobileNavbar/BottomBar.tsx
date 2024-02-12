import React, { useRef } from "react";
import { StyledBottomBar } from "../../../styles/components/Navbar/MobileNavbar/BottomBar.styled";
import { NavLink } from "react-router-dom";
import { BottomBarProps } from "./props";
import { CSSTransition } from "react-transition-group";

const BottomBar: React.FC<BottomBarProps> = ({
  isBottomBarOpen,
  setIsBottomBarOpen,
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
          <NavLink to={"/"} onClick={() => setIsBottomBarOpen(false)}>
            Home
          </NavLink>
          <NavLink to={"/what-we-do"} onClick={() => setIsBottomBarOpen(false)}>
            What we do?
          </NavLink>
          <NavLink
            to={"/services"}
            onClick={() => setIsBottomBarOpen(false)}
          >
            Services
          </NavLink>
          <NavLink
            to={"/our-projects"}
            onClick={() => setIsBottomBarOpen(false)}
          >
            Portfolio
          </NavLink>
          <NavLink to={"/pricing"} onClick={() => setIsBottomBarOpen(false)}>
            Pricing
          </NavLink>
          <NavLink to={"/blog"} onClick={() => setIsBottomBarOpen(false)}>
            Blog
          </NavLink>
        </div>
      </StyledBottomBar>
    </CSSTransition>
  );
};

export default BottomBar;
