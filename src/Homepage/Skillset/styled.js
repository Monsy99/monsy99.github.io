import styled from "styled-components";

const Section = styled.section`
  margin: 0;
  padding: 0;
  margin-top: 62px;
  font-family: "Inter", sans-serif;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    margin-top: 48px;
  }
`;
const Container = styled.div`
  background-color: ${({ theme }) => theme.color.skillset.background};
  box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02),
    0px 16px 58px rgba(9, 10, 51, 0.03);
  border-radius: 4px;
  padding: 32px;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    padding: 16px;
  }
`;
const Header = styled.h2`
  margin: 0;
  font-size: 30px;
  line-height: 36px;
  letter-spacing: 0.03em;
  color: ${({ theme }) => theme.color.skillset.header};
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: 18px;
    line-height: 22px;
  }
`;
const Separator = styled.hr`
  margin-top: 15px;
  border-color: ${({ theme }) => theme.color.skillset.separator};
  border-style: solid;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    margin-top: 12px;
  }
`;
const List = styled.ul`
  columns: 3;
  margin: 0;
  padding: 0;
  list-style: none;
  margin-top: 32px;
  margin-bottom: -8px;
  @media (max-width: ${({ theme }) => theme.breakpoint.iPad}) {
    columns: 2;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    columns: 1;
    margin-top: 12px;
  }
`;
const Item = styled.li`
  display: flex;
  font-size: 18px;
  line-height: 1.4;
  letter-spacing: 0.03em;
  margin-bottom: 8px;
  color: ${({ theme }) => theme.color.skillset.item};
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: 14px;
    line-height: 17px;
  }
`;
const Bullet = styled.img`
  width: 9px;
  margin-right: 16px;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    width: 6px;
    margin-right: 8px;
  }
`;
export { Section, Container, Header, Separator, List, Bullet, Item };
