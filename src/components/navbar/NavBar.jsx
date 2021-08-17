import "./navbar.css";
import WebsiteLogo from "./Website Logo.png";

function NavBar() {

    return ( 
        <div className="navbar">

            <section className="navbar-section-left"> 

                <a href="/" className="tab" >Home</a>
                <a href="#experiences" className="tab" >Experiences</a>

            </section>


            <section className="navbar-logo">

                <a href="/" className="logo">
                    <img src={WebsiteLogo} alt=""></img>
                </a> 
                
            </section>

            <section className="navbar-section-right"> 
            
                <a href="#projects" className="tab" >Projects</a>
                <a href="#contact" className="tab">Contact</a>

            </section>

        </div>
        
    )
};

export default NavBar
