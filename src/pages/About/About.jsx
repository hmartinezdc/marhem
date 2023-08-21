import myPhoto from "../../assets/images/miFoto.webp";
import verified from "../../assets/icons/verified.svg";
import "./About.css";
const About = () => {
  return (
    <section className="container__about">
      <section className="container__about_photo">
        <div className="container__about_photo_img">
          <img src={myPhoto} alt="" />
        </div>
        <div className="container__about_photo_decor">
          <svg viewBox="0 0 700 700"><defs><linearGradient id="two-3" x1="350" y1="-350" x2="350" y2="350" spreadMethod="pad" gradientUnits="userSpaceOnUse"><stop offset="0%" stopColor="hsla(223, 75.20%, 49.00%, 0.30)" stopOpacity="1"></stop><stop offset="100%" stopColor="hsla(147, 90.20%, 56.10%, 0.30)" stopOpacity="1"></stop></linearGradient></defs><g id="two-0" transform="matrix(1 0 0 1 0 0)" opacity="1"><path transform="matrix(1 0 0 1 350 350)" id="two-2" d="M 248.297473 72.906716 C 237.407137 95.590768 231.50128 121.44504 227.669618 146.314379 C 222.023234 182.962152 254.616299 237.561949 224.097067 258.621802 C 187.992201 283.536032 141.846917 209.504161 98.38189 215.42629 C 74.046401 218.74201 59.007582 246.593566 37.031544 257.560048 C 12.792511 269.655809 -14.973835 291.901739 -40.788299 283.688849 C -69.908713 274.424169 -78.136267 234.119715 -95.405219 208.908287 C -107.984144 190.543961 -115.099272 166.821799 -131.82259 152.131377 C -148.402744 137.566716 -184.438671 144.204167 -192.297501 123.582099 C -202.086987 97.893869 -151.040447 72.981425 -159.739708 46.90381 C -169.507108 17.624251 -224.944439 26.564278 -240.661747 0 C -252.620399 -20.211666 -254.848214 -51.294106 -242.301685 -71.146194 C -227.315161 -94.859032 -177.127731 -80.698147 -164.702449 -105.847837 C -147.292006 -141.08786 -204.01452 -184.279566 -192.14942 -221.752252 C -183.538732 -248.946765 -155.897352 -281.151972 -127.448085 -279.072378 C -73.642393 -275.139271 -75.660184 -147.192079 -22.144907 -154.021206 C 25.913769 -160.154011 -7.259726 -286.298689 41.188368 -286.471395 C 76.054767 -286.595686 55.067395 -204.414907 87.445528 -191.479 C 125.397987 -176.316004 175.59358 -264.702278 203.46435 -234.810379 C 239.843655 -195.792925 107.219974 -132.316331 136.458152 -87.69633 C 167.574738 -40.209716 269.785377 -132.1258 308.474691 -90.576342 C 328.923055 -68.616314 310.902455 -28.139245 300.483176 -0.000001 C 290.209332 27.746469 261.102795 46.233842 248.297473 72.906716 Z " fill="url(#two-3)" stroke="undefined" strokeWidth="1" strokeOpacity="1" fillOpacity="1" visibility="visible" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="4"></path></g></svg>
        </div>
      </section>
      <article className="container__about_text">
        <div className="container__about_text--description">
          <h3>
            Un poco sobre mi{" "}
            <span>
              <img src={verified} alt="" />
            </span>
          </h3>
          <p>
            Mi nombre es Hember Martinez, desarrollador web full-stack e
            ingeniero Ambiental y Sanitario, tengo experiencia previa en proyectos personales hechos con ReactJS, he experimentando con el código y me ha ayudado a mejorar bastante.
          </p>
          <p>Me distingo por mi creatividad, habilidades en hacer código limpio y escalable, impulsar experiencias de usuario excepcionales y trabajar en equipo</p>
          <p>
            Me considero un ávido lector y siempre estoy buscando oportunidades
            para expandir mis conocimientos
          </p>
        </div>
      </article>
      <section className="container__about_tech">
        <h3>Tecnologías y herramientas</h3>
        <div className="container__about_tech--images">
          <div className="tech-image">
            <img src="https://i.imgur.com/ThOOgLO.png" alt="HTML5" />
            <p>HTML</p>
          </div>
          <div className="tech-image">
            <img src="https://i.imgur.com/wVxOGtF.png" alt="CSS3" />
            <p>CSS</p>
          </div>
          <div className="tech-image">
            <img src="https://i.imgur.com/sQ6B3VG.png" alt="JavaScript" />
            <p>JavaScript</p>
          </div>
          <div className="tech-image">
            <img src="https://i.imgur.com/HX4pBQS.png" alt="react" />
            <p>ReactJS</p>
          </div>
          <div className="tech-image">
            <img src="https://i.imgur.com/vaRykSO.png" alt="Redux" />
            <p>Redux</p>
          </div>
          <div className="tech-image">
            <img src="https://i.imgur.com/gAUfT3v.png" alt="Git" />
            <p>Git</p>
          </div>
          <div className="tech-image">
            <img src="https://i.imgur.com/lqBSHLV.png" alt="Sass" />
            <p>Sass</p>
          </div>
          <div className="tech-image">
            <img src="https://i.imgur.com/juIGibE.png" alt="TypeScript" />
            <p>TypeScript</p>
          </div>
          <div className="tech-image">
            <img src="https://i.imgur.com/c267QhZ.png" alt="npm" />
            <p>npm</p>
          </div>
          <div className="tech-image">
            <img src="https://i.imgur.com/aNG4tM3.png" alt="node" />
            <p>Nose.js</p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default About;
