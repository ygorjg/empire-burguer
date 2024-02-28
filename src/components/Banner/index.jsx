import { useState, useEffect } from "react";
import { Container } from "./style";

const Banner = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 700);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 800);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Container>
      <div className="banner-ad">
        <h4>Uma nova experiência!</h4>
        <h1>
          KING <span>BURGER</span>
        </h1>
        <p>
          Pra quem tem um <span>Apetite de um REI!</span>
        </p>
        <button>Comprar Agora</button>
      </div>
      {isMobile ? (
        <img
          src="assets/banner-mobile.png"
          className="banner-image-mobile"
          alt="Banner King Burger"
        />
      ) : (
        <img
          src="assets/banner-desktop.png"
          className="banner-image-desktop"
          alt="Banner King Burger"
        />
      )}
      <div className="banner-details-container">
        <div className="banner-details-content">
          <img src="assets/icons/burger.svg" alt="Ícone Burguer" />
          <div>
            <h4>ARTESANAL</h4>
            <p>Nossas receitas são feitas com todo cuidado</p>
          </div>
        </div>
        <div className="tab"></div>
        <div className="banner-details-content">
          <img src="assets/icons/headset.svg" alt="Ícone Atendimento" />
          <div>
            <h4>ATENDIMENTO</h4>
            <p>Totalmente personalizado</p>
          </div>
        </div>
        <div className="tab"></div>
        <div className="banner-details-content">
          <img src="assets/icons/delivery.svg" alt="Ícone Delivery" />
          <div>
            <h4>DELIVERY SPEED</h4>
            <p>Entregamos em menos de 30 minutos</p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Banner;
