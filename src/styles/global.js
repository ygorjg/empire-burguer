import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

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
