import React from "react";
import './Footer.css';
import findUsOnFacebook from '../../assets/find-us-facebook-icon.svg';
import findUsOnTwitter from '../../assets/find-us-twitter-icon.svg';
import findUsOnInstagram from '../../assets/find-us-instagram-icon.svg';
import { Link } from "react-router-dom";
import mahasamvitLogo from "../../assets/mahasamvit-logo.png";


function Footer()
{


    return (
    
    <footer id = "footer" className="ms-financial-edu-website-footer">
        <section id ="footer-contents" className="footer-flex" >  
            <section className="footer-flex-sub">

                 <section>
                    <h2>Current Clients</h2>
                    <span> 200+ </span>
                </section>
                 <hr></hr>
                <section>
                    <h2>Who we are</h2>
                    <span> Mahasamvit global financial services emmpowers
                    bring unique financial services to you.
                    </span>
                </section>
               
               
            </section>


            <section className="footer-flex-sub footer-logo-section">
                <section>
                    <img src={mahasamvitLogo} className="footer-logo"></img>
                    <h2>Mahasamvit Financial Services Ltd.</h2>
                   
                </section>
            </section>


             <section className="footer-flex-sub ">

                 <section>
                <h2>We are On Social media</h2>

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
             <hr></hr>
            <section>
                <h2>Quick Links</h2>
                
                    {/* <span> <Link to="/about-us" className="header-links">What we Do</Link></span><br></br> */}
                   <span><Link to="/about-us" className="header-links">Contact Us</Link></span><br></br>
                    <span><Link to="/about-us" className="header-links">Client Testimonials</Link></span>
                
            </section>
           
           
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