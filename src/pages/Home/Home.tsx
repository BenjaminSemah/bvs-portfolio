import bvsPhoto from "../../assets/BenjaminSemah.jpg";
import tenziesImg from "../../assets/tenzies.png";
import betterrunnerImg from "../../assets/betterrunner.png";
import cinimashImg from "../../assets/cinimash.png";
import happyDevsImg from "../../assets/happyDevs.png";
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
            I have a passion for excellent user experience and web
            accessibility. I am a staunch advocate of the Growth Mindset and
            always strive for continuous improvement.
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
      <section className="projects--section">
        <h2>Projects</h2>
        <div className="projects">
          <div className="single--project">
            <a className="image--link" href="https://benjamin-tenzies.netlify.app/" target="_blank">
              <img
              className="project--image"
              src={tenziesImg}
              alt="tenzies game"
              />
            </a>
            <div className="project--details">
              <p className="project--name">Tenzies Game App</p>
              <p className="project--desc">
                I created the tenzies game app using React.js.
                This fun game application also uses local storage
                to enable players to keep a record of their highest scores.
              </p>
              <div className="project--links">
                  <a href="https://benjamin-tenzies.netlify.app/" target="_blank">
                    Live Website
                  </a>
                  <a href="https://github.com/BenjaminSemah/tenzies-game" target="_blank">
                    Source Code
                  </a>
              </div>
            </div>
          </div>
          <div className="single--project">
            <a className="image--link" href="https://better-runner.netlify.app/" target="_blank">
              <img
              className="project--image"
              src={betterrunnerImg}
              alt="tenzies game"
              />
            </a>
            <div className="project--details">
              <p className="project--name">Better Runner App</p>
              <p className="project--desc">
                This BetterRunner project is a website created for
                a neighborhood community of running enthusiasts.
                The website offers a platform for the community to publicize
                its events. And also to learn and share relevant information
                with members.
              </p>
              <div className="project--links">
                  <a href="https://better-runner.netlify.app/" target="_blank">
                    Live Website
                  </a>
                  <a href="https://github.com/BenjaminSemah/better-runner" target="_blank">
                    Source Code
                  </a>
              </div>
            </div>
          </div>
          <div className="single--project">
            <a className="image--link" href="https://cinemash.netlify.app/" target="_blank">
              <img
              className="project--image"
              src={cinimashImg}
              alt="tenzies game"
              />
            </a>
            <div className="project--details">
              <p className="project--name">Cinimash Comments Feature</p>
              <p className="project--desc">
                Assembled and led a team of three developers during Bootcamp to create
                core features and integrate third-party APIs. I implemented the
                comments feature. And I was also responsible for styling the
                comments sections of the application.
              </p>
              <div className="project--links">
                  <a href="https://cinemash.netlify.app/" target="_blank">
                    Live Website
                  </a>
                  <a href="https://github.com/BenjaminSemah/cinimash-app" target="_blank">
                    Source Code
                  </a>
              </div>
            </div>
          </div>
          <div className="single--project">
            <a className="image--link" href="https://happy-devs.netlify.app/" target="_blank">
              <img
              className="project--image"
              src={happyDevsImg}
              alt="tenzies game"
              />
            </a>
            <div className="project--details">
              <p className="project--name">Happy Devs (Landing Page)</p>
              <p className="project--desc">
                This concept for this project was to create a landing page for a developers' meetup.
                This fully responsive design of the website was all built using HTML, CSS, and JavaScript.
              </p>
              <div className="project--links">
                  <a href="https://benjamin-tenzies.netlify.app/" target="_blank">
                    Live Website
                  </a>
                  <a href="https://github.com/BenjaminSemah/tenzies-game" target="_blank">
                    Source Code
                  </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
