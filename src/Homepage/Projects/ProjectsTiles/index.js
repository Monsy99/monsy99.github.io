import { useDispatch, useSelector } from "react-redux";
import {
  selectProjectsData,
  selectLoading,
  startFetchProjects,
} from "../../../api/projectsSlice";
import { Loader } from "../../../common/Loader";
import Wrapper from "../../../common/Wrapper";
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

  if (loading) {
    return (
      <>
        <Loader headerContent="Please wait, projects are being loaded..."></Loader>
      </>
    );
  }
  return (
    <Wrapper>
      <ProjectsWrapper>
        {projects &&
          projects.map((project) => {
            return (
              <ProjectTile key={project.id}>
                <Header>{project.name}</Header>
                <Description>{project.description}</Description>
                <Info>
                  Demo:&nbsp;
                  <Ref href={project.html_url} target="_blank" rel="noreferrer">
                    {project.html_url}
                  </Ref>
                </Info>
                <Info>
                  Code:&nbsp;
                  <Ref
                    href={`https://monsy99.github.io/${project.name}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {`https://monsy99.github.io/${project.name}`}
                  </Ref>
                </Info>
              </ProjectTile>
            );
          })}
      </ProjectsWrapper>
    </Wrapper>
  );
};

export default ProjectTiles;
