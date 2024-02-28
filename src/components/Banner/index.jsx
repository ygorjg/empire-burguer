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
      <div className="banner-texts">
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
    </Container>
  );
};

export default Banner;
