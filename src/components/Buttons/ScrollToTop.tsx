import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { StyledScrollToTop } from "../../styles/components/Buttons/ScrollToTop.styled";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      // Show the button if the user has scrolled down
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <StyledScrollToTop>
      {isVisible && (
        <button className="scroll-up-button" onClick={scrollToTop}>
            <FontAwesomeIcon icon={faArrowUp} />
        </button>
      )}
    </StyledScrollToTop>
  );
};

export default ScrollToTop;
