import React from "react";
import './Header.css';
import findUsOnFacebook from '../../assets/find-us-facebook-icon.svg';
import findUsOnTwitter from '../../assets/find-us-twitter-icon.svg';
import findUsOnInstagram from '../../assets/find-us-instagram-icon.svg';

function Header()
{


    return (
        <header id = "footer" className="ms-financial-edu-website-header">
            <section  className="header-flex" >  

                <section>
                    About
                </section>

                <section>
                    Client Stories
                </section>

                <section>
                    Our Services
                </section>
    
                <section>
                    Contact Us
                </section>

            </section>
        </header>
    )

}

export default Header;