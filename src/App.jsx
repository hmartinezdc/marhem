import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { flushSync } from "react-dom";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import ScrollToTopButton from "./components/ScrollToTopButton/ScrollToTopButton";
import Footer from "./components/Footer/Footer";
import NavBarBottom from "./components/NavBar/NavBarBottom";
import "./App.css";

function App() {
  const navigate = useNavigate();
  const setClassName = ({ isActive }) =>
    isActive ? "navbar__link navbar__link--active" : "navbar__link";
    console.log();

  const handleTransition = (e) => {
    const toValue = e.target.getAttribute("href");

    if (!document.startViewTransition) {
      navigate(toValue);
      return;
    }
    document.startViewTransition(() => flushSync(() => navigate(toValue)));
  };

  return (
    <>
      <NavBar />
      <Home />
      <nav className="navbar" id="navbar">
        <ul className="navbar__list">
          <li>
            <NavLink
              className={setClassName}
              to="/"
              onClick={handleTransition}
            >
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink
              className={setClassName}
              to="/about"
              onClick={handleTransition}
            >
              Sobre mi
            </NavLink>
          </li>
          <li>
            <NavLink
              className={setClassName}
              to="/portfolio"
              onClick={handleTransition}
            >
              Proyectos
            </NavLink>
          </li>
          <li>
            <NavLink
              className={setClassName}
              to="/contact"
              onClick={handleTransition}
            >
              Contactar
            </NavLink>
          </li>
        </ul>
      </nav>
      <main className="main">
        <Outlet />
      </main>
      <ScrollToTopButton />
      <NavBarBottom />
      <Footer />
    </>
  );
}

export default App;
