import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400&family=Nunito:wght@300&family=Poppins:wght@200&display=swap");
    *,
    ::before,
    ::after {
      box-sizing: border-box;
      border-width: 0;
    }
    body {
        margin: 0;
        font-family: "Montserrat", sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: #e6ecef;
    }

    a {
        color: inherit;
        text-decoration: inherit;
    }
    ol,
    ul,
    menu {
        list-style: none;
        margin: 0;
        padding: 0;
    }
    h1, h2, h3, h4 ,h5, h6 {
        margin: 0;
    } 
    h1 {
        font-size: 32px;
    }
    h2 {
        font-size: 24px;
    }
    h3 {
        font-size: 20px;
    }
    h4{
        font-size: 18px;
    }
    h5 {
        font-size:  16px;
    }
    h6{ 
        font-size: 12px;
    }
    button,
    input,
    optgroup,
    select,
    textarea {
        font-family: inherit;
        font-size: 100%;
        line-height: inherit;
        color: inherit;
        margin: 0;
        padding: 0;
    }
    .grid-footer {
        display: grid;
        grid-template-columns: 2fr 1fr 1fr 1fr;
    }

    @media (max-width: 800px) {
        .grid-footer {
            display: grid;
            grid-template-columns: 1fr;
    }
        .navbar {
            color: aqua;
        }
    }
`;

export default GlobalStyles;
