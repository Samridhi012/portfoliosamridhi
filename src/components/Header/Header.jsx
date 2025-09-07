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
            {/* <button class="custom-btn btn-3"><span>Read More</span></button> */}

            {/* <a className="resume-btn" href="#google link">
                <span>Download Resume</span>
            </a> */}

            <a href="https://www.google.com"><button className="resume-btn"><span>Download Resume</span></button></a>
        </div>
    );
}

export default Header;