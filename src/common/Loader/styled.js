import styled from "styled-components";

const LoaderCircle = styled.img`
  width: 160px;
  height: 160px;
  margin: 0 auto;
  margin-top: 48px;
  animation: spin 1s infinite;
  margin-bottom: 500px;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const LoaderHeader = styled.header`
  display: block;
  margin: 0 auto;
  margin-top: 88px;
  font-size: 20px;
  line-height: 140%;
  letter-spacing: 0.05em;
  font-family: "Inter", sans-serif;
`;

export { LoaderCircle, LoaderHeader };
