import "./PortFolio.css";

const PortFolio = () => {
  const formattedDate = (date) => {
    const newDate = new Date(date).toLocaleDateString("en-ES", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
    return newDate;
  };

  return (
    <section className="portfolio">
      <h3 className="portfolio__title">Mis proyectos más recientes</h3>
      <section className="portfolio__container">
        <div className="portfolio__container_project">
          <div className="portfolio__image">
            <img src="https://i.imgur.com/uIXajIY.png" alt="" />
          </div>
          <div className="portfolio__description">
            <h4>
              Pokemones 🐋<span> {formattedDate("05/30/2023")}</span>
            </h4>
            <p>
              En esta aplicación puedes registrar un nombre de usuario, filtrar
              un Pokemon por tipo y por nombre, navegar por cada Pokemon y ver
              toda su información.
            </p>
            <div className="portfolio__technologist">
              <span>React</span>
              <span>React router</span>
              <span>Axios</span>
              <span>CSS</span>
            </div>
            <div className="portfolio__buttons">
              <a
                href="https://app-pokedex-zdc.netlify.app/"
                className="portfolio__buttons--visit buttons__button"
                target="_blank"
                rel="noreferrer"
              >
                Visitar Web
              </a>
              {/* <a
                href=""
                className="portfolio__buttons--repo buttons__button"
                target="_blank"
                rel="noreferrer"
              >
                Repositorio
              </a> */}
            </div>
          </div>
        </div>
        <div className="portfolio__container_project">
          <div className="portfolio__image">
            <img src="https://i.imgur.com/MIAMbc6.png" alt="" />
          </div>
          <div className="portfolio__description">
            <h4>CRUD de Usuarios 👨‍🎓 <span> {formattedDate("05/22/2023")}</span></h4>
            <p>
              Aplicación web que permite visualizar, crear, editar y eliminar
              datos de usuarios, ademas, puedes filtrar un usuario por nombre,
              apellido o nombre completo.
            </p>
            <div className="portfolio__technologist">
              <span>React</span>
              <span>useForm</span>
              <span>Axios</span>
              <span>CSS</span>
            </div>
            <div className="portfolio__buttons">
              <a
                href="https://app-crud-userszdc.netlify.app/"
                className="portfolio__buttons--visit buttons__button"
                target="_blank"
                rel="noreferrer"
              >
                Visitar Web
              </a>
              {/* <a
                href=""
                className="portfolio__buttons--repo buttons__button"
                target="_blank"
                rel="noreferrer"
              >
                Repositorio
              </a> */}
            </div>
          </div>
        </div>

        <div className="portfolio__container_project">
          <div className="portfolio__image">
            <img src="https://i.imgur.com/SEavNEt.png" alt="" />
          </div>
          <div className="portfolio__description">
            <h4>Universo de Rick and Morty 🌎 <span> {formattedDate("05/16/2023")}</span></h4>
            <p>
              Busca personajes de Rick y Morty por universos, puedes ver su
              historia.
            </p>
            <div className="portfolio__technologist">
              <span>React</span>
              <span>useForm</span>
              <span>Axios</span>
              <span>CSS</span>
            </div>
            <div className="portfolio__buttons">
              <a
                href="https://rick-and-mortyzdc.netlify.app/"
                className="portfolio__buttons--visit buttons__button"
                target="_blank"
                rel="noreferrer"
              >
                Visitar Web
              </a>
              {/* <a
                href=""
                className="portfolio__buttons--repo buttons__button"
                target="_blank"
                rel="noreferrer"
              >
                Repositorio
              </a> */}
            </div>
          </div>
        </div>
        <div className="portfolio__container_project">
          <div className="portfolio__image">
            <img src="https://i.imgur.com/nKYq6pi.png" alt="" />
          </div>
          <div className="portfolio__description">
            <h4>Clima y horario por Ciudad ⛅ <span> {formattedDate("05/08/2023")}</span></h4>
            <p>
              Puedes ver el clima en tu ubicación actual, de una ciudad en
              especifica, la hora en tiempo real por cada ciudad y cambiar la
              unidad de temperatura.
            </p>
            <div className="portfolio__technologist">
              <span>React</span>
              <span>APIs</span>
              <span>Axios</span>
              <span>CSS</span>
            </div>
            <div className="portfolio__buttons">
              <a
                href="https://weather-app-zdc.netlify.app/"
                className="portfolio__buttons--visit buttons__button"
                target="_blank"
                rel="noreferrer"
              >
                Visitar Web
              </a>
              {/* <a
                href=""
                className="portfolio__buttons--repo buttons__button"
                target="_blank"
                rel="noreferrer"
              >
                Repositorio
              </a> */}
            </div>
          </div>
        </div>
        <div className="portfolio__container_project">
          <div className="portfolio__image">
            <img src="https://i.imgur.com/xv6eQ8D.png" alt="" />
          </div>
          <div className="portfolio__description">
            <h4>Galleta de la Fortuna 🌟 <span> {formattedDate("05/03/2023")}</span></h4>
            <p>
              Frases de la fortuna de forma aleatoria y sincronizada con la
              imagen de fondo.
            </p>
            <div className="portfolio__technologist">
              <span>React</span>
              <span>CSS</span>
            </div>
            <div className="portfolio__buttons">
              <a
                href="https://cookie-app-zdc.netlify.app/"
                className="portfolio__buttons--visit buttons__button"
                target="_blank"
                rel="noreferrer"
              >
                Visitar Web
              </a>
              {/* <a
                href=""
                className="portfolio__buttons--repo buttons__button"
                target="_blank"
                rel="noreferrer"
              >
                Repositorio
              </a> */}
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default PortFolio;
