import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    html {
        scroll-behavior: smooth;
    }
    body {
        margin: 0;
        padding: 0;
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
        color: ${({ theme }) => theme.blackColor};
        ${'' /* overflow-x: hidden; */}
        background-color: ${({ theme }) => theme.white};
    }
    a {
        color: ${({ theme }) => theme.blackColor};
        text-decoration: none;
    }
    ${
        '' /* #root {
        margin: 0 auto;
        max-width: ${({ theme }) => theme.maxWidth};
    } */
    }
`;

export default GlobalStyles;
