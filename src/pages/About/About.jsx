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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16009.8 16009.8"
            version="1.0"
            stroke="currentColor"
          >
            <g id="Capa_x0020_1">
              <metadata id="CorelCorpID_0Corel-Layer" />
              <g id="_2343562597008">
                <path
                  fill="currentColor"
                  d="M235.43 11077.63c0,320.15 200.26,490.44 373.61,742.23 223.17,324.15 318.08,494.9 717.97,494.9 192.37,0 309.86,-112.86 426.15,-204.54 124.81,-98.39 231.23,-187.77 350.08,-280.61 242.13,-189.16 469.69,-373.96 717.24,-568.4 488.03,-383.32 939.88,-760.05 1427.89,-1143.39l7867.58 -6274.46c252.72,-206.77 539.24,-348.3 539.24,-770.66 0,-278.2 -202,-496.33 -370.93,-720.65 -238.79,-317.08 -288.17,-492.22 -720.65,-492.22 -249.42,0 -551.2,300.15 -779.42,481.97l-10011.91 7987.04c-226.14,180.17 -536.85,354.01 -536.85,748.79z"
                />
                <path
                  fill="currentColor"
                  d="M2103.24 15322.66c320.06,0 604.12,-308.73 908.01,-547.43l5115.44 -4078.1c316.96,-256.62 453.27,-304.2 453.27,-783.85 0,-201.32 -232.67,-473.32 -374.15,-668.93 -247.02,-341.55 -322.77,-471.17 -717.43,-471.17 -251.03,0 -834.02,531.18 -1046.26,700.28l-4384.2 3499.43c-165.93,132.2 -319.5,256.14 -485.15,388.11 -159.53,127.1 -340.26,244.26 -432.6,440.67 -208.07,442.57 111,767.88 411.77,1174.78 121.15,163.9 278.2,346.21 551.3,346.21z"
                />
                <path
                  fill="currentColor"
                  d="M8240.35 8191.01c0,188.17 70.45,300.46 145.16,412.76 139.72,210.01 445.7,674.31 662.15,769.04 310.09,135.71 515.49,-6.58 731.4,-176.76 144.05,-113.55 265.25,-211.26 405.06,-322.65l4519.17 -3607.05c76.31,-59.94 129.55,-101.86 202.21,-161.65 379.64,-312.41 854.63,-545.21 854.63,-1013.19 0,-307.81 -277.43,-586.61 -460.71,-849.18 -199.36,-285.58 -466.62,-496.92 -850.06,-316.04 -90.66,42.78 -169.75,119.66 -252.18,184.45l-3185.91 2538.83c-330.84,270.67 -650.03,517.31 -983.49,787.29l-1472.29 1171.75c-163.58,126.26 -315.14,293.75 -315.14,582.4z"
                />
                <path
                  fill="currentColor"
                  d="M453.74 7414.78c0,235.85 12.13,326.55 148.66,506.28 289.4,380.99 641.11,1138.19 1279.58,655.11l3721.85 -2973.17c141.48,-115.22 517.91,-390.75 617.73,-498.11 233.77,-251.4 233.5,-632.14 23.1,-909.76 -81.76,-107.87 -145.05,-196.45 -225.7,-307.95 -228.39,-315.78 -308.28,-474.87 -713.74,-474.87 -235.94,0 -465.71,249.73 -678.94,412.64 -212.01,161.96 -410.79,320.41 -623.34,492.5l-2454.43 1960.41c-211.4,168.42 -404.16,326.13 -620.1,495.73 -179.3,140.85 -474.67,346.11 -474.67,641.19z"
                />
                <path
                  fill="currentColor"
                  d="M6081.45 2927.16c0,295.52 244.01,542.76 378.37,737.46 134.19,194.44 335.04,499.66 640.44,499.66 295.44,0 444.6,-166.29 658.13,-336.41 193.07,-153.83 367.4,-298.22 565.22,-453.59 197.88,-155.44 373.52,-295.13 566.11,-452.7 313.02,-256.09 417.96,-305.13 417.96,-746.4 0,-229.21 -268.87,-520.16 -422.12,-742.23 -157.99,-228.95 -342.84,-486.6 -741.01,-397.28 -193.4,43.38 -343.38,187.63 -491.95,309.18l-1308 1044.96c-135.82,108.63 -263.15,301.07 -263.15,537.35z"
                />
              </g>
            </g>
          </svg>
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
            ¡Hola! Mi nombre es Hember Martinez, ingeniero Ambiental y Sanitario de profesión, me gusta la tecnología disfruto explorando nuevas ideas y experimentando con el código para crear soluciones innovadoras
          </p>
          <p>
            Me considero un ávido lector y siempre estoy buscando oportunidades para expandir mis conocimientos
          </p>
          <p>
            Me encanta viajar y explorar diferentes ciudades, ya que encuentro
            inspiración en diferentes entornos
          </p>
        </div>
        <button className="button__about_download">
          <a
            href="https://drive.google.com/file/d/1Yv0MIC4x_9ZA_Ci6nNdBdCB19SaAwHHL/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bx-download"></i>
            Descargar CV
          </a>
        </button>
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
