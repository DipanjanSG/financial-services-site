import React from "react";
import './Footer.css';
import findUsOnFacebook from '../../assets/find-us-facebook-icon.svg';
import findUsOnTwitter from '../../assets/find-us-twitter-icon.svg';
import findUsOnInstagram from '../../assets/find-us-instagram-icon.svg';

function Footer()
{


    return (
    
    <footer id = "footer" className="ms-financial-edu-website-footer">
        <section id ="footer-contents" className="footer-flex" >  

            <section>
                <h2>About</h2>
                <span> Mahasamvit global financial services emmpowers
                   bring unique financial services to you.
                </span>
            </section>

            <section>
                <h2>Quick Links</h2>
                
                    <span>Accounting Courses</span><br></br>
                   <span>Finance Courses</span><br></br>
                    <span>Legal Courses</span>
                
            </section>

            <section>
                <h2>Follow us here</h2>

                <div id="find-us-on-social-media" className="ms-financial-edu-social-media-links">
                    <span>
                        <a href="https://www.instagram.com/financialsimplified/">
                            <img src={findUsOnInstagram}></img>
                        </a>
                    </span>

                    <span>
                        <a href="https://www.facebook.com/groups/2395673270697626">
                            <img src={findUsOnFacebook}></img>
                        </a>
                    </span>

                    <span>
                        <a href="https://x.com/ftfinancenews">
                            <img src={findUsOnTwitter}></img>
                        </a>
                    </span>
                </div>

                

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


    </footer>)

}

export default Footer;