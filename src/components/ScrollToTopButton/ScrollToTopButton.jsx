import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import "./ScrollToTopButton.css";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const scrollThreshold = 400; // Cantidad de píxeles para mostrar el botón

    if (scrollPosition > scrollThreshold) setIsVisible(true);
    else setIsVisible(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsVisible(false);
  }, [location]);

  return (
    <button
      className={isVisible ? 'scroll__button show' : 'scroll__button'}
      onClick={scrollToTop}
      // style={{ display: isVisible ? "block" : "none" }}
    >
      <i className="fa-solid fa-rocket"></i>
      {/* <i className="fa-solid fa-chevron-up"></i> */}
    </button>
  );
};

export default ScrollToTopButton;
