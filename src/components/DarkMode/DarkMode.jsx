import { useState, useEffect } from "react";

import "./DarkMode.css";

const DarkMode = () => {

  // const [isActiveDarkMode, setIsActiveDarkMode] = useState(false);
  // const haldleActiveDarkMode = () => {
  //   setIsActiveDarkMode(!isActiveDarkMode);
  //   document.body.classList.toggle("dark-mode");
  // };
  // Estado para almacenar el modo actual
  const [isActiveDarkMode, setIsActiveDarkMode] = useState(false);

  // Función para cambiar el modo y guardar en localStorage
  const handleToggleDarkMode = () => {
    const newMode = !isActiveDarkMode;
    setIsActiveDarkMode(newMode);
    // document.body.classList.toggle("dark-mode", newMode);
    document.body.setAttribute('data-theme', newMode? 'light' : 'dark');
    // Guardar el modo en el localStorage
    localStorage.setItem("darkMode", JSON.stringify(newMode));
  };

  // Efecto para cargar el modo actual al cargar el componente
  useEffect(() => {
    const storedMode = localStorage.getItem("darkMode");
    if (storedMode !== null) {
      const parsedMode = JSON.parse(storedMode);
      setIsActiveDarkMode(parsedMode);
      // document.body.classList.toggle("dark-mode", parsedMode);
      document.body.setAttribute('data-theme', parsedMode? 'light' : 'dark');
    }
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
