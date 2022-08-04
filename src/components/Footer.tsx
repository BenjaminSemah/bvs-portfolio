import github_icon from "../assets/socials-icons/github.png"
import linkedin_icon from "../assets/socials-icons/linkedin.png"
import twitter_icon from "../assets/socials-icons/twitter.png"
import email_icon from "../assets/socials-icons/email.png"

export function Footer() {
  return (
    <section className="footer--section">
      <div className="footer--socials">
        <div className="socials--icons">
          <a className="footer--links" href="" target="_blank">
            <img className="footer--img" src={github_icon} alt="GitHub" />
          </a>
          <a className="footer--links" href="" target="_blank">
            <img className="footer--img" src={linkedin_icon} alt="LinkedIn" />
          </a>
          <a className="footer--links" href="" target="_blank">
            <img className="footer--img" src={twitter_icon} alt="Twitter" />
          </a>
          <a className="footer--links" href="" target="_blank">
            <img className="footer--img" src={email_icon} alt="Mail" />
          </a>
        </div>
      </div>
      <div className="signature">
        <p className="built--by">Designed and built by</p>
        <p className="name--footer">(c) 2022 | Benjamin Semah </p>
      </div>
    </section>
  );
}
