import { useNavigate } from "react-router-dom";
import postal from "../../assets/images/opened-mailbox-with-letter-by-oblik-studio.svg";
import Footer from "../../components/Footer/Footer";
import "./SentEmail.css";

const SentEmail = () => {
  const navigate = useNavigate();
  const toHome = () => {
    navigate("/");
  };
  return (
    <>
      <section className="section__sentEmail">
        <div className="section__sentEmail--description">
          <p>¡Muchas gracias!</p>
          <h2>El correo se ha enviado con éxito ✅</h2>
          <p>En breve me pondré en contacto con usted, gracias</p>
          <button className="section__sentEmail--button" onClick={toHome}>
            Regresar al inicio{" "}
            <span>
              <i className="fa-solid fa-chevron-right"></i>
            </span>
          </button>
        </div>
        <div className="section__sentEmail--image">
          <img src={postal} alt="postal" />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default SentEmail;
