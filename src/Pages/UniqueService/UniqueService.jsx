import './UniqueService.css'
import HorizontalSectionWithPic  from '../../Components/HorizontalSectionWithPic/HorizontalSectionWithPic';
import topPic from '../../assets/unique-teaching.png';
import TileContainerContext from '../../Contexts/TileContainerContext';
import Faculty from '../Models/Faculty';
import TileContainer from '../../Components/TileContainer/TileContainer';
import KnowMoreButton from '../../Components/Buttons/KnowMoreButton/KnowMoreButton';
import OnlyTextCover from '../../Components/CoverSections/OnlyTextCover/OnlyTextCover';
import coverPic from '../../assets/ask-us-anything-cover.png';
import experienceCoverPic from "../../assets/experience-cover.png";
import TripleTextSection from '../../Components/TripleTextSection/TripleTextSection';





export default function UniqueService()
{

    const cssValues = {
                        facultyCardHeight: "85vh",
                        width : "30vw",
                        justifyContent : "space-evenly",
                     };
    const knowMoreSection = {
        isSectionVisible : true,
        component: KnowMoreButton
    };

    var faculty1= new Faculty("" , "Constant Feedback", [], "Our faculty is a group of highly experienced educators and professionals who care about your learning journey. They combine deep subject knowle", "" ,[], "",[], [],"/assets/visual-learning-card.png");
    var faculty2= new Faculty("" , "Personalization", [], "I never imagined learning could be this enjoyable and impactful. This institute transformed the way I think, study, and apply knowledge.", "" , [],"",[], [],"/assets/cooperative-learning.png");
    var faculty3= new Faculty("" , "Transparency", [], "Start earning from day one while building your career foundation. Learn practical skills and put them to work immediately.",  "" ,[], "",[], [],"/assets/inquiry-based-learning.png");
    var faculty4= new Faculty("" , "Frequent Updates", [], "Our faculty is a group of highly experienced educators and professionals who care about your learning journey. They combine deep subject knowle", "" ,[], "",[], [],"/assets/differentiation-learning.png");
    var faculty5= new Faculty("" , "True Wealth Compounding", [], "I never imagined learning could be this enjoyable and impactful. This institute transformed the way I think, study, and apply knowledge.", "" , [],"",[], [],"/assets/high-tech-learning.png");
    var faculty6= new Faculty("" , "Risk Minimization", [], "Start earning from day one while building your career foundation. Learn practical skills and put them to work immediately.",  "" ,[], "",[], [],"/assets/behavior-management.png");

        
    const facultyListTop = [faculty1, faculty2, faculty3];  

    const facultyListBottom = [faculty4, faculty5, faculty6];  

    const coverText = ["200+ Clients",  "Managing over 2cr", "Avg Return 60%"];


    return(
        <section>
            <OnlyTextCover coverText={"We are Different"} coverPic={coverPic}/>
            <HorizontalSectionWithPic picOnLeft={true} pic={topPic} heading={"Our sincerity lies in giving you the best value for money"} text={""}/>
             <TileContainerContext.Provider value={{cssValues,knowMoreSection}}>
               <TileContainer facultyList={facultyListTop}/>
            </TileContainerContext.Provider>
            <Experience coverPic={experienceCoverPic}/>
              <TileContainerContext.Provider value={{cssValues,knowMoreSection}}>
               <TileContainer facultyList={facultyListBottom}/>
            </TileContainerContext.Provider>
            <TripleTextSection coverText={coverText}/>

        </section>
    );

}