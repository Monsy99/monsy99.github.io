import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*,*::before,*::after{
     box-sizing: border-box;
}
body{
    color:${({ theme }) => theme.color.white};
    background-color:${({ theme }) => theme.color.mineSchaft};
}
`;
