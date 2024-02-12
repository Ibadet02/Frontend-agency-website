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
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/what-we-do"}>What we do?</NavLink>
        <NavLink to={"/services"}>Services</NavLink>
        <NavLink to={"/our-projects"}>Portfolio</NavLink>
        <NavLink to={"/pricing"}>Pricing</NavLink>
        <NavLink to={"/blog"}>Blog</NavLink>
      </div>
      <LetsTalkButton title="Let's talk" path="/hire-us" />
    </StyledNavbarContent>
  );
};

export default NavbarContent;
