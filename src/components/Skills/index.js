import { useState, useEffect } from "react";
import Header from "../Header";
import SkillCard from "../SkillCard";
import "./index.css";

function Skills() {
  const [skillsList, setSkillsList] = useState([]);

  const fetchSkillsListApi = async () => {
    try {
      const response = await fetch("http://localhost:5001/skills");
      const fetchedData = await response.json();
      console.log(fetchedData);
      setSkillsList(fetchedData);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchSkillsListApi();
  }, []);
  return (
    <div className="skills-bg-container">
      <Header />
      <div className="skills-container">
        <div className="skills-page">
          <h1 className="skill-page-heading">Skills</h1>
          <ul className="skill-ul-container">
            {skillsList.map((each, index) => (
              <SkillCard key={index} totalSkills={each} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Skills;
