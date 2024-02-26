import { Container } from "./style";

const Footer = () => {
  return (
    <Container>
      <img src="assets/orange-logo.png" alt="Logo Empire Burger" />
      <div className="tab"></div>
      <div className="social-icons">
        <a
          href="https://www.ifood.com.br"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/assets/icons/orange-ifood.svg"
            className="ifood-icon"
            alt="Logo iFood"
          />
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/assets/icons/orange-instagram.svg"
            className="instagram-icon"
            alt="Logo Instagram"
          />
        </a>
      </div>
      <div className="tab"></div>
      <div className="nav-footer">
        <nav>
          <ul>
            <li>Home</li>
            <li>Localização</li>
            <li>Cardápio</li>
            <li>Sobre</li>
          </ul>
        </nav>
      </div>
      <div className="tab"></div>
      <div className="copyright">
        <p>
          2022 © EmpireBurger. <span>Todos os direitos reservados.</span>
        </p>
      </div>
    </Container>
  );
};

export default Footer;
