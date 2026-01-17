import './SuccessStory';
import HorizontalSectionWithPic  from '../../Components/HorizontalSectionWithPic/HorizontalSectionWithPic';
import SingleTilePic from '../../Components/SingleTilePic/SingleTilePic';
import TileContainer from '../../Components/TileContainer/TileContainer';
import OnlyTextCover from '../../Components/CoverSections/OnlyTextCover/OnlyTextCover';
import TileContainerContext from '../../Contexts/TileContainerContext';
import coverPic1 from '../../assets/client1.png';
import coverPic2 from '../../assets/client2.png';
import coverPic3 from '../../assets/client3.png';
// import coverPic3 from '../../assets/student3.png';
import coverPic from '../../assets/success-dtories-cover.png';
import Faculty from '../Models/Faculty';
import MarketInsights from '../../Components/MarketInsights/MarketInsights.jsx';
import marketInsightsPic from  '../../assets/market-insights-december.jpg';



export default function SuccessStory()
{

    var faculty1= new Faculty("" , "Sayak Saha", [], "The experience was smooth and well-structured from start to finish. The content and guidance exceeded expectations.", "x" ,[], "",[], [],"/assets/client1.png");
    var faculty2= new Faculty("" , "DIpanjan Pal", [], "Clear communication and thoughtful delivery made a real difference. I would confidently recommend this to others.", "x" , [],"",[], [],"/assets/client1.png");
    var faculty3= new Faculty("" , "Oishi Dutta", [], "The platform is intuitive and the support team is responsive. It helped me achieve exactly what I was looking for.",  "x" ,[], "",[], [],"/assets/student6.png");
   
    const facultyList = [faculty1, faculty2];
    
    const cssValues = {
                        facultyCardHeight: "80vh",
                        width : "30vw",
                        justifyContent : "space-evenly",
                     };

    const knowMoreSection = {
        isSectionVisible : false
    };

    const singleTileType = SingleTilePic;

   
   
    const courseDetails = {
   
         syllabusModules : 
         [
           {
               title: "Our Younger Clients",
               smallText: "Kartik Das",
               name: "The quality, attention to detail, and overall professionalism truly stand out. Everything was handled smoothly, and expectations were met exactly as promised.",
               image: coverPic3,

               subModules: [
                  
                 {
                    smallText: "Kartik Das",
                    name: "The quality, attention to detail, and overall professionalism truly stand out. Everything was handled smoothly, and expectations were met exactly as promised.",
                    details: "p",
                    image: coverPic3
                 },
                   
                 {
                    smallText: "Biswajeet Das",
                    name: "The quality, attention to detail, and overall professionalism truly stand out. Everything was handled smoothly, and expectations were met exactly as promised.",
                    details: "p",
                    image: coverPic3
                 },
                 {
                    smallText: "Om Sharma",
                    name: "The quality, attention to detail, and overall professionalism truly stand out. Everything was handled smoothly, and expectations were met exactly as promised.",
                    details: "p",
                    image: coverPic3
                 },
                 {
                    smallText: "Mamata Banerjee",
                    name: "The quality, attention to detail, and overall professionalism truly stand out. Everything was handled smoothly, and expectations were met exactly as promised.",
                    details: "p",
                    image: coverPic3
                 }
               ]
                }
                ,
               // {
               // name: "x",
               // subModules: [
                  
               //   {
               //      name: "x",
               //      details: "p"
               //   }
               // ]
               // }
   
            
       ]
   
     }
    return(

        <section>
            <OnlyTextCover coverText={"Customer Feedback"} coverPic={coverPic} />


            <TileContainerContext.Provider value={{cssValues, knowMoreSection}}>
               <TileContainer facultyList={facultyList} singleTileType={singleTileType}/>
            </TileContainerContext.Provider>

           <HorizontalSectionWithPic picOnLeft={true} pic={coverPic2} heading={"Suchanda Sen"} text={"The quality, attention to detail, and overall professionalism truly stand out. Everything was handled smoothly, and expectations were met exactly as promised."}/>
           <HorizontalSectionWithPic picOnLeft={false} pic={coverPic2} heading={"Kartik Pal"} text={"The quality, attention to detail, and overall professionalism truly stand out. Everything was handled smoothly, and expectations were met exactly as promised."}/>
          
           <MarketInsights courseDetails={courseDetails} knowMoreSection={knowMoreSection}/>
        
        
           <TileContainerContext.Provider value={{cssValues, knowMoreSection}}>
               <TileContainer facultyList={facultyList} singleTileType={singleTileType}/>
           </TileContainerContext.Provider>

            
            



        </section>
    );
}