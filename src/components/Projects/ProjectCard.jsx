import { projInfo } from "./projects.js";

function ProjectCard(){
    return (
        <>
            {projInfo.map((info, index) => (
                <div className="project-card" key={index}>
                    <div className="project-image">
                        <img src={info.image} alt="projects" className="project-pic"/>
                    </div>
                    <div className="project-content">
                        <h3 className="project-title">{info.title}</h3>
                        <p className="project-details">{info.description}</p>
                        <div className="project-tech">
                            {info.technologies.map((tech, idx) => (
                                <span className="logo" key={idx}>{tech}</span>
                            ))}
                        </div>
                        <a href={info.link} class="project-link">🔗View here</a>
                    </div>
                </div>
            ))}
        </>
    );
}

export default ProjectCard;

            // <div className="logos">
            //                     {info.technologies.map((tech, idx) => (
            //                         <span className="logo" key={idx}>{tech}</span>
            //                     ))}
            //                 </div>