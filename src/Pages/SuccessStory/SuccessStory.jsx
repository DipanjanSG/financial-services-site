import './SuccessStory';
import HorizontalSectionWithPic  from '../../Components/HorizontalSectionWithPic/HorizontalSectionWithPic';
import TileContainer from '../../Components/TileContainer/TileContainer';
import OnlyTextCover from '../../Components/CoverSections/OnlyTextCover/OnlyTextCover';
import TileContainerContext from '../../Contexts/TileContainerContext';
import coverPic1 from '../../assets/student1.png';
import coverPic2 from '../../assets/student2.png';
import coverPic3 from '../../assets/student3.png';
import coverPic from '../../assets/success-dtories-cover.png';
import Faculty from '../Models/Faculty';


export default function SuccessStory()
{

    var faculty1= new Faculty("" , "Sayak Saha", [], "The experience was smooth and well-structured from start to finish. The content and guidance exceeded expectations.", "x" ,[], "",[], [],"/assets/student4.png");
    var faculty2= new Faculty("" , "DIpanjan Pal", [], "Clear communication and thoughtful delivery made a real difference. I would confidently recommend this to others.", "x" , [],"",[], [],"/assets/student5.png");
    var faculty3= new Faculty("" , "Oishi Dutta", [], "The platform is intuitive and the support team is responsive. It helped me achieve exactly what I was looking for.",  "x" ,[], "",[], [],"/assets/student6.png");
   
    const facultyList = [faculty1, faculty2, faculty3];
    
    const cssValues = {
                        facultyCardHeight: "80vh",
                        width : "30vw",
                        justifyContent : "space-evenly",
                     };

    const knowMoreSection = {
        isSectionVisible : false
    };


    return(

        <section>
            <OnlyTextCover coverText={"Customer Feedback"} coverPic={coverPic} />


            <TileContainerContext.Provider value={{cssValues, knowMoreSection}}>
               <TileContainer facultyList={facultyList}/>
            </TileContainerContext.Provider>

            <HorizontalSectionWithPic picOnLeft={false} pic={coverPic2} heading={"High-quality service combined with practical insights. The overall experience felt professional and reliable."} text={"Satayoki Dey"}/>

            <HorizontalSectionWithPic picOnLeft={true} pic={coverPic1} heading={"Attention to detail and consistent support stood out the most. This has been a genuinely valuable experience."} text={"Ronen Sen"}/>
            
            

            <HorizontalSectionWithPic picOnLeft={false} pic={coverPic3} heading={"Well-organized, easy to follow, and impactful. I’m very satisfied with the results and outcomes."} text={"Mamata Gupto"}/>


        </section>
    );
}