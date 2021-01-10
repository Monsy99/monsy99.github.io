import Wrapper from "../common/Wrapper";
import Head from "./Head";
import Projects from "./Projects";
import Skillset from "./Skillset";

const Homepage = () => {
  return (
    <Wrapper>
      <Head></Head>
      <Skillset></Skillset>
      <Projects></Projects>
    </Wrapper>
  );
};
export default Homepage;
