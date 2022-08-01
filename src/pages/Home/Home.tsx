import bvsPhoto from "../../assets/BenjaminSemah.jpg";
import "./Home.css";

export function Home() {
  return (
    <>
      <header className="header">
        <div className="header--info">
          <p>Hi, I am</p>
          <h1>Benjamin Semah</h1>
          <span>SOFTWARE DEVELOPER</span>
        </div>
        <img className="bvs-photo" src={bvsPhoto} alt="benjamin-semah" />
      </header>
      <section className="about--skills">
        <div className="about--me">
          <h2>About Me</h2>
          <p>
          I have a passion for excellent user experience and web accessibility.
          I am a staunch advocate of the Growth Mindset and always strive for continuous improvement.
          </p>
          <span className="read--more">Read more...</span>
        </div>
        <div className="skills--tech">
          <h2>Skills/Technologies</h2>
          {/* <p>I'm skilled in solving problems with the following technologies</p> */}
          <div className="skills--btns">
            <button>JavaScript</button>
            <button>React</button>
            <button>Redux</button>
            <button>TypeScript</button>
            <button>Bootstrap</button>
            <button>Tailwind</button>
            <button>HTML</button>
            <button>CSS</button>
            <button>Git</button>
            <button>Figma</button>
          </div>
        </div>
      </section>
      
    </>
  );
}
