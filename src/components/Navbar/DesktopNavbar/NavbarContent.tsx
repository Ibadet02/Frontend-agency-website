import { StyledNavbarContent } from "../../../styles/components/Navbar/DesktopNavbar/NavbarContent.styled";
import { NavLink } from "react-router-dom";
import Logo from "../../Logo";
import LetsTalkButton from "../../Buttons/LetsTalkButton";
const NavbarContent = () => {
  return (
    <StyledNavbarContent>
      <NavLink to={"/"}>
        <Logo />
      </NavLink>
      <div className="nav-links">
        {/* <NavLink to={"/what-we-do"}>What we do?</NavLink> */}
        <NavLink to={"/about-us"}>ABOUT US</NavLink>
        <NavLink to={"/services"}>SERVICES</NavLink>
        <NavLink to={"/our-projects"}>PORTFOLIO</NavLink>
        <NavLink to={"/"}>HOME</NavLink>
        <NavLink to={"/testimonials"}>TESTIMONIALS</NavLink>
        <NavLink to={"/pricing"}>PRICING</NavLink>
        <NavLink to={"/blog"}>BLOG</NavLink>
      </div>
      <LetsTalkButton title="Let's talk" path="/hire-us" />
    </StyledNavbarContent>
  );
};

export default NavbarContent;
