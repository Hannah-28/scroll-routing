import About from "./About";
import Contact from "./Contact";
import { useRef } from "react";

const Home = () => {
  const homeRef = useRef();
  const aboutRef = useRef();
  const contactRef = useRef();

  function handleHomeClick() {
    homeRef?.current?.scrollIntoView({ behavior: "smooth" });
  }
  function handleAboutClick() {
    aboutRef?.current?.scrollIntoView({ behavior: "smooth" });
  }

  function handleContactClick() {
    contactRef?.current?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div style={{ margin: "0", padding: "0" }}>
      <nav
        style={{
          width: "100%",
          background: "black",
          color: "white",
          height: "3em",
          display: "flex",
          alignItems: "center",
          position: "fixed",
          zIndex: "10000",
        }}
      >
        <ul
          style={{
            display: "flex",
            width: "100%",
            listStyle: "none",
            justifyContent: "space-around",
          }}
        >
          <li onClick={handleHomeClick}>Home</li>
          <li onClick={handleAboutClick}>About</li>
          <li onClick={handleContactClick}>Contact</li>
        </ul>
      </nav>
      <div ref={homeRef} style={{ height: "30vh", padding: "5em" }}></div>
      <About scroll={aboutRef} />
      <Contact scroll={contactRef} />
    </div>
  );
};
export default Home;
