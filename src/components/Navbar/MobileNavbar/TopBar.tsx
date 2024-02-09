import { Link } from "react-router-dom";
import { StyledTopBar } from "../../../styles/components/Navbar/MobileNavbar/TopBar.styled";
import ContentHeading from "../../ContentHeading";
import { css } from "styled-components";
import ActionLink from "../../ActionLink";
import { TopBarProps } from "./props";
const contentHeadingStyles = css`
  font-size: 1.5rem;
  width: auto;
`;
const TopBar: React.FC<TopBarProps> = ({
  setIsBottomBarOpen,
  isBottomBarOpen,
}) => {
  return (
    <StyledTopBar>
      <div className="top-bar__left">
        <ContentHeading tagName={Link} to="/" styles={contentHeadingStyles}>
          HexLab
        </ContentHeading>
      </div>
      <div className="top-bar__right">
        <ActionLink title="Let's talk" path="/hire-us" />
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
