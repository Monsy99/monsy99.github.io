import styled from "styled-components";

const Section = styled.section`
  margin: 0;
  padding: 0;
  margin-top: 48px;
  text-align: center;
`;
const GithubLogo = styled.img`
  width: 40px;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    width: 32px;
  }
`;
const Header = styled.h2`
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 36px;
  letter-spacing: 0.03em;
  color: ${({ theme }) => theme.color.white};
  margin: 0;
  margin-top: 13px;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: 18px;
    line-height: 22px;
    font-weight: 900;
    letter-spacing: 0.05em;
  }
`;

const Subheader = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 20px;
  line-height: 140%;
  color: ${({ theme }) => theme.color.white};
  letter-spacing: 0.03em;
  margin: 0;
  margin-top: 8px;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    margin-top: 16px;
    font-size: 17px;
  }
`;

export { Section, GithubLogo, Header, Subheader };
