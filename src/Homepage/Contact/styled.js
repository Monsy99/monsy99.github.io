import styled from "styled-components";
const Section = styled.section`
  margin-top: 120px;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    margin-top: 48px;
  }
`;
const Header = styled.header`
  margin: 0;
  font-family: "Inter", sans-serif;
  font-weight: bold;
  font-size: 12px;
  line-height: 130%;
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.white};
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: 12px;
    line-height: 130%;
  }
`;
const Description = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 18px;
  line-height: 140%;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.color.white};
  margin-top: 24px;
  max-width: 60%;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: 14px;
    line-height: 17px;
    margin-top: 12px;
    max-width: unset;
  }
`;
const Email = styled.p`
  font-family: "Inter", sans-serif;
  font-weight: 700;
  font-size: 32px;
  line-height: 39px;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.color.white};
  margin-top: 24px;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-weight: 900;
    font-size: 18px;
    line-height: 22px;
    word-break: break-all;
  }
`;
const SocialMedia = styled.div`
  margin-top: 56px;
  display: flex;
  margin-bottom: 110px;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    margin-top: 40px;
    margin-bottom: 32px;
  }
`;
const SocialMediaIcon = styled.img`
  width: 48px;
  margin-right: 24px;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    width: 32px;
    margin-right: 16px;
  }
`;

export { Header, Description, Email, SocialMedia, SocialMediaIcon, Section };
