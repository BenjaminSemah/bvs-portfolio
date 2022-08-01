import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { About } from "./pages/About";
import { Projects } from "./pages/Projects";
import { Blog } from "./pages/Blog";
// import { Container } from "react-bootstrap";
import { Navigation } from "./components/Navigation";
import "./App.css";

function App() {
  return (
    <>
      <Navigation />
      {/* <Container> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
        {/* <h1>APPLICATION</h1> */}
      {/* </Container> */}
    </>
  );
}

export default App;
