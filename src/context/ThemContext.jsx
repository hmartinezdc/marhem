import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
  const [isActiveDarkMode, setIsActiveDarkMode] = useState(false);

  return (
    <ThemeContext.Provider value={{ isActiveDarkMode, setIsActiveDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
