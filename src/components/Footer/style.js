import styled from "styled-components";

export const Container = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100vw;
  height: 16.25rem;
  background-color: #fff;
  gap: 6px;

  img {
    width: 13.125rem;
  }

  .tab {
    width: 85%;
    border: 1px solid #1d060526;
    margin-top: 5px;
  }

  .social-icons {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 5rem;
    margin-top: 5px;
  }

  .ifood-icon,
  .instagram-icon {
    width: 1.25rem;
  }

  .nav-footer {
    display: flex;
    text-align: center;
    align-items: center;
    height: 5.625rem;
    margin-top: 5px;
  }

  li {
    font-family: "Lato", sans-serif;
    font-size: 0.875rem;
    font-weight: 700;
    margin-top: 10px;
    margin-bottom: 7px;
  }

  .copyright {
    display: flex;
    text-align: center;
    margin-top: 8px;

    p {
      font-family: "Inter", sans-serif;
      font-size: 0.875rem;
      font-weight: 700;
    }

    span {
      font-weight: 400;
    }
  }
`;
