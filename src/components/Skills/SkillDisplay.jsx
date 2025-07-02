import SkillFlashcard from "./SkillFlashcard";
import {frontendInfo, backendInfo, databaseInfo, othersInfo} from "./skillsData";

function SkillDisplay(props){
    let selectArray = {};
    switch (props.name.toLowerCase()) {
        case "frontend":
            selectArray = frontendInfo;
            break;
        case "backend":
            selectArray = backendInfo;
            break;
        case "database":
            selectArray = databaseInfo;
            break;
        default:
            selectArray = othersInfo;
            break;
    }

    return (
        <div className={`block ${props.name.toLowerCase()}`}>
            <h2>{props.name}</h2>
            <div className={`box ${props.name.toLowerCase()}`}>
                {selectArray.languages.map((language) => (
                    <SkillFlashcard skill={language.name} icon={language.icon} />
                ))}
            </div>    
        </div>
    );
}

export default SkillDisplay;
