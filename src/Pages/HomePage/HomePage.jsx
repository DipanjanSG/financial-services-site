import './HomePage.css'
// import financeStudent from "../../assets/finance-student.jpg";
import mahasamvitLogo from "../../assets/mahasamvit-logo.png";
import financeServicesCover from "../../assets/finance-services-cover.jpg";
import HorizontalSectionWithPic  from '../../Components/HorizontalSectionWithPic/HorizontalSectionWithPic';
import weAreUnique from '../../assets/we-are-unique.png';
// import { Link } from "react-router-dom";
// import HorizontalSectionWithPic  from '../../Components/HorizontalSectionWithPic/HorizontalSectionWithPic';
// import teachingTechnique from '../../assets/academic-courses.png';
// import onlineLibrary from '../../assets/online-library.jpg';
import TileContainer from '../../Components/TileContainer/TileContainer';
import Faculty from '../Models/Faculty';
// import { createContext } from 'react'; 
import TileContainerContext from '../../Contexts/TileContainerContext.js';
import KnowMoreButtonRound from '../../Components/Buttons/KnowMoreButtonRound/KnowMoreButtonRound';
import KnowMoreButton from '../../Components/Buttons/KnowMoreButton/KnowMoreButton';
import experienceCoverPic from "../../assets/experience-cover.png";
import MarketInsights from '../../Components/MarketInsights/MarketInsights.jsx';
import FullPageCover from '../../Components/CoverSections/FullPageCover/FullPageCover.jsx';
import Experience from '../../Components/Experience/Experience';

// export const facultyCardContext = createContext();

function HomePage() {

   var faculty1= new Faculty("" , "Wealth Building", [], "Our faculty is a group of highly experienced educators and professionals who care about your learning journey. They combine deep subject knowle", "" ,[], "",[], [],"/assets/wealth-building.png","/faculty");///assets/wealth-building.png
   var faculty2= new Faculty("" , "Trading Services", [], "I never imagined learning could be this enjoyable and impactful. This institute transformed the way I think, study, and apply knowledge.", "" , [],"",[], [],"/assets/trading-service.png","/success-story");//
   var faculty3= new Faculty("" , "Mutual Funds Investing", [], "Start earning from day one while building your career foundation. Learn practical skills and put them to work immediately.",  "" ,[], "",[], [],"/assets/mutual-funds.png","/earn-while-learning");
   
   const facultyList = [faculty1, faculty2, faculty3];
   const cssValues = {
                        facultyCardHeight: "80vh",
                        width : "30vw",
                        justifyContent : "space-evenly",
                     };

   
    const knowMoreSection = {
        isSectionVisible : true,
        component: KnowMoreButtonRound
    };

    const courseDetails = [];

  return (


      <div>
         <FullPageCover/>

         <TileContainerContext.Provider value={{cssValues,knowMoreSection}}>
            <TileContainer facultyList={facultyList}/>
         </TileContainerContext.Provider>

         <MarketInsights courseDetails={courseDetails}/>

         <Experience/>
         <HorizontalSectionWithPic knowMoreLink="/our-values" picOnLeft={false} pic={weAreUnique} heading={"We are different"} text={"We act with honesty and fairness in everything we do.Trust is the foundation of our relationships with clients, partners, and each other."}/>

         
      </div>


// aguero font
// high field font
// migATE RUNALTO
       

      // <div id="homepage-image">
      //    <div id="image-finance-student" className="homepage-img-container">
      //          <img src={financeStudent}/>
      //    </div>
      // </div> 

      
      //    <HorizontalSectionWithPic knowMoreLink="/unique-teaching" picOnLeft={true} pic={teachingTechnique} heading={"Our Unique Teaching Methology"} text={"Our methodology focuses on conceptual clarity, guided practice, and reflective learning. We use structured frameworks and proven instructional techniques. Each topic progresses from foundational knowledge to advanced application."}/>

      //       <TileContainerContext.Provider value={{cssValues,knowMoreSection}}>
      //          <TileContainer facultyList={facultyList}/>
      //       </TileContainerContext.Provider>

      //    <HorizontalSectionWithPic knowMoreLink="/online-library" picOnLeft={false} pic={onlineLibrary} heading={"Our Online Library"} text={"Students today hardly have the time to sit down and read a paperback novel. They read everything on their laptop or smartphone or any internet-enabled device. This is because everything is available online at the tap of a few buttons."}/>
      // </div>
  

  ) 
}

export default HomePage
