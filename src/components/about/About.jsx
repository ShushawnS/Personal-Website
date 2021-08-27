import "./about.css";
import shushawn from "./shushawn.png";
import { Typography, Button } from "@material-ui/core";

import React from 'react'

function About() {
    return (
        <div className="about" id="about">

            <div className="about-top">
            <Typography variant="h4" className="text name">01. About Me <hr></hr></Typography>
            </div> 

            <div className="about-bottom"> 
                <section className="about-left">
                    left
                    {/*<img src={shushawn} alt="shushawnReal" className="shushawnReal" /> */}
                </section>

                <section className="about-right">
                    right
                </section>

            </div>

            

        </div>
    );
}

export default About
