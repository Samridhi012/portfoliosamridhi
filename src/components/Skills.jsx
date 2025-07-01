import SkillDisplay from "./SkillDisplay";

function Skills(){
    return(
        <div className="skills">
            <div className="frontend">
                <SkillDisplay
                    name="Frontend"
                />
            </div>
            <div className="backend"></div>
            <div className="database"></div>
            <div className="others"></div>
        </div>
    );
}

export default Skills;