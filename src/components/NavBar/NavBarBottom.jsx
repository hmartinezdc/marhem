import { useEffect, useState } from "react";
import "./NavBarBottom.css";

const NavBarBottom = () => {

  const afterNav = 90;
  const [activeLink, setActiveLink] = useState(null);

  const toHome = () => {
    const element = "root"
    const navbarElement = document.getElementById(element);
    setActiveLink(element)
    if (navbarElement) {
      navbarElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const navigator = (e) => {
    e.preventDefault();
    const anchor = e.currentTarget;
    const targetId = anchor.getAttribute('href').substring(1);
    setActiveLink(targetId)
    
    const navbarElement = document.getElementById(targetId);
    if (navbarElement) {
      const displace = navbarElement.offsetTop - afterNav;
      globalThis.scrollTo({
        top: displace,
        behavior: "smooth",
      });
    }
  };

  // const getClass = (linkName) => {
  //   if (activeLink === linkName) return "navbarBottom__link--active";
  //   else return "navbarBottom__link";
  // };

  useEffect(() => {
    const isActive = () => {
      setActiveLink('root')
    }
    isActive();
  },[])

  return (
    <nav className="navbarBottom">
      <ul className="navbarBottom__list">
        <li>
          <a className={activeLink === 'root'? "navbarBottom__link--active": "navbarBottom__link"} onClick={toHome} href="#root">
            <i className="fa-solid fa-house"></i>
            <p>Inicio</p>
          </a>
        </li>
        <li>
          <a
            className={activeLink === 'about'? "navbarBottom__link--active": "navbarBottom__link"}
            onClick={navigator}
            href="#about"
          >
              <i className="fa-solid fa-user"></i>
              <p>Sobre mi</p>
          </a>
        </li>
        <li>
          <a
            className={activeLink === 'portfolio'? "navbarBottom__link--active": "navbarBottom__link"}
            href="#portfolio"
            onClick={navigator}
          >
            <i className="fa-solid fa-briefcase"></i>
            <p>Proyectos</p>
          </a>
        </li>
        <li>
          <a className={activeLink === 'contact'? "navbarBottom__link--active": "navbarBottom__link"}
             onClick={navigator} href="#contact">
              <i className='bx bxs-message-rounded'></i>
              <p>Contacto</p>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBarBottom;
