import Carousel from "react-bootstrap/Carousel";
import articleOneImg from "../assets/articleOne.jpg";
import articleTwoImg from "../assets/articleTwo.jpg";
import articleThreeImg from "../assets/articleThree.jpg";
import articleFourImg from "../assets/articleFour.jpg";
import articleFiveImg from "../assets/articleFive.jpg";

export function Blog() {
  return (
    <section className="blog--section">
      <h2 className="sectionb--title">Blog Posts</h2>
      <div className="all--posts">
        <div className="single--post">
          <div className="article--img--div">
          <a
            className="article--image--link"
            href="https://benjaminsemah.hashnode.dev/how-to-remember-what-you-learn-from-coding-tutorials"
            target="_blank"
          >
            <img className="article--img" src={articleOneImg} />
          </a>
          </div>
          <div className="single--post--details">
            <a
              className="post--title"
              href="https://benjaminsemah.hashnode.dev/how-to-remember-what-you-learn-from-coding-tutorials"
              target="_blank"
            >
              How To Remember What You Learn From Coding Tutorials
            </a>
            <p className="post--desc">
              Coding tutorials are great. But, if you can't understand and
              remember what you learn, they might end up becoming a source of
              frustration. So what can we do about it?
              <br />
              {" "}
              <br />
              <a
                className="read--post"
                href="https://benjaminsemah.hashnode.dev/how-to-remember-what-you-learn-from-coding-tutorials"
                target="_blank"
              >
                {" "}
                Read more
              </a>
            </p>
          </div>
        </div>
        <div className="single--post">
          <div className="article--img--div">
          <a
            className="article--image--link"
            href="https://benjaminsemah.hashnode.dev/series/js-challenges"
            target="_blank"
          >
            <img className="article--img" src={articleTwoImg} />
          </a>
          </div>
          <div className="single--post--details three--posts ">
          <a
            className="post--title"
            href="https://benjaminsemah.hashnode.dev/series/js-challenges"
            target="_blank"
          >
            [Series] Solution to Common JavaScript Challenges
          </a>
          <p className="post--desc">
            This is a series of articles with solutions to 30+ JavaScript
            challenges. Each article includes a walkthrough explanation as well
            as the final solution.
            <br />
            {" "}
            <br />
            <a
              className="read--post"
              href="https://benjaminsemah.hashnode.dev/series/js-challenges"
              target="_blank"
            >
              {" "}
              Read more
            </a>
          </p>
          </div>
        </div>
        <div className="single--post">
          <div className="article--img--div">
          <a
            className="article--image--link"
            href="https://benjaminsemah.hashnode.dev/what-is-typescript-and-should-you-learn-it"
            target="_blank"
          >
            <img className="article--img" src={articleThreeImg} />
          </a>
          </div>
          <div className="single--post--details">
            <a
              className="post--title"
              href="https://benjaminsemah.hashnode.dev/what-is-typescript-and-should-you-learn-it"
              target="_blank"
            >
              JavaScript Vs TypeScript: A Comparison For Beginners
            </a>
            <p className="post--desc">
              What is TypeScript? In what ways is it simillar or different from
              JavaScript? What are the pros and cons of using TypeScript? Should
              you learn it as a beginner? These questions and more are addressed
              in this post.
              <br />
              {" "}
              <br />
              <a
                className="read--post"
                href="https://benjaminsemah.hashnode.dev/what-is-typescript-and-should-you-learn-it"
                target="_blank"
              >
                {" "}
                Read more
              </a>
            </p>
          </div>
        </div>
        <div className="single--post">
          <div className="article--img--div">
          <a
            className="article--image--link"
            href="https://benjaminsemah.hashnode.dev/what-i-learned-from-my-first-100-days-of-code"
            target="_blank"
          >
            <img className="article--img" src={articleFourImg} />
          </a>
          </div>
          <div className="single--post--details">
            <a
              className="post--title"
              href="https://benjaminsemah.hashnode.dev/what-i-learned-from-my-first-100-days-of-code"
              target="_blank"
            >
              What I Learned From Coding Consistently For 100 Days
            </a>
            <p className="post--desc">
              The 100 Days of Coding challenge requires participants to make a
              public commitment to code at least an hour a day for 100 days. And
              while at it, you share your progress, lessons and struggles
              publicly.
              <br />
              {" "}
              <br />
              <a
                className="read--post"
                href="https://benjaminsemah.hashnode.dev/what-i-learned-from-my-first-100-days-of-code"
                target="_blank"
              >
                {" "}
                Read more
              </a>
            </p>
          </div>
        </div>
        <div className="single--post">
          <div className="article--img--div">
          <a
            className="article--image--link"
            href="https://benjaminsemah.hashnode.dev/understanding-how-css-selectors-work-part-one"
            target="_blank"
          >
            <img className="article--img" src={articleFiveImg} />
          </a>
          </div>
          <div className="single--post--details three--posts four--posts">
          <a
            className="post--title"
            href="https://benjaminsemah.hashnode.dev/understanding-how-css-selectors-work-part-one"
            target="_blank"
          >
            Understanding How CSS Selectors Work
          </a>
          <p className="post--desc">
            This article provides an in-depth discussion of various CSS
            Selectors and how they work. Each selector is explained with an
            example that readers can use for practice.
            <br />
            {" "}
            <br />
            <a
              className="read--post"
              href="https://benjaminsemah.hashnode.dev/understanding-how-css-selectors-work-part-one"
              target="_blank"
            >
              {" "}
              Read more
            </a>
          </p>
          </div>
        </div>
        {/* <div className="single--post">
          <div className="article--img--div">
          <a
            className="article--image--link"
            href="https://benjaminsemah.hashnode.dev/understanding-how-css-selectors-work-part-one"
            target="_blank"
          >
            <img className="article--img" src={articleFiveImg} />
          </a>
          </div>
          <div className="single--post--details three--posts four--posts">
          <a
            className="post--title"
            href="https://benjaminsemah.hashnode.dev/how-to-remember-what-you-learn-from-coding-tutorials"
            target="_blank"
          >
            How To Remember What You Learn From Coding Tutorials
          </a>
          <p className="post--desc">
            Coding tutorials are great. But, if you can't understand and
            remember what you learn, they might end up becoming a source of
            frustration. So what can we do about it?
            <br />
            {" "}
            <br />
            <a
              className="read--post"
              href="https://benjaminsemah.hashnode.dev/how-to-remember-what-you-learn-from-coding-tutorials"
              target="_blank"
            >
              {" "}
              Read more
            </a>
          </p>
          </div>
        </div> */}
      </div>
      <a
        className="more--posts"
        href="https://benjaminsemah.hashnode.dev/"
        target="_blank"
      >
        See More Posts
      </a>
    </section>
  );
}
