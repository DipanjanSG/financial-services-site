import React from "react";
import './Header.css';
import findUsOnFacebook from '../../assets/find-us-facebook-icon.svg';
import findUsOnTwitter from '../../assets/find-us-twitter-icon.svg';
import findUsOnInstagram from '../../assets/find-us-instagram-icon.svg';
import { Link } from "react-router-dom";

function Header()
{


    return (
        <header id = "footer" className="ms-financial-edu-website-header">
            <section  className="header-flex" >  


                <section>
                    <Link to="/" className="header-links">Home</Link>
                </section>
                <section>
                    <Link to="/services" className="header-links">Our Services</Link>
                </section>
                <section>
                    <Link to="/about-us" className="header-links">About Us</Link>
                </section>

                 <section>
                    <Link to="/our-team" className="header-links">Our Experience</Link>
                </section>

                <section>
                    <Link to="/success-story" className="header-links">Satisfied Customers</Link>
                </section>

                <section>
                    <Link to="/contact-us" className="header-links">Contact Us</Link>
                </section>

            </section>
        </header>
    )

}

export default Header;