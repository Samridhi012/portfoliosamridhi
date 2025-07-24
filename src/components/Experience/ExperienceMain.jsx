import ExpCard from "./ExpCard";
import "./exp.css";

function Experience(){
    return(
        <section className="experience">
            <div className="container">
                <h1>EXPERIENCE</h1>
                <div className="cards cards-container">
                    <ExpCard />
                </div>
            </div>
        </section>
    );
}

export default Experience;