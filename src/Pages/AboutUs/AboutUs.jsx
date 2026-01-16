import './AboutUs.css';
import DoublePicAndText from '../../Components/DoublePicAndTextCover/DoublePicAndText';
import TripleTiles from '../../Components/TripleTiles/TripleTiles';
import VertialSectionWithPic from '../../Components/VertialSectionWithPic/VertialSectionWithPic';
import DoubleVerticalSections from '../../Components/DoubleVerticalSections/DoubleVerticalSections';
import HorizontalQuotedSection from '../../Components/HorizontalQuotedSection/HorizontalQuotedSection';
import VertialSectionWithPicNoBg from '../../Components/VertialSectionWithPicNoBg/VertialSectionWithPicNoBg';
import founder from '../../assets/founder.png';
import earnWhileLearning from '../../assets/earn-while-learning.png';


export default function AboutUs()
{
    const coverText = ["Daily Trading",  "Investing"];

    return(

        <section>
            
            <VertialSectionWithPic picOnLeft={false} pic={founder} heading={"A Class Apart"} text={"A seasoned wealth management expert with extensive experience in financial planning, investment strategy, and portfolio optimization. Skilled in understanding client goals and delivering personalized solutions across equity, debt, and alternative investments. Known for a disciplined, research-driven approach that balances growth, income, and risk management. Adept at building long-term client relationships through transparency, trust, and consistent performance. Committed to helping individuals and families achieve sustainable financial security and wealth preservation across generations."}/> 

            <section className='about-us-heading'>
                <p >Our Business</p>
                <hr />
            </section>

            <DoubleVerticalSections></DoubleVerticalSections>
            
            {/* <p className='not-available-text'> <h2 className="quotes">&#x275D;</h2>The lack of proper <br></br> portfolio management in India<br></br> made us take this step <h2 className="quotes">&#x275E;</h2></p>   */}
           <HorizontalQuotedSection/>
            
        </section>
    );
}