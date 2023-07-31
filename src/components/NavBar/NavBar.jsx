import { useNavigate } from "react-router-dom";
import logo from "../../assets/icons/logo03.svg";
import DarkMode from "../DarkMode/DarkMode";
import "./NavBar.css";

const NavBar = () => {
  const navigate = useNavigate()

  const toHome = (e) => {
    e.preventDefault();
    globalThis.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    navigate("/");
  }

  const scrollToSection = (event) => {
    event.preventDefault();

    const targetId = event.target.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    const displace = targetElement.offsetTop - 70; // Ajusta el desplazamiento adicional aquí

    globalThis.scrollTo({
      top: displace,
      behavior: 'smooth'
    });
  }

  const toGettingTouch = (e) => {
    e.preventDefault();
    const navbarElement = document.getElementById("navbar");
    if (navbarElement) {
      const displace = navbarElement.offsetTop - 70;
      globalThis.scrollTo({
        top: displace,
        behavior: "smooth",
      });
    }
    navigate("/contact");
  };

  return (
    <nav className="nav">
      <a className="nav__logo" href="/">
        <img src={logo} alt="hemcode" />
      </a>
      <ul className="nav__list">
        <li>
          <a onClick={toHome} href="#root">Inicio</a>
        </li>
        <li>
          <a onClick={scrollToSection} href="#navbar">Navegar</a>
        </li>
        <li className="nav__list-link--box">
          <a onClick={toGettingTouch}  href="#navbar">Contactar</a>
        </li>
        <li>
          <DarkMode />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
