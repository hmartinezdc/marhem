import { useNavigate } from "react-router-dom";
import Carusel from "../Carusel/Carusel";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  // const toMyProjects = () => {
  //   const navbarElement = document.getElementById("navbar");
  //   if (navbarElement) {
  //     const displace = navbarElement.offsetTop - 70;
  //     globalThis.scrollTo({
  //       top: displace,
  //       behavior: "smooth",
  //     });
  //   }
  //   navigate("/portfolio");
  // };
  const toContact = () => {
    const navbarElement = document.getElementById("navbar");
    if (navbarElement) {
      navbarElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    navigate("/contact");
  };

  return (
    <header className="header" id="home">
      <section className="header_section-presentation">
        <h2 className="header__name">
          Hola! 😁 Soy<span> Hember</span>
        </h2>
        <p className="header__career">Desarrollador Web Full-Stack</p>
        <p className="header__about">
          <span>
            <i className="fa-solid fa-briefcase"></i> Disponible
          </span>
        </p>
        <section className="header__social-media">
          <div>
            <a
              href="https://www.linkedin.com/in/hember-mart%C3%ADnez-de-la-cruz-575ab0148/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>
          <div>
            <a
              href="https://twitter.com/MartinezHember"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-twitter"></i>
            </a>
          </div>
          <div>
            <a
              href="https://github.com/hmartinezdc"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-github"></i>
            </a>
          </div>
        </section>
        <section className="header__buttons">
          <button className="button__about_download">
            <a
              href="https://drive.google.com/file/d/1Fm8UXE8UFmHiSINSXv-egzmt4TD3b8FT/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bx-download"></i>
              Descargar CV
            </a>
          </button>
          <button
            onClick={toContact}
            className="header__buttons-button button-secondary"
          >
            Trabajemos juntos <i className="fa-solid fa-chevron-right"></i>
          </button>
        </section>
      </section>
      <Carusel className="header_section-swiper" />
    </header>
  );
};

export default Home;
