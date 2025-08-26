import Header from "./Header/Header";
import Home from "./Home/Home";
import Skills from "./Skills/SkillsMain";
import Experience from "./Experience/ExperienceMain";
import {useState, useEffect} from "react";
import {useLocation} from "react-router-dom";

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

      {/* Conditional rendering of the resume button based on the current route */}
      {(showResumeBtn === true) ? (<a className="resume-btn" href="https://www.google.com"><span>Download Resume</span></a>) : null}

      <Skills />
      <Experience />
    </div>
  );
}

export default App;
