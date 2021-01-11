import styled from "styled-components";
const Header = styled.header`
  font-family: "Inter", sans-serif;
  font-weight: bold;
  font-size: 12px;
  line-height: 130%;
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.white};
  margin-top: 120px;
`;
const Description = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 18px;
  line-height: 140%;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.color.white};
  margin-top: 24px;
`;
const Email = styled.p`
  font-family: "Inter", sans-serif;
  font-weight: 700;
  font-size: 32px;
  line-height: 39px;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.color.white};
  margin-top: 24px;
`;
const SocialMedia = styled.div`
  margin-top: 56px;
  display: flex;
  margin-bottom: 120px;
`;
const SocialMediaIcon = styled.img`
  width: 48px;
  margin-right: 24px;
`;

export { Header, Description, Email, SocialMedia, SocialMediaIcon };
