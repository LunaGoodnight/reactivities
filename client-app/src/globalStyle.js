// globalStyles.js
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
    }

    img {
        max-width: 100%;
    }

    html {
        font-size: 62.5%;
    }

    body {
        font-size: 1.6rem;
    }
`;

export default GlobalStyle;
