import logo from "../../images/s.white.withoutBG.png";
import "./header.css";

function Header(){
    return(
        <div className="navbar">
            <img src={logo} alt="Samridhi Sharma Logo"/>
            <ul>
                <li>Home</li>
                <li>Skills</li>
                <li>Experience</li>
                <li>Projects</li>
                <li>Education</li>
                <li>Contact Me</li>
            </ul>
        </div>
    );
}

export default Header;