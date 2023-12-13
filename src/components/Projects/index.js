import { useState, useEffect } from "react";
import Header from "../Header";
import ProjectsCard from "../ProjectsCard";
import "./index.css";

function Projects() {
  const [projectList, setProjectList] = useState([]);

  const fetchProjectsListApi = async () => {
    try {
      const response = await fetch("http://localhost:5001/projects");
      const fetchedData = await response.json();
      setProjectList(fetchedData);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchProjectsListApi();
  }, []);
  return (
    <div className="projects-bg-container">
      <Header />
      <div className="projects-container">
        <div className="projects-page">
          <h1 className="projects-title">Projects</h1>
          <ul className="projects-ul-card">
            {projectList.map((eachItem, index) => (
              <ProjectsCard key={index} eachItem={eachItem} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Projects;
