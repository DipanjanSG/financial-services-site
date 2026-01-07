import "./OurTeam.css";
//import { motion, useScroll, useTransform } from "framer-motion";
import VertialSectionWithPic from '../../Components/VertialSectionWithPic/VertialSectionWithPic';
import TilesWithOrgNames from '../../Components/TilesWithOrgNames/TilesWithOrgNames';
import founder from '../../assets/founder.png';
import bankingAndInsurance from "../../assets/banking-and-insurance.png";
import legalFinance from "../../assets/legal-finance.png";
import capitalMarkets from "../../assets/capital-markets.png";
import { useState } from "react";
import Card from "../Models/Card";
import CompanyAndRoles from "../../Components/CompanyAndRoles/CompanyAndRoles";


export default function OurTeam() {


  const items = [
  { title: "You Enroll", description: "You pay the course fees", side: "left" },
  { title: "Investement Starts", description: "30K is invested in capital markets", side: "right" },
  { title: "Periodic returns", description: "Periodic returns are given to your parents", side: "left" },
  { title: "You Graduate", description: "You get a Job", side: "right" }
];

   const [rowOnePics , setRowOnePics] = useState([bankingAndInsurance,legalFinance,capitalMarkets]);

   const [cardDetails , setCardDetails]= useState([new Card("Berkley",bankingAndInsurance), 
                                                 new Card("Bombay Stock Exchange",legalFinance),
                                                 new Card("IIFL",capitalMarkets),
                                                 new Card("Berkley",bankingAndInsurance), 
                                                 new Card("Bombay Stock Exchange",legalFinance),
                                                 new Card("IIFL",capitalMarkets)
                                                ]);


   const handleTileClick = (e)=>
    {
    };
  // const ref = useRef(null);
  // const { scrollYProgress } = useScroll({ target: ref });
  // const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);


   return (
    <div>
      <VertialSectionWithPic picOnLeft={true} pic={founder} heading={"Biswajit Bhattacharya"} text={"A seasoned wealth management expert with extensive experience in financial planning, investment strategy, and portfolio optimization. Skilled in understanding client goals and delivering personalized solutions across equity, debt, and alternative investments. Known for a disciplined, research-driven approach that balances growth, income, and risk management. Adept at building long-term client relationships through transparency, trust, and consistent performance. Committed to helping individuals and families achieve sustainable financial security and wealth preservation across generations."}/> 
      <span className="faculty-section-heading">Companies he has worked for</span>
      <hr></hr>
      <TilesWithOrgNames cardDetails={cardDetails} pics={rowOnePics} handleTileClick={handleTileClick} isLink={false}></TilesWithOrgNames> 
      <CompanyAndRoles courseDetails={courseDetails}/>
      {/*<div className="timeline-container">
        <div className="timeline-line" />

        {items.map((item, i) => (

          <motion.div
            key={i}
            className="timeline-entry"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: .65, ease: "easeOut", delay: i * 0.15 }}
            viewport={{ once: false, amount: 0.4 }} 
          >
            <div className="dot" />
            <div className="entry-content">
              <h2>{item.title}</h2>
              <section className='sub-text'>{item.description}</section>
            </div>
          </motion.div>
        ))}
      </div> 
      */}
    </div>
  );
}
