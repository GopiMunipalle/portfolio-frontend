import "./index.css";

function EducationCard(props) {
  const { eachItem } = props;
  const { collegeName, branch, major, score, startYear, endYear } = eachItem;
  return (
    <div className="education-card-items-container">
      <div className="education-details-card">
        <h1 className="education-heading">{collegeName}</h1>
        <p className="branch">{branch}</p>
        <p className="major">{major}</p>
        <p className="score">{score}</p>
      </div>
      <div className="education-year-card">
        <p className="year">
          {startYear}-{endYear}
        </p>
      </div>
    </div>
  );
}
export default EducationCard;
