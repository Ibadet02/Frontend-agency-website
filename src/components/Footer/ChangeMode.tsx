import { useTheme } from "../../context/ThemeContext";
import { StyledChangeMode } from "../../styles/components/Footer/ChangeMode.styled";

const ChangeMode = () => {
  const { theme, updateTheme } = useTheme();
  const handleModeChange = () => {
    updateTheme((prevTheme) => ({
      ...prevTheme,
      isDarkMode: !prevTheme.isDarkMode,
    }));
  };

  return (
    <StyledChangeMode
      onClick={handleModeChange}
      className={`${theme.isDarkMode ? "dark" : "light"}`}
    >
      <div className="container">
        <div className="circle"></div>
      </div>
    </StyledChangeMode>
  );
};

export default ChangeMode;
