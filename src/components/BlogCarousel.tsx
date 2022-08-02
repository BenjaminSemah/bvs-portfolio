import Carousel from "react-bootstrap/Carousel";
import articleOneImg from "../assets/articleOne.jpg";
import articleTwoImg from "../assets/articleTwo.jpg";
import articleThreeImg from "../assets/articleThree.jpg";

export function BlogCarousel() {
  return (
    // <Carousel>
    //   <Carousel.Item>
    //     <img
    //       className="d-block w-100"
    //       src={articleOneImg}
    //       alt="First slide"
    //     />
    //     <Carousel.Caption>
    //       <h3>First slide label</h3>
    //       <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    //     </Carousel.Caption>
    //   </Carousel.Item>
    //   <Carousel.Item>
    //     <img
    //       className="d-block w-100"
    //       src={articleTwoImg}
    //       alt="Second slide"
    //     />
    //     <Carousel.Caption>
    //       <h3>Second slide label</h3>
    //       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    //     </Carousel.Caption>
    //   </Carousel.Item>
    //   <Carousel.Item>
    //     <img
    //       className="d-block w-100"
    //       src={articleThreeImg}
    //       alt="Third slide"
    //     />

    //     <Carousel.Caption>
    //       <h3>Third slide label</h3>
    //       <p>
    //         Praesent commodo cursus magna, vel scelerisque nisl consectetur.
    //       </p>
    //     </Carousel.Caption>
    //   </Carousel.Item>
    // </Carousel>
    <section className="blog--section">
      <h2 className="section--title">Blog Posts</h2>
      <div className="all--posts">
        <div className="single--post">
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
            <a
              className="read--post"
              href="https://benjaminsemah.hashnode.dev/how-to-remember-what-you-learn-from-coding-tutorials"
              target="_blank"
            >
              {" "}
              Read Post
            </a>
          </p>
        </div>
        <div className="single--post">
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
            <a
              className="read--post"
              href="https://benjaminsemah.hashnode.dev/what-i-learned-from-my-first-100-days-of-code"
              target="_blank"
            >
              {" "}
              Read Post
            </a>
          </p>
        </div>
        <div className="single--post">
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
            <a
              className="read--post"
              href="https://benjaminsemah.hashnode.dev/what-is-typescript-and-should-you-learn-it"
              target="_blank"
            >
              {" "}
              Read Post
            </a>
          </p>
        </div>
        <div className="single--post">
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
            <a
              className="read--post"
              href="https://benjaminsemah.hashnode.dev/series/js-challenges"
              target="_blank"
            >
              {" "}
              Read Post
            </a>
          </p>
        </div>
        <div className="single--post">
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
            <a
              className="read--post"
              href="https://benjaminsemah.hashnode.dev/understanding-how-css-selectors-work-part-one"
              target="_blank"
            >
              {" "}
              Read Post
            </a>
          </p>
        </div>
        <div className="single--post">
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
            <a
              className="read--post"
              href="https://benjaminsemah.hashnode.dev/how-to-remember-what-you-learn-from-coding-tutorials"
              target="_blank"
            >
              {" "}
              Read Post
            </a>
          </p>
        </div>
      </div>
      <a
        className="section--title more--posts"
        href="https://benjaminsemah.hashnode.dev/"
        target="_blank"
      >
        See More Posts
      </a>
    </section>
  );
}
