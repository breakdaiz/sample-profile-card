import "./styles.css";

const Skills = (props) => {
  return <span className={props.className}> {props.skillName} </span>;
};

export default function App() {
  return (
    <div className="App">
      <a href="https://github.com/breakdaiz/" target="_blank">
        <div className="container border">
          <img
            src="https://media.onlinejobs.ph/jobseekers_pictures/2f1d4a94acec4bea8436ebbca3f70d33_250x250.png"
            alt=""
          />
          <div className="content">
            <h1> Bernard Rayoso Jr. </h1>
            <h2 style={{ padding: 0, marginTop: -16, color: "#4a4a4a" }}>
              Fullstack Developer{" "}
            </h2>
            <p>
              Detailed and goal-oriented IT consultant with over 10 years of
              experience working and solving complex problems from different
              private companies. In previous roles recognized as a top employee
              in which I integrated mobile applications, online payment, and
              email marketing which improved product sales by 15% which led to a
              25% increase in annual revenue. Seeking to use innovation and
              project management skills to improve quality, costing, and time
              metrics through my skills and knowledge. Highly organized
              self-motivated, and proficient with computers. willing to learn
              new things and can adapt easily.{" "}
            </p>
          </div>
          <div className="skill-container ">
            <Skills
              className="skills red text-white"
              skillName="HTML + CSS 💪"
            />
            <Skills className="skills green" skillName="Javascript" />
            <Skills className="skills pink" skillName="React 💪" />
            <Skills className="skills blue" skillName="Git and Github 💪" />
            <Skills className="skills yellow" skillName="React Native 💪" />
            <Skills
              className="skills red text-white"
              skillName="Web Development 💪"
            />
            <Skills className="skills pink" skillName="SEO Optimization 💪" />
          </div>
        </div>
      </a>
    </div>
  );
}
