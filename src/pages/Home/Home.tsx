import bvsPhoto from "../../assets/BenjaminSemah.jpg";
import tenziesImg from "../../assets/tenzies.png";
import betterrunnerImg from "../../assets/betterrunner.png";
import cinimashImg from "../../assets/cinimash.png";
import happyDevsImg from "../../assets/happyDevs.png";
import "./Home.css";

export function Home() {
  return (
    <>
      <div id="home-page"></div>
      <header className="header">
        <img className="bvs-photos" src={bvsPhoto} alt="benjamin-semah" />
        <div className="header--content">
          <p className="hi--there">Hi there!👋 My name is</p>
          <h2 className="header--benjamin">Benjamin</h2>
          <div className="dev--sentence">
            <p className="header--developer">And I'm a </p>
            <div>
              <p className="header--developer">Software Developer</p>
              <div className="header--underline"></div>
            </div>
          </div>
        </div>
      </header>
      <section className="about--skills" id="about">
      <div className="left--about">
        <h2 className="about--title">About</h2>
        {/* <img className="bvs-photo" src={bvsPhoto} alt="benjamin-semah" /> */}
        <p className="about--text">
          I'm a software developer with a passion for web accessibility and excellent user experiences.
          Currently looking for a frontend developer position.
          <br/>
          <br/>
          Previously, I've worked as a graphic designer, photographer and video editor. From these experiences,
          I bring to web development a knack for creating appealing visuals and memorable experiences for users.
          <br/>
          <br/>
          I'm an advocate of the <a className="link--in--text" href="https://www.youtube.com/watch?v=hiiEeMN7vbQ" target="_blank">growth mindset</a> and always strive for continuous improvement.
          I also love <a className="link--in--text" href="https://benjaminsemah.hashnode.dev/" target="_blank">writing</a> and sharing what I learn with others. When I'm not writing code, you'll likely find me enjoying reggae music, reading a book or running a 5km distance.
        </p>
        </div>
        <div className="skills--tech">
          <h2 className="skills--title">Skills/Technologies</h2>
          {/* <p>I'm skilled in solving problems with the following technologies</p> */}
          <div className="skills--btns">
            <button>JavaScript</button>
            <button>React</button>
            <button>TypeScript</button>
            <button>Redux</button>
            <button>Bootstrap</button>
            <button>Tailwind</button>
            <button>HTML</button>
            <button>CSS</button>
            <button>Git</button>
            <button>GitHub</button>
            <button>UI/UX</button>
            <button>Figma</button>
          </div>
        </div>
      </section>
      <section className="projects--section" id="projects">
        <h2>Projects</h2>
        <div className="projects">
          <div className="single--project">
            <a
              className="image--link"
              href="https://benjamin-tenzies.netlify.app/"
              target="_blank"
            >
              <img
                className="project--image"
                src={tenziesImg}
                alt="tenzies game"
              />
            </a>
            <div className="project--details">
              <p className="project--name">Tenzies Game App</p>
              <div className="project--underline"></div>
              <p className="project--desc">
                The tenzies game application is built with React. It also uses local storage to enable
                players to keep recored of their highest scores. Its a fun game
                that can be enjoyed by all.
              </p>
              <div className="project--links">
                <a href="https://benjamin-tenzies.netlify.app/" target="_blank">
                  Live Website
                </a>
                <a
                  href="https://github.com/BenjaminSemah/tenzies-game"
                  target="_blank"
                >
                  Source Code
                </a>
              </div>
            </div>
          </div>
          <div className="single--project">
            <a
              className="image--link"
              href="https://better-runner.netlify.app/"
              target="_blank"
            >
              <img
                className="project--image"
                src={betterrunnerImg}
                alt="tenzies game"
              />
            </a>
            <div className="project--details">
              <p className="project--name">Better Runner App</p>
              <div className="project--underline"></div>
              <p className="project--desc">
                The BetterRunner website is created for a
                community of running enthusiasts. It provides a
                platform to publicize events and share relevant
                information with members.
              </p>
              <div className="project--links">
                <a href="https://better-runner.netlify.app/" target="_blank">
                  Live Website
                </a>
                <a
                  href="https://github.com/BenjaminSemah/better-runner"
                  target="_blank"
                >
                  Source Code
                </a>
              </div>
            </div>
          </div>
          <div className="single--project">
            <a
              className="image--link"
              href="https://cinemash.netlify.app/"
              target="_blank"
            >
              <img
                className="project--image"
                src={cinimashImg}
                alt="tenzies game"
              />
            </a>
            <div className="project--details">
              <p className="project--name">Cinimash Comments Feature</p>
              <div className="project--underline"></div>
              <p className="project--desc">
                Led a team of three developers to
                create core features and integrate third-party APIs.
                I was responsible for implementing and
                styling the comments feature of the application.
              </p>
              <div className="project--links">
                <a href="https://cinemash.netlify.app/" target="_blank">
                  Live Website
                </a>
                <a
                  href="https://github.com/BenjaminSemah/cinimash-app"
                  target="_blank"
                >
                  Source Code
                </a>
              </div>
            </div>
          </div>
          <div className="single--project">
            <a
              className="image--link"
              href="https://happy-devs.netlify.app/"
              target="_blank"
            >
              <img
                className="project--image"
                src={happyDevsImg}
                alt="tenzies game"
              />
            </a>
            <div className="project--details">
              <p className="project--name">Happy Devs (Landing Page)</p>
              <div className="project--underline"></div>
              <p className="project--desc">
                This concept for this project was to create a landing page for a
                developers' meetup. This fully responsive design of the website
                was all built using HTML, CSS, and JavaScript.
              </p>
              <div className="project--links">
                <a href="https://happy-devs.netlify.app/" target="_blank">
                  Live Website
                </a>
                <a
                  href="https://github.com/BenjaminSemah/happy-devs"
                  target="_blank"
                >
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
