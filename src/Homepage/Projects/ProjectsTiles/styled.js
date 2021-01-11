import styled from "styled-components";

const ProjectsWrapper = styled.div`
  margin-top: 24px;
  display: grid;
  grid-gap: 32px;
  grid-template-columns: repeat(2, calc(50% - 16px));
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    grid-template-columns: minmax(280px, 1fr);
    grid-gap: 16px;
  }
`;
const ProjectTile = styled.div`
  margin: 0;
  background: rgba(54, 54, 54, 0.72);
  border: 6px solid rgba(209, 213, 218, 0.1);
  box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02),
    0px 16px 58px rgba(9, 10, 51, 0.03);
  border-radius: 4px;
  padding: 56px;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    padding: 24px;
  }
`;
const Header = styled.h2`
  text-align: left;
  margin: 0;
  padding: 0;
  font-family: "Inter", sans-serif;
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
  letter-spacing: 0.05em;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.05em;
  }
`;
const Description = styled.p`
  text-align: left;
  margin: 0;
  padding: 0;
  margin-top: 24px;
  font-family: "Inter", sans-serif;
  font-size: 18px;
  line-height: 140%;
  letter-spacing: 0.03em;
  color: ${({ theme }) => theme.color.white};
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.05em;
    word-wrap: break-word;
    margin-top: 16px;
  }
`;
const Info = styled.p`
  text-align: left;
  margin: 0;
  padding: 0;
  margin-top: 24px;
  font-family: "Inter", sans-serif;
  font-size: 18px;
  line-height: 140%;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.color.white};
  overflow-wrap: wrap;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: 14px;
    line-height: 17px;
    word-wrap: break-word;
    margin-top: 16px;
  }
`;
const Ref = styled.a`
  overflow-wrap: wrap;
  word-wrap: break-word;
  color: ${({ theme }) => theme.color.dodgerBlue};
`;
export { Info, Ref, Description, Header, ProjectTile, ProjectsWrapper };
