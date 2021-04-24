import {createGlobalStyle} from "styled-components";
import reset from "styled-reset";

const globalStyle = createGlobalStyle`
    ${reset};
    a{
        text-decoration: none;
    }
    * {
        box-sizing: border-box;
    }
    body{
     
    }
`;

export default globalStyle;