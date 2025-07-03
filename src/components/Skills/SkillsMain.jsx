import SkillDisplay from "./SkillDisplay";

function Skills(){
    return(
        <section className="skills">
            <h1>SKILLS</h1>
            <div className="skill-display">
                <SkillDisplay name="Frontend" />
                <SkillDisplay name="Backend" />
                <SkillDisplay name="Database" />
                <SkillDisplay name="Others" />
            </div>
        </section>
    );
}

export default Skills;