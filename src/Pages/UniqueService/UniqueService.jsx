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
import Experience from '../../Components/Experience/Experience';
import SingleTilePicRound from '../../Components/SingleTilePicRound/SingleTilePicRound';
import KnowMoreButtonRound from '../../Components/Buttons/KnowMoreButtonRound/KnowMoreButtonRound';




export default function UniqueService()
{

    const cssValues = {
                        facultyCardHeight: "85vh",
                        width : "30vw",
                        justifyContent : "space-evenly",
                     };
    const knowMoreSection = {
        isSectionVisible : true,
        component: KnowMoreButtonRound
    };


    const singleTileType = SingleTilePicRound;

    var faculty1= new Faculty("" , "Constant Feedback", [], "Our faculty is a group of highly experienced educators and professionals who care about your learning journey. They combine deep subject knowle", "" ,[], "",[], [],"/assets/visual-learning-card.png");
    var faculty2= new Faculty("" , "Personalization", [], "I never imagined learning could be this enjoyable and impactful. This institute transformed the way I think, study, and apply knowledge.", "" , [],"",[], [],"/assets/cooperative-learning.png");
    var faculty3= new Faculty("" , "Transparency", [], "Start earning from day one while building your career foundation. Learn practical skills and put them to work immediately.",  "" ,[], "",[], [],"/assets/inquiry-based-learning.png");
    var faculty4= new Faculty("" , "Frequent Updates", [], "Our faculty is a group of highly experienced educators and professionals who care about your learning journey. They combine deep subject knowle", "" ,[], "",[], [],"/assets/differentiation-learning.png");
    var faculty5= new Faculty("" , "True Wealth Compounding", [], "I never imagined learning could be this enjoyable and impactful. This institute transformed the way I think, study, and apply knowledge.", "" , [],"",[], [],"/assets/high-tech-learning.png");
    var faculty6= new Faculty("" , "Risk Minimization", [], "Start earning from day one while building your career foundation. Learn practical skills and put them to work immediately.",  "" ,[], "",[], [],"/assets/behavior-management.png");

        
    const facultyListTop = [faculty1, faculty2, faculty3];  

    const facultyListBottom = [faculty4, faculty5, faculty6];  

    const coverText = ["200+ Clients",  "Managing over 2cr", "Avg Return 60%"];

    const largeText = ["Constant Feedback", "&" , "Customized services are our strengths"]

    return(
        <section>
            <OnlyTextCover coverText={"We are Different"} coverPic={coverPic}/>

            <TripleTextSection coverText={coverText}/>
            <Experience coverPic={experienceCoverPic} largeText={largeText}/>

             <TileContainerContext.Provider value={{cssValues,knowMoreSection}}>
               <TileContainer facultyList={facultyListTop} singleTileType={singleTileType}/>
            </TileContainerContext.Provider>
            
            <HorizontalSectionWithPic picOnLeft={true} pic={topPic} heading={"One of a kind"} text={"We act with honesty and fairness in everything we do.Trust is the foundation of our relationships with clients, partners, and each other."}/>

              <TileContainerContext.Provider value={{cssValues,knowMoreSection}}>
               <TileContainer facultyList={facultyListBottom} singleTileType={singleTileType}/>
            </TileContainerContext.Provider>
            
            

        </section>
    );

}