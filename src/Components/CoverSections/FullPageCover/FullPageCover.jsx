import mahasamvitLogo from "../../../assets/mahasamvit-logo.png";
import financeServicesCover from "../../../assets/finance-services-cover.jpg";
import { Link } from "react-router-dom";

export default function FullPageCover()
{

    return (
        <>
            <div id="homepage-logo">
                <img src={mahasamvitLogo}/>
                <span>Mahasamvit Finance</span>
            </div>

            <div id="homepage-heading" >
                <section className="cover-heading">
                    
                    Mahasamvit <br/>
                    Financial  <br/> 
                    Services 
                
                    <span id="homepage-links"> 
                        <span>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <Link to="/course-categories"><span className="shrink-underline-white">Know our services</span></Link> </span> 
                    </span>
                    
                </section>
            </div>

             <div id="homepage-image">
                <div className="homepage-img-container">
                <img src={financeServicesCover}/>
                </div>
            </div>
         </>
         )
         


}