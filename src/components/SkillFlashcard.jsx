function SkillFlashcard(props){
    return(
        <div className="skill-flashcard">
            <i className={props.icon}></i>
            <h3>{props.skill}</h3>
        </div>
    );
}

export default SkillFlashcard;

// skillInformation={
//     "name" : "HTML",
//     "iDescription" : "fa-brands fa-html5"
// }