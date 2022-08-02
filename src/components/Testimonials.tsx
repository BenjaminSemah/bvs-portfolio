import Carousel from "react-bootstrap/Carousel";
import articleOneImg from "../assets/articleOne.jpg";
import articleTwoImg from "../assets/articleTwo.jpg";
import articleThreeImg from "../assets/articleThree.jpg";

export function Testimonials() {
  return (
    <Carousel>
      <Carousel.Item>
        {/* <img
          className="d-block w-100"
          src={articleOneImg}
          alt="First slide"
        /> */}
        <div className="single--testimonial">
          <img
            className="testimonial--img"
            src={articleOneImg}
            alt="First slide"
          />
          <h3>Emirjeta Veisllari</h3>
          <p>Software Developer, Albania</p>
          <p>
            He is happy to help when you ask him.
            Maybe the best coding partner I have had the pleasure of working with.
          </p>
        </div>
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      {/* <Carousel.Item>
        <img
          className="d-block w-100"
          src={articleTwoImg}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={articleThreeImg}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item> */}
    </Carousel>
  );
}
