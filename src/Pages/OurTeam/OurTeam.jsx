import "./OurTeam.css";
//import { motion, useScroll, useTransform } from "framer-motion";
import VertialSectionWithPic from '../../Components/VertialSectionWithPic/VertialSectionWithPic';
import VertialSectionOld from '../../Components/VertialSectionOld/VertialSectionOld.jsx';
import TilesWithOrgNames from '../../Components/TilesWithOrgNames/TilesWithOrgNames';
import founder from '../../assets/founder.png';
import bankingAndInsurance from "../../assets/banking-and-insurance.png";
import legalFinance from "../../assets/legal-finance.png";
import capitalMarkets from "../../assets/capital-markets.png";
import coverPic from '../../assets/our-team-cover-pic.png';
import { useState } from "react";
import Card from "../Models/Card";
import FullPageCover from '../../Components/CoverSections/FullPageCover/FullPageCover.jsx';
import TripleTilesUnequal from '../../Components/TripleTilesUnequal/TripleTilesUnequal';
import { motion } from "framer-motion";
import earnWhileLearning from '../../assets/earn-while-learning.png';

// import CompanyAndRoles from "../../Components/CompanyAndRoles/CompanyAndRoles";


export default function OurTeam() {


  const items = [
  { title: "Best Wealth Manager 2020", description: "Bombay Stock Exchange"  },
  { title: "Star of the Month", description: "IIFL" },
  { title: "Employee of the year 2013", description: "Barclays Bank" },
  { title: "Student of the year 1992", description: "Calcutta University" }
];

   const [rowOnePics , setRowOnePics] = useState([bankingAndInsurance,legalFinance,capitalMarkets]);

   const [cardDetails , setCardDetails]= useState([new Card("Barclays",bankingAndInsurance), 
                                                 new Card("Bombay Stock Exchange",legalFinance),
                                                 new Card("IIFL",capitalMarkets)
                                                ]);


  
   const [cardDetailsRow2 , setCardDetailsRow2]= useState([new Card("Chola Mangalam Finance",bankingAndInsurance), 
                                                 new Card("Goldman Sachs",legalFinance),
                                                 new Card("JP Morgan",capitalMarkets)
                                                ]);
   const handleTileClick = (e)=>
    {
    };

  const coverText = ["Meet", "Our","Founder & Team"];
  const linkText = null;
  // const ref = useRef(null);
  // const { scrollYProgress } = useScroll({ target: ref });
  // const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

    const text = {
        heading: "Chat with Founder",
        interviewQuestions : [
          {
            question:"Why did you start this company ? ",
            answer: "Students today hardly have the time to sit down and read a paperback novel. They read everything on their laptop or smartphone or any internet-enabled device. This is because everything is available online at the tap of a few buttons."
          },
           {
            question:"Why did you start this company ? ",
            answer: "Students today hardly have the time to sit down and read a paperback novel. They read everything on their laptop or smartphone or any internet-enabled device. This is because everything is available online at the tap of a few buttons."
          },
           {
            question:"Why did you start this company ? ",
            answer: "Students today hardly have the time to sit down and read a paperback novel. They read everything on their laptop or smartphone or any internet-enabled device. This is because everything is available online at the tap of a few buttons."
          }
        ]


    };

   return (
    <div>
      <FullPageCover coverPic={coverPic} coverText={coverText} linkText={linkText}/> 
      <VertialSectionWithPic picOnLeft={true} pic={founder} heading={"Biswajit Bhattacharya"} text={"A seasoned wealth management expert with extensive experience in financial planning, investment strategy, and portfolio optimization. Skilled in understanding client goals and delivering personalized solutions across equity, debt, and alternative investments. Known for a disciplined, research-driven approach that balances growth, income, and risk management. Adept at building long-term client relationships through transparency, trust, and consistent performance. Committed to helping individuals and families achieve sustainable financial security and wealth preservation across generations."}/> 
      <span className="faculty-section-heading">Companies he has worked for</span>
      <hr></hr>
      <TilesWithOrgNames cardDetails={cardDetails} pics={rowOnePics} handleTileClick={handleTileClick} isLink={false}></TilesWithOrgNames> 
      <TilesWithOrgNames cardDetails={cardDetailsRow2} pics={rowOnePics} handleTileClick={handleTileClick} isLink={false}></TilesWithOrgNames> 
      

      <span className="faculty-section-heading">Various Roles he has been in</span>
        <section className='tile-container'>
            <TripleTilesUnequal careerLeftTile={"Wealth Manager"} careerRightTopTile={"Investment Consultant"} careerRightBottomTile={"Trading Director"} pics={rowOnePics} handleTileClick={handleTileClick} isLink={false}></TripleTilesUnequal>
        </section>
      {/* delete kore diyechilam <CompanyAndRoles courseDetails={courseDetails}/> */}


     <div className='earn-learn-flex'>
      {/* <section className="vertical-section-right-aligned-heading">Founders Achievements</section> */}
      <div className="timeline-container">
        
        <div className="timeline-line" />
        {items.map((item, i) => (

          <motion.div
            key={i}
            className="timeline-entry"
            // initial={{ opacity: 0, x: -20 }}
            // whileInView={{ opacity: 1, x: 0 }}
            // transition={{ duration: 0.4, delay: i * 0.1 }}
            // viewport={{ once: true }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: .65, ease: "easeOut", delay: i * 0.15 }}
            viewport={{ once: false, amount: 0.4 }} 
          >
            <div className="dot" />
            <div className="entry-content">
              <p className="award-text">{item.title}</p>
              <section className='sub-text'>{item.description}</section>
            </div>
          </motion.div>
        ))}
      </div>
      <VertialSectionOld picOnLeft={true} pic={earnWhileLearning} text={text}/>

    </div>
    </div>
  );
}
