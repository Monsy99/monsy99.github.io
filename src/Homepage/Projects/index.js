import { Section, GithubLogo, Header, Subheader } from "./styled";
import ProjectsTiles from "./ProjectsTiles";
import logo from "../../images/gh_logo.svg";

const Projects = () => {
  return (
    <Section>
      <GithubLogo src={logo}></GithubLogo>
      <Header>Portfolio</Header>
      <Subheader>My recent projects</Subheader>
      <ProjectsTiles></ProjectsTiles>
    </Section>
  );
};

export default Projects;
