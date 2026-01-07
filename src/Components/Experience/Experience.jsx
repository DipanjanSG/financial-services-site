import './Experience.css'
// import financeStudent from "../../assets/finance-student.jpg";
import mahasamvitLogo from "../../assets/mahasamvit-logo.png";
import financeServicesCover from "../../assets/finance-services-cover.jpg";
// import { Link } from "react-router-dom";
// import HorizontalSectionWithPic  from '../../Components/HorizontalSectionWithPic/HorizontalSectionWithPic';
// import { createContext } from 'react'; 
import KnowMoreButton from '../../Components/Buttons/KnowMoreButton/KnowMoreButton';


function Experience({coverPic}) {

  return (


      <div className="experience-container">

        <div id="homepage-image">
            <div className="homepage-img-container">
               <img src={coverPic}/>
                <div className="experience-section-container" >
                  <section className="experience-cover-heading">
                    <span className="experience-emphasis">
                      25
                    </span>
                    <br></br> years of experience <br></br>in money management</section>
            </div>
            </div>
        </div>

{/*         
        <div className="experience-section-container" >
            <section className="experience-cover-heading">
              <span className="experience-emphasis">
                25
              </span>

              <br></br> years of experience <br></br>in money management</section>
        </div>
           */}
        
      

      </div>

  ) 
}

export default Experience
