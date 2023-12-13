import "./index.css";

function SkillCard(props) {
  const { totalSkills } = props;
  const {
    html,
    css,
    javascript,
    boostrap,
    python,
    reactjs,
    nodejs,
    expressjs,
    sqlite,
  } = totalSkills;
  return (
    <div className="li-container">
      <div className="skill-card-li-item">
        <h1 className="skill-heading">{html}</h1>
        <p className="skill-content">Hyper Text Markup Language</p>
      </div>
      <div className="skill-card-li-item">
        <h1 className="skill-heading">{css}</h1>
        <p className="skill-content">CaseCading StyleSheet</p>
      </div>
      <div className="skill-card-li-item">
        <h1 className="skill-heading">{javascript}</h1>
        <p className="skill-content">
          JavaScript is a cross-platform, object-oriented scripting language
          used to make webpages interactive
        </p>
      </div>
      <div className="skill-card-li-item">
        <h1 className="skill-heading">{boostrap}</h1>
        <p className="skill-content">
          Boostrap is the most popular framework for building responsive,
          mobile-first sites
        </p>
      </div>
      <div className="skill-card-li-item">
        <h1 className="skill-heading">{python}</h1>
        <p className="skill-content">
          Python is a high-level, interpreted programming language known for its
          simplicity and readability
        </p>
      </div>
      <div className="skill-card-li-item">
        <h1 className="skill-heading">{reactjs}</h1>
        <p className="skill-content">
          ReactJs is an Open-Source JavaScript Library
        </p>
      </div>
      <div className="skill-card-li-item">
        <h1 className="skill-heading">{nodejs}</h1>
        <p className="skill-content">
          Node.js is an open-source, server-side JavaScript runtime environment
          built on Chrome's V8 JavaScript engine
        </p>
      </div>
      <div className="skill-card-li-item">
        <h1 className="skill-heading">{expressjs}</h1>
        <p className="skill-content">
          Express.js is a minimalist and flexible Node.js web application
          framework designed to build web applications and APIs easily and
          quickly
        </p>
      </div>
      <div className="skill-card-li-item">
        <h1 className="skill-heading">{sqlite}</h1>
        <p className="skill-content">
          SQLite is a popular, lightweight, and self-contained SQL database
          engine
        </p>
      </div>
    </div>
  );
}
export default SkillCard;
