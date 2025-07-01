import image1 from "../images/imgm1.png";
import image2 from "../images/imgm2.png";   
import image3 from "../images/imgm3.png";
import image4 from "../images/imgm4.png";

function Home(){
    return(
        <div className="home">

            <div className="home_image">
                <div className="home_parallax_img1">
                    <img src={image1} alt="first background layer"/>
                </div>
                <div className="home_parallax_img2">
                    <img src={image2} alt="second background layer"/>

                </div>
                <div className="home_parallax_img3">
                    <img src={image3} alt="third background layer"/>

                </div>
                <div className="home_parallax_img4">
                    <img src={image4} alt="fourth background layer"/>
                </div>
            </div>

            <div className="home_content">
                <p>Web <br/> Developer</p>
                <h1>SAMRIDHI SHARMA</h1>
            </div>

            {/* <div className="home_scroll">
                <a href="#about">
                    <i class="bx bx-mouse"></i>
                </a>
            </div> */}
        </div>
    );
}

export default Home;    