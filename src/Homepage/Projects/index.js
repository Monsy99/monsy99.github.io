import { Section, GithubLogo, Header, Subheader } from "./styled";
import logo from "../../images/gh_logo.svg";

const Projects = () => {
  return (
    <Section>
      <GithubLogo src={logo}></GithubLogo>
      <Header>Portfolio</Header>
      <Subheader>My recent projects</Subheader>
    </Section>
  );
};

export default Projects;
