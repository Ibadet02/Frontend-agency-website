import { StyledMobileNavbar } from "../../../styles/components/Navbar/MobileNavbar/index.styled";
import BottomBar from "./BottomBar";
import TopBar from "./TopBar";
import { MobileNavbarProps } from "./props";

const MobileNavbar: React.FC<MobileNavbarProps> = ({
  isBottomBarOpen,
  setIsBottomBarOpen,
}) => {
  return (
    <StyledMobileNavbar>
      <TopBar
        isBottomBarOpen={isBottomBarOpen}
        setIsBottomBarOpen={setIsBottomBarOpen}
      />
      <BottomBar
        setIsBottomBarOpen={setIsBottomBarOpen}
        isBottomBarOpen={isBottomBarOpen}
      />
    </StyledMobileNavbar>
  );
};

export default MobileNavbar;
