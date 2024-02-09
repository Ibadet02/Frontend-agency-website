import { useEffect, useState } from "react";
import useMediaQuery from "../../hooks/useMediaQuery";
import { StyledNavbar } from "../../styles/components/Navbar/index.styled";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
  const isMobile = useMediaQuery(825);
  const [isNavbarVisible, setIsNavbarVisible] = useState<boolean>(true);
  const [isBottomBarOpen, setIsBottomBarOpen] = useState<boolean>(false);
  const renderNavbar = () => {
    if (isMobile) {
      return (
        <MobileNavbar
          isBottomBarOpen={isBottomBarOpen}
          setIsBottomBarOpen={setIsBottomBarOpen}
        />
      );
    }
    return <DesktopNavbar />;
  };
  useEffect(() => {
    setIsBottomBarOpen(() => {
      if (!isMobile && isBottomBarOpen) {
        return false;
      }
      return isBottomBarOpen;
    });
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (lastScrollY < currentScrollY) {
        setIsNavbarVisible(false);
      } else {
        setIsNavbarVisible(true);
      }
      lastScrollY = currentScrollY;
    };
    if (!isBottomBarOpen) {
      window.addEventListener("scroll", handleScroll);
    }
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isBottomBarOpen, isMobile]);
  return (
    <StyledNavbar className={`${isNavbarVisible ? "visible" : "hidden"}`}>
      {renderNavbar()}
    </StyledNavbar>
  );
};

export default Navbar;
