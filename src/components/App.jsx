import Header from "./Header/Header";
import Home from "./Home/Home";
import Skills from "./Skills/SkillsMain";
import Experience from "./Experience/ExperienceMain";
import Projects from "./Projects/ProjectsMain.jsx"; 

function App() {
  return (
    <div className="app">
      <Header />
      <Home />
      <Skills />
      <Experience />
      <Projects />
    </div>
  );
}

export default App;
