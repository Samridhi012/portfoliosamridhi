import SkillDisplay from "./SkillDisplay";

function Skills(){
    return(
        <div className="skills">
            {/* <h1>SKILLS</h1> */}
            <div className="skill-display">
                <SkillDisplay name="Frontend" />
                <SkillDisplay name="Backend" />
                <SkillDisplay name="Database" />
                <SkillDisplay name="Others" />
            </div>
        </div>
    );
}

export default Skills;