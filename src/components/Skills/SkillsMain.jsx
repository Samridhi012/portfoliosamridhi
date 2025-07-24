import "./skills.css";
import SkillsCarousel from "./SkillsCarousel";

function Skills(){
    return(
        <section className="skills">
            <h1>SKILLS</h1>
            <div className="carousel-container">
                <div className="skill-display">
                    <SkillsCarousel />
                </div>
            </div>
        </section>
    );
}

export default Skills;