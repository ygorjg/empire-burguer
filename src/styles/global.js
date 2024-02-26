import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&display=swap');

* { 
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    list-style: none;
}

body {
    width: 100vw;
    height: 100vh;
    background-color: #FAF3F2;
}

a {
    text-decoration: none;
}
`;

export default GlobalStyles;
