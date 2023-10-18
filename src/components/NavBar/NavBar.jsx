// import { useNavigate } from "react-router-dom";
import logo from "../../assets/icons/logo03.svg";
import DarkMode from "../DarkMode/DarkMode";
import "./NavBar.css";

const NavBar = () => {
  // const navigate = useNavigate()
  const afterNav = 90;

  const toHome = (e) => {
    e.preventDefault();
    globalThis.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  const toAbout = (event) => {
    event.preventDefault();

    const targetId = event.target.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    const displace = targetElement.offsetTop - afterNav; // Ajusta el desplazamiento adicional aquí

    globalThis.scrollTo({
      top: displace,
      behavior: 'smooth'
    });
  }
  const toPortfolio  = (event) => {
    event.preventDefault();

    const targetId = event.target.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    const displace = targetElement.offsetTop - afterNav; // Ajusta el desplazamiento adicional aquí

    globalThis.scrollTo({
      top: displace,
      behavior: 'smooth'
    });
  }

  const toGettingTouch = (e) => {
    e.preventDefault();
    const targetId = e.target.getAttribute('href').substring(1);
    const navbarElement = document.getElementById(targetId);
    if (navbarElement) {
      const displace = navbarElement.offsetTop - afterNav;
      globalThis.scrollTo({
        top: displace,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="nav">
      <a className="nav__logo" href="/">
        <img src={logo} alt="logo" />
      </a>
      <ul className="nav__list">
        <li>
          <a onClick={toHome} href="#root">Inicio</a>
        </li>
        <li>
          <a onClick={toAbout} href="#about">Sobre mí</a>
        </li>
        <li>
          <a onClick={toPortfolio} href="#portfolio">Proyectos</a>
        </li>
        <li className="nav__list-link--box">
          <a onClick={toGettingTouch}  href="#contact">Contactar</a>
        </li>
        <li>
          <DarkMode />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
