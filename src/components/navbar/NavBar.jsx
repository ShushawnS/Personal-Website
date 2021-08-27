import "./navbar.css";
import Pdf from "./Website Logo.png";
import { Button } from "@material-ui/core";

function NavBar() {

    return ( 
        <div className="navbar">

            <section className="navbar-section-left"> 

                <a href="#about" className="tab" >About</a>
                <a href="#projects" className="tab" >Projects</a>
                

            </section>

            
            <section className="navbar-logo">

                <a href = {Pdf} target = "_blank" className="logo">
                    <Button variant="contained" size="large" color="secondary"><b>Resume</b></Button>
                    {/*<img src={WebsiteLogo} alt=""></img>*/}
                </a> 
                
            </section>

            <section className="navbar-section-right"> 
            
                <a href="#experiences" className="tab" >Experiences</a>
                <a href="#contact" className="tab">Contact</a>

            </section>

        </div>
        
    )
};

export default NavBar
