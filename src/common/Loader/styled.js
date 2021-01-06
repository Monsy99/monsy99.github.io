import styled from "styled-components";

const LoaderCircle = styled.img`
  width: 160px;
  height: 160px;
  margin: 0 auto;
  margin-top: 48px;
  animation: spin 1s infinite;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
export { LoaderCircle };
