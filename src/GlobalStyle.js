import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*,*::before,*::after{
     box-sizing: border-box;
}
body{
    color:${({ theme }) => theme.white};
    background-color:${({ theme }) => theme.mineSchaft};
}
`;
