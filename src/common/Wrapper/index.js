import styled from "styled-components";

export default styled.div`
  width: 100%;
  max-width: 1216px;
  margin: 0 auto;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    width: calc(100% - 32px);
    margin: 0 16px;
  }
`;
