import './ContactUs.css';
import OnlyTextCover from '../../Components/CoverSections/OnlyTextCover/OnlyTextCover';
import Faculty from '../Models/Faculty';
import whatsAppUs from "../../assets/whatsapp-us.png";
import TripleTilesUnequal from '../../Components/TripleTilesUnequal/TripleTilesUnequal';
import { useState } from 'react';
import DualTilesUnequal from '../../Components/DualTilesUnequal/DualTilesUnequal';
import PopUpExtraInfo from '../../Components/PopUps/PopUpExtraInfo/PopUpExtraInfo';
import CallUs from '../../assets/call-us.jpg';
import EmailUs from '../../assets/email-us.png';
import MailUs from '../../assets/mail-us.png';
import GetOurLocation from '../../assets/get-our-location.jpg';
import coverPic from '../../assets/ask-us-anything-cover.png';
import whatsAppLogo from '../../assets/whatsapp-logo.png';
import AskAQuestion from '../../Components/AskAQuestion/AskAQuestion';


export default function ContactUs()
{

    var faculty1= new Faculty("" , "Ruchira Sen", [], "This course helped me understand concepts that always felt complicated before. The lessons were clear, practical, and easy to follow.", "x" ,[], "",[], [],"/assets/student4.png");
    var faculty2= new Faculty("" , "Sayani Das", [], "I never imagined learning could be this enjoyable and impactful. This institute transformed the way I think, study, and apply knowledge.", "x" , [],"",[], [],"/assets/student5.png");
    var faculty3= new Faculty("" , "Pallab Ghosh", [], "This course helped me understand concepts that always felt complicated before. The lessons were clear, practical, and easy to follow.",  "x" ,[], "",[], [],"/assets/student6.png");
    const [rowOnePics , setRowOnePics] = useState([EmailUs,MailUs,GetOurLocation]);
    const [rowTwoPics , setRowTwoPics] = useState([CallUs,whatsAppUs]);

    const[showPopUp, setShowPopUp] = useState(false);

    
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
           heading: "WhatsApp",
           body: (<><p style={{textAlign: "center",fontSize:"120%"}}>Click below button to start WhatsApp chat</p><a href="https://wa.me/919163509785?text=Hi
" target="_blank" rel="noopener nonreferrer"><img src={whatsAppLogo} style={{display: "block", margin: "auto auto" , width:"50%" , height: "auto"}} ></img></a></>)
        },

        {  
           heading: "Call",
           body: (<><p style={{textAlign: "center", fontSize:"150%"}}>Kolkata : +91 88888 55555 <br></br> Bengaluru : +91 77777 44444 
                          <br></br>   Hyderabad : +91 77777 44444  <br></br> Lucknow : +91 77777 44444
                  </p></>)
        
        },

        
        {  
           heading: "E-mail",
           body: (<><AskAQuestion/></>)
        },


        {  
           heading: "Mail",
           body:  (<><p style={{textAlign: "center", fontSize:"150%"}}>Mahasamvit Int. Ltd<br></br>20/2, 2nd Floor, 
           3rd Cross, 14th Main Rd,
                          <br></br>E Block, Sahakar Nagar<br></br>Bengaluru, Karnataka-560092<br></br>India
                  </p></>)
        },
         
{
  heading: "Office Location",
  body: (
    <><section style={{ 
        height: "150%",
        width: "100%",
        }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.639092736799!2d77.58949937490729!3d13.05862958726482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae190032da19f9%3A0x79b54cb9ad304ff8!2sMahasamvit%20International%20Limited!5e0!3m2!1sen!2sin!4v1765285092149!5m2!1sen!2sin"
        style={{ border: 0 ,
             display: "block",
        margin: "0 auto",
        width: "90%",      // <-- MUST reduce width so centering is visible
        height: "95%"
        }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      </section>
    </>
  )
}


               
       
            
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
            <OnlyTextCover coverText={"Drop us a note"} coverPic={coverPic}/>

            {/* <p className='quick-contact'> Drop a note or Pay us a visit </p>   */}
            

            <section className='tile-container'>
            <TripleTilesUnequal careerLeftTile={"E-mail"} careerRightTopTile={"Mail"} careerRightBottomTile={"Office Location"} pics={rowOnePics} handleTileClick={handleTileClick} isLink={false}></TripleTilesUnequal>
            </section>


            {/* <p className='quick-contact'>Have a quick Quick chat</p>   */}
            
            
            <section className='tile-container'></section>
                <DualTilesUnequal careerLeftTile={"Call"} careerRightTile={"WhatsApp"} pics={rowTwoPics} handleTileClick={handleTileClick} isLink={false}></DualTilesUnequal>
            <section className='tile-container'></section>
           
           {/* <DualTiles careerLeftTile={"Govt Jobs (SEBI, RBI, EXCHANGES)"} careerRightTile={"Accounts & Tax"} pics={rowTwoPics}></DualTiles> */}
            {showPopUp === true && <PopUpExtraInfo setShowPopUp={setShowPopUp} extraInfo={additionalInfo}/>}
        </section>
    );
}