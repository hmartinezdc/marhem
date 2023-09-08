import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/icons/logo02.svg";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import "./Contact.css";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useRef();
  const navigate = useNavigate();

  const sendEmailWithPromise = () => {
    return new Promise((resolve, reject) => {
      emailjs
        .sendForm(
          "service_xeuoc4m",
          "template_nm9ix14",
          form.current,
          "WQRKO6XiRcfeXfpWm"
        )
        .then(resolve)
        .catch(reject);
    });
  };

  const displayToastMessages = () => {
    const messages = {
      loading: "Enviando email...",
      success: "Email enviado con éxito",
      error: (data) => {
        return `Estatus ${data.status}: No se puedo enviar el mensaje\nintenta enviar por correo`;
      },
    };
    toast.promise(sendEmailWithPromise(), messages);
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);

    let errorOccurred = false;

    try {
      displayToastMessages();

      await sendEmailWithPromise();
      form.current.reset();
    } catch (error) {
      errorOccurred = true;
      if (error.message)
        toast.error(`${error.name}: ${error.message}`, {
          duration: 6000,
        });
      if (error.text)
        toast.error(`Estatus ${error.status}: ${error.text}`, {
          duration: 6000,
        });
    } finally {
      if (!errorOccurred) {
        navigate("/sentEmail");
      }
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact" id="contact">
      <form onSubmit={sendEmail} className="contact__form" ref={form}>
        <div className="contact__logo">
          <img src={logo} alt="" />
        </div>
        <h3>Envíame un mensaje</h3>
        <label>
          {/* Nombre */}
          <input
            name="name"
            type="text"
            className="contact__form--inputs"
            placeholder="Nombre"
            required
            autoComplete="on"
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
            autoComplete="username"
            aria-invalid="true"
            aria-errormessage="email-error"
          />
        </label>
        {/* <div id="email-error"><p>Ingresa una dirección de correo válida</p></div> */}
        <label>
          {/* Su mensaje */}
          <textarea
            name="message"
            placeholder="mensaje..."
            className="contact__form--inputs contact__form--textarea"
            required
          ></textarea>
        </label>
        <label>
          <button
            type="submit"
            value="send"
            className={`contact__form--send ${isSubmitting ? "disabled" : ""}`}
            disabled={isSubmitting}
          >
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
            <i className="bx bxl-whatsapp"></i> escríbeme al wsp
          </a>
          <a
            href="mailto:andrehp.9308@gmail.com"
            className="contact__info--social--link"
          >
            <i className="bx bx-mail-send"></i> andrehp.9308@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
