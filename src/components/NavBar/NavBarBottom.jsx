import { useNavigate, NavLink } from "react-router-dom";
import "./NavBarBottom.css";

const NavBarBottom = () => {
  const navigate = useNavigate();

  const scrollToSection = () => {
    // const targetId = event.currentTarget.getAttribute("href");
    // const targetElement = document.querySelector(targetId);
    const targetElement = document.getElementById("navbar");
    if (targetElement) {
      const offset = 70;
      const { y } = targetElement.getBoundingClientRect();
      const scrollPosition = globalThis.scrollY;

      globalThis.scrollTo({
        top: scrollPosition + y - offset,
        behavior: "smooth",
        block: "start",
      });
    }

    navigate("/portfolio");
  };

  const toHome = () => {
    const navbarElement = document.getElementById("root");
    if (navbarElement) {
      const displace = navbarElement.offsetTop;
      globalThis.scrollTo({
        top: displace,
        behavior: "smooth",
      });
    }
    navigate("/");
  };

  const toGettingTouch = () => {
    const navbarElement = document.getElementById("navbar");
    if (navbarElement) {
      navbarElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    navigate("/contact");
  };

  const getClass = ({ isActive }) => {
    if (isActive) return "navbarBottom__link--active";
    else return "navbarBottom__link";
  };

  return (
    <nav className="navbarBottom">
      <ul className="navbarBottom__list">
        <li>
          <NavLink className={getClass} onClick={toHome} to="/">
            <i className="fa-solid fa-house"></i>
            <p>Inicio</p>
          </NavLink>
        </li>
        <li>
          <NavLink
            className={getClass}
            onClick={scrollToSection}
            to="/portfolio"
          >
            <i className="fa-solid fa-briefcase"></i>
            <p>Proyectos</p>
          </NavLink>
        </li>
        <li>
          <NavLink className={getClass} onClick={toGettingTouch} to="/contact">
            <i className="fa-solid fa-user"></i>
            <p>Contacto</p>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBarBottom;
