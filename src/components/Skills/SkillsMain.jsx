import "./skills.css";
import SkillsCarousel from "./SkillsCarousel";

function Skills(){
    return(
        <section className="skills">
            <h1>SKILLS</h1>
            <div className="carousel-container">
	            {/* <button class="nav-arrow left">‹</button> */}
                <div className="skill-display">
                    {/* <SkillDisplay name="Frontend" />
                    <SkillDisplay name="Backend" />
                    <SkillDisplay name="Database" />
                    <SkillDisplay name="Others" /> */}
                    <SkillsCarousel />
                </div>
                {/* <button class="nav-arrow right">›</button> */}
            </div>
        </section>
    );
}

export default Skills;