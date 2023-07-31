// import ilustration01 from "../../assets/images/opened-mailbox-with-letter-by-oblik-studio.svg";
import { useNavigate } from "react-router-dom";
// import illustration02 from "../../assets/images/letters-paperplanes-messages-by-oblik-studio.svg";
import "./Contact.css";

const Contact = () => {
  const navigate = useNavigate();

  const sendEmail = (e) => {
    e.preventDefault();
    navigate("/sentEmail");
  };
  return (
    <section className="contact">
      <form
        onSubmit={sendEmail}
        className="contact__form"
        action=""
        method="post"
      >
        <h3>Envíame un mensaje</h3>
        <label>
          {/* Nombre */}
          <input
            name="name"
            type="text"
            className="contact__form--inputs"
            placeholder="Nombre"
            required
          />
        </label>
        <label>
          {/* Email */}
          <input
            name="email"
            type="email"
            className="contact__form--inputs"
            placeholder="Email"
            required
          />
        </label>
        <label>
          {/* Su mensaje */}
          <textarea
            name="message"
            placeholder="mensaje..."
            className="contact__form--inputs"
            required
          ></textarea>
        </label>
        <label>
          <button type="submit" value="send" className="contact__form--send">
            Enviar
          </button>
        </label>
      </form>
      <div className="contact__info">
        <h2>Ponte en contacto</h2>
        <p>
          Soy muy accesible y me encantaría hablar contigo. No dude en llamar,
          enviarme un correo electrónico.
        </p>
        <p>
          Sígueme en mis redes sociales o simplemente completar el formulario de
          consulta.
        </p>
        <div className="contact__info--social">
          <a
            href="https://wa.me/+51994827810?text=Enviame un mensaje de texto"
            target="_blank"
            rel="noreferrer"
            className="contact__info--social--link"
          >
            <i className="bx bxl-whatsapp"></i> +51994827810
          </a>
          <p className="contact__info--social--link">
            <i className="bx bx-mail-send"></i> andrehp.9308@gmail.com
          </p>
        </div>
        {/* <div className="contact__info--illustration">
          <img src={illustration02} alt="" />
        </div> */}
      </div>
    </section>
  );
};

export default Contact;
