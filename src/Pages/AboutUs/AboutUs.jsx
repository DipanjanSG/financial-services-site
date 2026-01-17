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
            
            <VertialSectionWithPic picOnLeft={false} pic={founder} heading={"How we started"} text={"This business began with a belief that financial services should be built on integrity, not complexity. Starting with a small client base and a strong ethical foundation, we focused on delivering real value — one relationship at a time."}/> 

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