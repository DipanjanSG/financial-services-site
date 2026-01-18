import mahasamvitLogo from "../../../assets/mahasamvit-logo.png";
import { Link } from "react-router-dom";

export default function FullPageCover({coverPic, coverText, linkText})
{

    return (
        <>
            <div id="homepage-logo">
                <img src={mahasamvitLogo}/>
                <span>Mahasamvit Finance</span>
            </div>

            <div id="homepage-heading" >
                <section className="cover-heading">
                    
                   {coverText[0]}  <br/>
                   {coverText[1]}  <br/> 
                   {coverText[2]}  
                
                    {linkText &&
                        
                        <span id="homepage-links"> 
                        <span>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <Link to="/course-categories"><span className="shrink-underline-white">{linkText}</span></Link> </span> 
                    </span>}
                    
                </section>
            </div>

             <div id="homepage-image">
                <div className="homepage-img-container">
                <img src={coverPic}/>
                </div>
            </div>
         </>
         )
         


}