import "./MyInfo.css";

const MyInfo = () => {
  return (
    <article className="article__container">
      <h2 className="article__title">¿Que me hace diferente?</h2>
      <section className="article__information">
        <div className="info_differences info_differences--blue">
          <div>
            <i className="fa-solid fa-puzzle-piece"></i>
          </div>
          <h3>Creatividad</h3>
          <p>
            Desarrollador creativo, aprendo explorando y pensando en cómo
            mejorar las cosas
          </p>
        </div>
        <div className="info_differences info_differences--green">
          <div>
            {/* <i className="fa-solid fa-swatchbook"></i> */}
            <i className="bx bxs-layout"></i>
          </div>
          <h3>Trabajo en equipo</h3>
          <p>
            Colaboro con otras personas con empatía, madurez emocional y
            profesional.
          </p>
        </div>
        <div className="info_differences info_differences--yellow">
          <div>
            <i className="fa-solid fa-wand-magic-sparkles"></i>
          </div>
          <h3>Desarrollo eficaz</h3>
          <p>
            Diseñar correctamente el software, desarrollar código limpio y
            mantenible, con un enfoque de escalabilidad.
          </p>
        </div>
      </section>
      <p className="article__paragraph">
        Puedo unirme a su equipo de manera rápida y eficiente utilizando métodos
        y herramientas de integración continua como Git y Agile.
      </p>
    </article>
  );
};

export default MyInfo;
