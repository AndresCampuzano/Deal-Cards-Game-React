import { createGlobalStyle } from 'styled-components'

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
        background-color: ${({ theme }) => theme.white};
        text-align: center;
    }
    a {
        color: ${({ theme }) => theme.blackColor};
        text-decoration: none;
    }
    p {
        margin: 0;
        padding: 0;
    }
`

export default GlobalStyles
