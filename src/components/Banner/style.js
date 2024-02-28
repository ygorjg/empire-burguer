import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  width: 100%;
  height: 100%;

  .banner-image-mobile {
    width: 100%;
    height: 800px;

    @media screen and (min-width: 600px) {
      height: 1000px;
    }
    @media screen and (min-width: 725px) {
      height: 1100px;
    }
  }

  .banner-image-desktop {
    width: 100%;
    height: 280px;

    @media screen and (min-width: 1100px) {
      height: 300px;
    }
    @media screen and (min-width: 1200px) {
      height: 400px;
    }
  }

  .banner-texts {
    position: absolute;
    margin-top: 90px;
    margin-left: 20px;

    @media screen and (min-width: 600px) {
      margin-top: 120px;
      margin-left: 70px;
    }
    @media screen and (min-width: 725px) {
      margin-left: 95px;
    }
    @media screen and (min-width: 800px) {
      margin-top: 80px;
    }

    h4 {
      font-family: "Lato", sans-serif;
      font-size: 18px;
      font-weight: 700;
    }

    h1 {
      font-family: "Lilita One", sans-serif;
      font-size: 50px;
      font-weight: 400;

      span {
        color: #f59a1b;
      }
    }

    p {
      font-family: "Lato", sans-serif;
      font-size: 16px;
      font-weight: 400;

      span {
        font-weight: 900;
        background-color: #f59a1b;
      }
    }

    button {
      font-family: "Lato", sans-serif;
      font-size: 15px;
      font-weight: 700;
      color: #fff;
      background-color: #f43127;
      border-radius: 5px;
      border: none;
      width: 150px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 20px;
    }
  }
`;
