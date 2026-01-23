import './Services.css';
import OnlyTextCover from '../../Components/CoverSections/OnlyTextCover/OnlyTextCover';
import Faculty from '../Models/Faculty';
import whatsAppUs from "../../assets/whatsapp-us.png";
import TripleTiles from '../../Components/TripleTiles/TripleTiles';
import { useState } from 'react';
import PopUpExtraInfo from '../../Components/PopUps/PopUpExtraInfo/PopUpExtraInfo';
import CallUs from '../../assets/call-us.jpg';
import EmailUs from '../../assets/email-us.png';
import MailUs from '../../assets/mail-us.png';
import GetOurLocation from '../../assets/get-our-location.jpg';
import coverPic from '../../assets/ask-us-anything-cover.png';
import TradingPic from '../../assets/trading-pic.png';
import whatsAppLogo from '../../assets/whatsapp-logo.png';
import AskAQuestion from '../../Components/AskAQuestion/AskAQuestion';
import DualTilesUnequal from '../../Components/DualTilesUnequal/DualTilesUnequal';
import Investing from '../../assets/capital-markets.png'


export default function Services()
{

    var faculty1= new Faculty("" , "Ruchira Sen", [], "This course helped me understand concepts that always felt complicated before. The lessons were clear, practical, and easy to follow.", "x" ,[], "",[], [],"/assets/student4.png");
    var faculty2= new Faculty("" , "Sayani Das", [], "I never imagined learning could be this enjoyable and impactful. This institute transformed the way I think, study, and apply knowledge.", "x" , [],"",[], [],"/assets/student5.png");
    var faculty3= new Faculty("" , "Pallab Ghosh", [], "This course helped me understand concepts that always felt complicated before. The lessons were clear, practical, and easy to follow.",  "x" ,[], "",[], [],"/assets/student6.png");
    const [rowOnePics , setRowOnePics] = useState([EmailUs,MailUs,GetOurLocation]);
    const [rowTwoPics , setRowTwoPics] = useState([Investing,TradingPic]);

    const[showPopUp, setShowPopUp] = useState(false);

    const links = ["/service","/service"];
    const facultyList = [faculty1, faculty2, faculty3];
    
    const cssValues = {
                        facultyCardHeight: "80vh",
                        width : "30vw",
                        justifyContent : "space-evenly",
                     };

    const knowMoreSection = {
        isSectionVisible : false
    };

    const additionalInfos = [
        {  
           heading: "Shares",
           body: (<><p style={{textAlign: "center"}}>Click below button to start WhatsApp chat</p><a href="https://wa.me/919163509785?text=Hi
" target="_blank" rel="noopener nonreferrer"><img src={whatsAppLogo} style={{display: "block", margin: "auto auto" , width:"25%" , height: "auto"}} ></img></a></>)
        },

        {  
           heading: "Derivatives (F & O)",
           body: (<><p style={{textAlign: "center", fontSize:"5vh"}}>Kolkata : +91 88888 55555 <br></br> Bengaluru : +91 77777 44444 
                          <br></br>   Hyderabad : +91 77777 44444  <br></br> Lucknow : +91 77777 44444
                  </p></>)
        
        },

        
        {  
           heading: "Commodity",
           body: (<><AskAQuestion/></>)
        },

       
            
    ];

    const [additionalInfo, setAdditionalInfo] = useState({ heading: "",
           body: ""});
    
 const handleTileClick = (e)=>
    {
        let tileClickedText = e.target.textContent;
        setAdditionalInfo(additionalInfos.find((popUpText) => { return popUpText.heading === tileClickedText  } ));
        setShowPopUp(true);
        console.log(additionalInfo);
    };


    return(
        <section>
            <OnlyTextCover coverText={"Our Services"} coverPic={coverPic}/>

           <section className='tile-container'></section>
                <DualTilesUnequal careerLeftTile={"Investing"} careerRightTile={"Trading"} pics={rowTwoPics} handleTileClick={handleTileClick} isLink={true} links={links}></DualTilesUnequal>
            <section className='tile-container'></section>
        </section>
    );
}