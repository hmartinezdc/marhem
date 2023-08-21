import { useEffect, useContext } from "react";

import "./DarkMode.css";
import { ThemeContext } from "../../context/ThemContext";

const DarkMode = () => {
  const {isActiveDarkMode, setIsActiveDarkMode} = useContext(ThemeContext)

  // Función para cambiar el modo y guardar en localStorage
  const handleToggleDarkMode = () => {
    const newMode = !isActiveDarkMode;
    setIsActiveDarkMode(newMode);
    document.body.setAttribute('data-theme', newMode ? 'light' : 'dark');
    localStorage.setItem("darkMode", JSON.stringify(newMode));
  };

  // Efecto para cargar el modo actual al cargar el componente
  useEffect(() => {
    const storedMode = localStorage.getItem("darkMode");
    if (storedMode !== null) {
      const parsedMode = JSON.parse(storedMode);
      setIsActiveDarkMode(parsedMode);
      document.body.setAttribute('data-theme', parsedMode ? 'light' : 'dark');
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <button
      onClick={handleToggleDarkMode}
      className={isActiveDarkMode ? "switch-btn  " : "switch-btn  active"}
    >
      <span><i className='bx bxs-sun'></i></span>
      <span><i className='bx bxs-moon'></i></span>
    </button>
  );
};

export default DarkMode;
