import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*,*::before,*::after{
     box-sizing: border-box;
}
body{
    background-color:${({ theme }) => theme.color.background};
}
`;
