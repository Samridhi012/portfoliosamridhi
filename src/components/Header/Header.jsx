import logo from "../../images/s.white.withoutBG.png";
import "./header.css";
import {useState, useEffect} from "react";
import {useLocation} from "react-router-dom";

function Header(){
    // const [showResumeBtn, setShowResumeBtn] = useState(false);
    // const location = useLocation();

    // useEffect(() => {
    //     setShowResumeBtn(location.pathname !== "/");
    // }, [location.pathname]);

    return(
        <div className="navbar">
            <a href="main"><img src={logo} alt="Samridhi Sharma Logo"/></a>
            <ul>
                <li>Home</li>
                <li>Skills</li>
                <li>Experience</li>
                <li>Projects</li>
                <li>Education</li>
                <li>Contact Me</li>
            </ul>
            <a href="https://drive.google.com/file/d/1hUbLEFE_oRiY_zBH8ulNZzTzt2Uw8bWL/view?usp=sharing"><button className="resume-btn"><span>Download Resume</span></button></a>
            {/* {(showResumeBtn === true) ? (<a className="resume-btn" href="https://drive.google.com/file/d/1hUbLEFE_oRiY_zBH8ulNZzTzt2Uw8bWL/view?usp=sharing"><span>Download Resume</span></a>) : null} */}
        </div>
    );
}

export default Header;