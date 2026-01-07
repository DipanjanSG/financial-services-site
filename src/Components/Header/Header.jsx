import React from "react";
import './Header.css';
import findUsOnFacebook from '../../assets/find-us-facebook-icon.svg';
import findUsOnTwitter from '../../assets/find-us-twitter-icon.svg';
import findUsOnInstagram from '../../assets/find-us-instagram-icon.svg';

function Header()
{


    return (
    
    <header id = "footer" className="ms-financial-edu-website-header">
        <section id ="footer-contents" className="header-flex" >  

            <section>
                About
            </section>

            <section>
                Client Stories
            </section>

            <section>
                Our Services
            </section>
{/* 
            <section>
                <h2>Contact Us</h2>
                <p> 123 Financial District<br/> 
                    Kolkata, West Bengal <br/>
                    India 700001.
                </p>

                <p>+91 98765 43210</p>
                <p>contact@mahasamvit.com</p>
                
        </section> */}

            </section>


    </header>)

}

export default Header;