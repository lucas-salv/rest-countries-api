import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-size: 14px;
        font-family: 'Nunito Sans', sans-serif;
        background-color: ${props => props.theme.background};
    }
`;

export default GlobalStyles;