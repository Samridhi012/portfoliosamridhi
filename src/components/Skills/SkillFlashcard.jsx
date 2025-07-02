function SkillFlashcard(props){
    return(
        <div className="skill-info" style={{ border: `1px solid ${props.color};` }}>
            <img src={props.icon} alt="language logo"/>
            <p>{props.skill}</p>
        </div>
    );
}

export default SkillFlashcard;
