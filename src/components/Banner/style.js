import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  .banner-ad {
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
      font-size: 1.125rem;
      font-weight: 700;
    }

    h1 {
      font-family: "Lilita One", sans-serif;
      font-size: 3.125rem;
      font-weight: 400;

      span {
        color: #f59a1b;
      }
    }

    p {
      font-family: "Lato", sans-serif;
      font-size: 1rem;
      font-weight: 400;

      span {
        font-weight: 900;
        background-color: #f59a1b;
      }
    }

    button {
      font-family: "Lato", sans-serif;
      font-size: 0.9375rem;
      font-weight: 700;
      color: #fff;
      background-color: #f43127;
      border-radius: 5px;
      border: none;
      width: 9.375rem;
      height: 2.5rem;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 20px;
    }

    .banner-image-mobile {
      width: 100%;
      height: 50rem;

      @media screen and (min-width: 600px) {
        height: 62.5rem;
      }
      @media screen and (min-width: 725px) {
        height: 68.75rem;
      }
    }

    .banner-image-desktop {
      width: 100%;
      height: 280px;

      @media screen and (min-width: 1100px) {
        height: 18.75rem;
      }
      @media screen and (min-width: 1200px) {
        height: 25rem;
      }
    }
  }

  .banner-details-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 18px;
    width: 23.75rem;
    height: 20rem;
    border-radius: 10px;
    background-color: #ffffff;
    box-shadow: 0px 4px 35px 0px #b29b844d;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    top: 120%;
    margin-top: -10rem;

    @media screen and (min-width: 800px) {
      gap: 0;
      width: 95%;
      height: 150px;
      flex-direction: row;
      top: 180px;
    }
  }

  .banner-details-content {
    display: flex;
    gap: 25px;

    @media screen and (min-width: 800px) {
      gap: 0;
    }
    @media screen and (min-width: 1000px) {
      gap: 35px;
    }

    div {
      width: 12.5rem;
    }

    img {
      width: 3.4375rem;
      border-radius: 50%;
      border: 10px solid #fae2cb;
      background-color: #fae2cb;
    }

    h4 {
      font-family: "Lilita One", sans-serif;
      font-size: 1.25rem;
      font-weight: 400;
      color: #1d0605e5;
    }

    p {
      font-family: "Lato", sans-serif;
      font-size: 1rem;
      font-weight: 400;
      color: #1d0605b0;
      width: 10.9375rem;
      margin-top: 3px;
    }
  }

  .tab {
    width: 18.75rem;
    border: 1px solid #492e1526;

    @media screen and (min-width: 800px) {
      display: none;
    }
  }
`;
