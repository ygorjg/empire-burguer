import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: #3b200b0c;
  width: 100vw;
  height: 3.75rem;
  position: absolute;

  .logo {
    width: 14rem;
    height: 1.9rem;
  }

  ul,
  span {
    display: flex;
  }

  ul {
    gap: 18px;
  }

  li {
    font-family: "Lato", sans-serif;
    font-size: 1rem;
    font-weight: 400;
    text-align: left;
  }

  .social-icons {
    display: flex;
    justify-content: space-evenly;
    margin-top: 8px;
    width: 5.625rem;
  }

  .menu-icon {
    display: none;
  }

  .tab {
    border: 1px solid #b50b04;
    margin-right: 15px;
    opacity: 55%;
  }

  .contact-box {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    width: 7.3rem;
    height: 2.2rem;
    border-radius: 5%;
    background-color: #f59a1b;

    img {
      width: 1.1rem;
    }

    p {
      font-family: "Lato", sans-serif;
      font-size: 0.9rem;
      font-weight: 700;
      color: #34201f;
    }
  }

  @media screen and (max-width: 920px) {
    justify-content: space-evenly;

    ul,
    .social-icons,
    .tab,
    .contact-box {
      display: none;
    }

    .menu-icon {
      display: flex;
    }
  }
`;
