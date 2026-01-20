import "./IndividualService.css";
//import { motion, useScroll, useTransform } from "framer-motion";
import VertialSectionWithPic from '../../Components/VertialSectionWithPic/VertialSectionWithPic.jsx';
import VertialSectionOld from '../../Components/VertialSectionOld/VertialSectionOld.jsx';
import TilesWithOrgNames from '../../Components/TilesWithOrgNames/TilesWithOrgNames.jsx';
import founder from '../../assets/founder.png';
import bankingAndInsurance from "../../assets/banking-and-insurance.png";
import legalFinance from "../../assets/legal-finance.png";
import capitalMarkets from "../../assets/capital-markets.png";
import coverPic from '../../assets/trading.jpg';
import { useState } from "react";
import Card from "../Models/Card.js";
import FullPageCover from '../../Components/CoverSections/FullPageCover/FullPageCover.jsx';
import TripleTilesUnequal from '../../Components/TripleTilesUnequal/TripleTilesUnequal.jsx';
import { motion } from "framer-motion";
import earnWhileLearning from '../../assets/earn-while-learning.png';

// import CompanyAndRoles from "../../Components/CompanyAndRoles/CompanyAndRoles";


export default function IndividualService() {


  const items = [
  { title: "Best Wealth Manager 2020", description: "Bombay Stock Exchange"  },
  { title: "Star of the Month", description: "IIFL" },
  { title: "Employee of the year 2013", description: "Barclays Bank" },
  { title: "Student of the year 1992", description: "Calcutta University" }
];

   const [rowOnePics , setRowOnePics] = useState([bankingAndInsurance,legalFinance,capitalMarkets]);

   const [cardDetails , setCardDetails]= useState([new Card("Constant Feedback",bankingAndInsurance), 
                                                 new Card("Integrity",legalFinance),
                                                 new Card("Honesty",capitalMarkets)
                                                ]);


  
   const [cardDetailsRow2 , setCardDetailsRow2]= useState([new Card("Profit Maximization",bankingAndInsurance), 
                                                 new Card("Risk Minimization",legalFinance),
                                                 new Card("Daily Communication",capitalMarkets)
                                                ]);
   const handleTileClick = (e)=>
    {
    };

  const coverText = ["Our", "Investement","Services"];
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
      <VertialSectionWithPic picOnLeft={true} pic={founder} heading={"Investing Strategies"} text={"A seasoned wealth management expert with extensive experience in financial planning, investment strategy, and portfolio optimization. Skilled in understanding client goals and delivering personalized solutions across equity, debt, and alternative investments. Known for a disciplined, research-driven approach that balances growth, income, and risk management. Adept at building long-term client relationships through transparency, trust, and consistent performance. Committed to helping individuals and families achieve sustainable financial security and wealth preservation across generations."}/> 
      <span className="faculty-section-heading">Our Strategies are different</span>
      <hr></hr>
      <TilesWithOrgNames cardDetails={cardDetails} pics={rowOnePics} handleTileClick={handleTileClick} isLink={false}></TilesWithOrgNames> 
      <TilesWithOrgNames cardDetails={cardDetailsRow2} pics={rowOnePics} handleTileClick={handleTileClick} isLink={false}></TilesWithOrgNames> 
     </div>
  );
}
