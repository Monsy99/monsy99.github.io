import Wrapper from "../common/Wrapper";
import Contact from "./Contact";
import Head from "./Head";
import Projects from "./Projects";
import Skillset from "./Skillset";

const Homepage = () => {
  return (
    <Wrapper>
      <Head></Head>
      <Skillset></Skillset>
      <Projects></Projects>
      <Contact></Contact>
    </Wrapper>
  );
};
export default Homepage;
