import Header from "./Header/Header";
import Home from "./Home/Home";
import Skills from "./Skills/SkillsMain";
import Experience from "./Experience/ExperienceMain";
import {useState, useEffect} from "react";
import {useLocation} from "react-router-dom";
import Projects from "./Projects/ProjectsMain.jsx"; 

function App() {
  const [showResumeBtn, setShowResumeBtn] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setShowResumeBtn(location.pathname !== "/");
  }, [location.pathname]);

  return (
    <div className="app">
      <Header />
      <Home />

      //not working
      {/* Conditional rendering of the resume button based on the current route */}
      {(showResumeBtn === true) ? (<a className="resume-btn" href="https://drive.google.com/file/d/1hUbLEFE_oRiY_zBH8ulNZzTzt2Uw8bWL/view?usp=sharing"><span>Download Resume</span></a>) : null}

      <Skills />
      <Experience />
      <Projects />
    </div>
  );
}

export default App;
