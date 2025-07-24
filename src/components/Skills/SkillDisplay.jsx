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
            <div className={`box ${props.name.toLowerCase()}`}>
                {selectArray.languages.map((language, id) => (
                    <SkillFlashcard skill={language.name} icon={language.icon} key={id} />
                ))}
            </div>    
        </div>
    );
}

export default SkillDisplay;
