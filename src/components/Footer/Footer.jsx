import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div></div>
      <section className="footer__social-media">
        <a
          href="https://www.linkedin.com/in/hember-mart%C3%ADnez-de-la-cruz-575ab0148/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>

        <a
          href="https://twitter.com/MartinezHember"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-twitter"></i>
        </a>

        <a
          href="https://github.com/hmartinezdc"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-github"></i>
        </a>
      </section>
      <div className="footer__copyright"><p>copyright © 2023 MarHem</p></div>
    </footer>
  );
};

export default Footer;
