import "./index.css";

function ProjectsCard(props) {
  const { eachItem } = props;
  const { projectTitle, projectDescription, publishedLink, technologies } =
    eachItem;

  return (
    <div className="projects-card-container">
      <h1 className="project-title">{projectTitle}</h1>
      <p className="project-description">{projectDescription}</p>
      <p className="project-tech">
        <span className="span">Technologies:</span>
        {technologies}
      </p>
      <div className="project-link-card">
        <p className="project-link">Project Link:</p>
        <a href={publishedLink} className="link-tag" target="__blank">
          {publishedLink}
        </a>
      </div>
    </div>
  );
}
export default ProjectsCard;
