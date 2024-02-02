import { StyledNavbarContent } from "../../styles/components/Navbar/NavbarContent.styled";
import { Link, NavLink } from "react-router-dom";
import ContentHeading from "../ContentHeading";
import { css } from "styled-components";
import ActionLink from "../ActionLink";
const contentHeadingStyles = css`
  font-size: 1.5rem;
  width: auto;
`;
const NavbarContent = () => {
  return (
    <StyledNavbarContent>
      <ContentHeading tagName={Link} to="/" styles={contentHeadingStyles}>
        HexLab
      </ContentHeading>
      <div className="nav-links">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/what-we-do"}>What we do?</NavLink>
        <NavLink to={"/our-services"}>Our services</NavLink>
        <NavLink to={"/our-projects"}>Our projects</NavLink>
        <NavLink to={"/pricing"}>Pricing</NavLink>
        <NavLink to={"/blog"}>Blog</NavLink>
      </div>
      <ActionLink title="Let's talk" path='/' />
    </StyledNavbarContent>
  );
};

export default NavbarContent;
