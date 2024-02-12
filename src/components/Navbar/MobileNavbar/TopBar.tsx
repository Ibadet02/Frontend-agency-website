import { NavLink } from "react-router-dom";
import { StyledTopBar } from "../../../styles/components/Navbar/MobileNavbar/TopBar.styled";
// import ActionLink from "../../ActionLink";
import { TopBarProps } from "./props";
import Logo from "../../Logo";
import LetsTalkButton from "../../Buttons/LetsTalkButton";
const TopBar: React.FC<TopBarProps> = ({
  setIsBottomBarOpen,
  isBottomBarOpen,
}) => {
  return (
    <StyledTopBar>
      <div className="top-bar__left">
        <NavLink to={"/"} onClick={() => setIsBottomBarOpen(false)}>
          <Logo />
        </NavLink>
      </div>
      <div className="top-bar__right">
        <LetsTalkButton title="Let's talk" path="/hire-us" />
        <div
          className={`menu-bars ${isBottomBarOpen && "active"}`}
          onClick={() => setIsBottomBarOpen((prev) => !prev)}
        >
          <div className="menu-bar bar-1"></div>
          <div className="menu-bar bar-2"></div>
          <div className="menu-bar bar-3"></div>
        </div>
      </div>
    </StyledTopBar>
  );
};

export default TopBar;
