import { Section, GithubLogo, Header, Subheader } from "./styled";
import ProjectsTiles from "./ProjectsTiles";
import logo from "../../images/gh_logo.svg";
import lightLogo from "../../images/gh_logo_light.svg";
import { useSelector } from "react-redux";
import { selectDarkTheme } from "../../theme/themeSlice";

const Projects = () => {
  const isDark = useSelector(selectDarkTheme);
  return (
    <Section>
      <GithubLogo src={isDark ? logo : lightLogo}></GithubLogo>
      <Header>Portfolio</Header>
      <Subheader>My recent projects</Subheader>
      <ProjectsTiles></ProjectsTiles>
    </Section>
  );
};

export default Projects;
