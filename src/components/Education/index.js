import { useState, useEffect } from "react";
import Header from "../Header";
import EducationCard from "../EducationCard";
import "./index.css";

function Education() {
  const [educationList, setEducationList] = useState([]);

  const fetchEducationListApi = async () => {
    try {
      const response = await fetch("http://localhost:5001/education");
      const fetchedData = await response.json();
      console.log(fetchedData);
      setEducationList(fetchedData);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchEducationListApi();
  }, []);

  return (
    <div className="education-bg-container">
      <Header />
      <div className="education-container">
        <div className="education-page">
          <h1 className="education-title">Education</h1>
          <ul className="ul-education-card">
            {educationList.map((eachItem, index) => (
              <EducationCard key={index} eachItem={eachItem} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Education;
