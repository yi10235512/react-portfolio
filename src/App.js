import React, { createRef, useEffect, useState } from "react";
import Navbar from "./components/navbar/Navbar";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

const App = () => {
  const [offsets, setOffsets] = useState({})
  const aboutRef = createRef();
  const skillsRef = createRef();
  const projectsRef = createRef();
  const contactRef = createRef();

  useEffect(() => {
    let aboutOffset = aboutRef.current ? aboutRef.current.offsetTop - 100 : 0
    let skillsOffset = skillsRef.current ? skillsRef.current.offsetTop / 2 : 0
    let projectsOffset = projectsRef.current ? skillsOffset + (projectsRef.current.offsetTop - skillsOffset) / 2 : 0
    let contactOffset = contactRef.current ? contactRef.current.offsetTop - (contactRef.current.offsetTop - projectsRef.current.offsetTop) / 5 : 0
    setOffsets({
      "aboutOffset": aboutOffset,
      "skillsOffset": skillsOffset,
      "projectsOffset": projectsOffset,
      "contactOffset": contactOffset
    })
  }, [])

  return (
    <div>
      <Navbar offsets={offsets} />
      <About ref={aboutRef} />
      <Skills ref={skillsRef} />
      <Projects ref={projectsRef} />
      <Contact ref={contactRef} />
      <Footer />
    </div>
  );
}

export default App;
