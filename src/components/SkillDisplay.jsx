import { version } from "react";
import SkillFlashcard from "./SkillFlashcard";

function SkillDisplay(props){
    return(
        //FRONTEND
        // <div className={props.name.toLowerCase()}>
        <h2>{props.name}</h2>

            // {/* for (let i=0; i < frontendInfo.languages.length; i++) {
            //     <div className="flashcard-frontend-{i}">
            //         <SkillFlashcard /> 
            //     </div>
            // } */}

        {{props.name}+"Info" + ".languages" + .map((language, index) => (
            <div className={`flashcard-frontend-${index}`} key={index}>
                <SkillFlashcard skill={language.name} icon={language.icon} />
            </div>
        ))}

        // </div>

        //BACKEND
        //DATABASE
        //OTHERS
    );
}

export default SkillDisplay;


frontendInfo ={
    // "name" : "Frontend",
    "languages" : [
        {
            "name" : "HTML",
            "icon" : "fa-brands fa-html5"
        },
        {
            "name" : "CSS",
            "icon" : "fa-brands fa-css3-alt"
        },
        {
            "name" : "Bootstrap",
            "icon" : "fa-brands fa-bootstrap"
        }
        {
            "name" : "JavaScript",
            "icon" : "fa-brands fa-js"
        },
        {
            "name" : "React",
            "icon" : "fa-brands fa-react"
        }
    ]
}

backendInfo = {
    // "name" : "Backend",
    "languages" : [
        {
            "name" : "Node.js",
            "icon" : "fa-brands fa-node-js"
        },
        {
            "name" : "Express.js",
            "icon" : "fa-brands fa-node-js"
        }
    ]
}

databaseInfo = {
    // "name" : "Database",
    "languages" : [
        {
            "name" : "MySQL",
            "icon" : "fa-brands fa-node-js"
        },
        {
            "name" : "PostgreSQL",
            "icon" : "fa-brands fa-node-js"
        }
    ]
}

othersInfo = {
    // "name" : "Others",
    "languages" : [
        {
            "name" : "Python",
            "icon" : "fa-brands fa-python"
        },
        {
            "name" : "Java",
            "icon" : "fa-brands fa-java"
        },
        {
            "name" : "Canva",
            "icon" : "fa-brands fa-canva"
        },
        {
            "name" : "Git",
            "icon" : "fa fa-git"
        },
        {
            "name" : "Postman",
            "icon" : "fa fa-postman"
        }
    ]
}