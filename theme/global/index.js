import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *,
    ::before,
    ::after {
      box-sizing: border-box;
      border-width: 0;
    }
    body {
        margin: 0;
        font-family: "Montserrat";
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
    .container {
        max-width: 1280px;
        margin: 0 auto;
    }
    .mySwiper {
        padding: 20px;
    }
    .swiper {
        width: 100%;
        padding-bottom: 50px;
    }
    .swiper-slide { 
        background-position: center;
        background-size: cover;
        width: auto;
        height: auto;
    }
    .inherit { 
        position: inherit;
    }
`;

export default GlobalStyles;
