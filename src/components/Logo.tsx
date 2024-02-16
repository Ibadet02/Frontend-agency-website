import { StyledLogo } from "../styles/components/Logo.styled";
import lightModeLogo from "../assets/images/light_mode_logo.png";
import darkModeLogo from "../assets/images/dark_mode_logo.png";
import { useTheme } from "../context/ThemeContext";

const Logo = () => {
  const { theme } = useTheme();
  return (
    <StyledLogo
      src={theme.isDarkMode ? darkModeLogo : lightModeLogo}
      alt="Logo"
    />
  );
};

export default Logo;
