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
          <NavLink to={"/about-us"} onClick={() => setIsBottomBarOpen(false)}>
            ABOUT US
          </NavLink>
          <NavLink to={"/services"} onClick={() => setIsBottomBarOpen(false)}>
            SERVICES
          </NavLink>
          <NavLink to={"/portfolio"} onClick={() => setIsBottomBarOpen(false)}>
            PORTFOLIO
          </NavLink>
          <NavLink to={"/"} onClick={() => setIsBottomBarOpen(false)}>
            HOME
          </NavLink>
          <NavLink
            to={"/testimonials"}
            onClick={() => setIsBottomBarOpen(false)}
          >
            TESTIMONIALS
          </NavLink>
          <NavLink to={"/pricing"} onClick={() => setIsBottomBarOpen(false)}>
            PRICING
          </NavLink>
          <NavLink to={"/blog"} onClick={() => setIsBottomBarOpen(false)}>
            BLOG
          </NavLink>
        </div>
      </StyledBottomBar>
    </CSSTransition>
  );
};

export default BottomBar;
