import { useDispatch, useSelector } from "react-redux";
import { useTheme } from "styled-components";
import {
  selectProjectsData,
  selectLoading,
  startFetchProjects,
} from "../../../api/projectsSlice";
import { Loader } from "../../../common/Loader";
import {
  Description,
  Header,
  Info,
  ProjectsWrapper,
  ProjectTile,
  Ref,
} from "./styled";

const ProjectTiles = () => {
  const dispatch = useDispatch();
  const projects = useSelector(selectProjectsData);
  const loading = useSelector(selectLoading);
  if (!projects) {
    dispatch(startFetchProjects());
  }
  const theme = useTheme();
  const mobile = window.innerWidth < parseInt(theme.breakpoint.mobile);
  if (loading) {
    return (
      <>
        <Loader headerContent="Please wait, projects are being loaded..."></Loader>
      </>
    );
  }
  return (
    <ProjectsWrapper>
      {projects &&
        projects.map((project) => {
          return (
            <ProjectTile key={project.id}>
              <Header>{project.name}</Header>
              <Description>{project.description}</Description>
              <Info>
                Demo:&nbsp;
                <Ref
                  href={`https://monsy99.github.io/${project.name}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {mobile
                    ? "Open code"
                    : `https://monsy99.github.io/${project.name}`}
                </Ref>
              </Info>
              <Info>
                Code:&nbsp;
                <Ref href={project.html_url} target="_blank" rel="noreferrer">
                  {mobile ? "Open preview" : project.html_url}
                </Ref>
              </Info>
            </ProjectTile>
          );
        })}
    </ProjectsWrapper>
  );
};

export default ProjectTiles;
