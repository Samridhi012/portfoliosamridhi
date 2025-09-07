import "./projects.css";
import ProjectCard from "./ProjectCard.jsx";

function Projects() {
  return (
    <section className="projects">
        <h2 class="project-heading">PROJECTS</h2>
        <div className="project-container">
            <div className="project-card-container">
                <ProjectCard />
            </div>
        </div>
    </section>
  );
}

export default Projects;