import styled from "styled-components";

const Section = styled.section`
  margin: 0;
  padding: 0;
  margin-top: 120px;
  font-family: "Inter", sans-serif;
  display: grid;
  grid-template-columns: auto 1fr;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    grid-template-columns: auto;
    margin-top: 21px;
  }
`;
const Portrait = styled.img`
  width: 400px;
  height: 400px;
  object-fit: cover;
  border-radius: 50%;
  margin-right: 66px;
  display: block;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    margin-right: 0px;
    width: 220px;
    height: 220px;
  }
`;
const Caption = styled.p`
  margin: 0;
  margin-top: 68px;
  font-weight: 700;
  font-size: 12px;
  text-transform: uppercase;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    margin-top: 12px;
    letter-spacing: 0.03em;
  }
`;
const Name = styled.h1`
  margin: 0;
  margin-top: 12px;
  font-size: 38px;
  font-weight: 700;
  letter-spacing: 0.03em;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    margin-top: 8px;
    font-size: 22px;
    letter-spacing: 0.03em;
  }
`;
const Description = styled.p`
  margin: 0;
  margin-top: 35px;
  font-size: 20px;
  letter-spacing: 0.03em;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    margin-top: 16px;
    font-size: 17px;
    letter-spacing: 0.03em;
    max-width: 90%;
  }
`;
const Button = styled.button`
  padding: 12px 16px;
  margin: 0;
  margin-top: 32px;
  border: none;
  color: ${({ theme }) => theme.color.white};
  background: ${({ theme }) => theme.color.dodgerBlue};
  border: 1px solid rgba(209, 213, 218, 0.1);
  border-radius: 4px;
  font-size: 20px;
  letter-spacing: 0.03em;
  display: flex;
  align-items: center;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    margin-top: 24px;
    font-size: 18px;
    line-height: 22px;
  }
`;
const ButtonImg = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 18px;
`;

export { Section, Portrait, Caption, Button, Name, ButtonImg, Description };
