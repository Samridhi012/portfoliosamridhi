function SkillFlashcard(props){
    return(
        <div className="skill-info">
            <img src={props.icon} alt="language logo"/>
            <p>{props.skill}</p>
        </div>
    );
}

export default SkillFlashcard;
