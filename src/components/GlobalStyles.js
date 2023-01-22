import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }
    body {
        background-color: black;
        width: 100%;
        height: 100%;
        overflow: hidden;
        user-select:none;
    }
`;

export default GlobalStyles;
