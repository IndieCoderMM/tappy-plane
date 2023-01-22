import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }
    body {
        background-color: #272727;
        display: flex;
        justify-content: center;
        width: 100%;
        height: 100%;
        overflow: hidden;
        user-select:none;
        font-family: 'Press Start 2P', cursive;
    }
`;

export default GlobalStyles;
