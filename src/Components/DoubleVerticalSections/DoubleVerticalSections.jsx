import './DoubleVerticalSections.css';
import KnowMoreButton from '../Buttons/KnowMoreButton/KnowMoreButton';
import VertialSectionWithPicNoBg from '../../Components/VertialSectionWithPicNoBg/VertialSectionWithPicNoBg';
import earnWhileLearning from '../../assets/earn-while-learning.png';

export default function DoubleVerticalSections({pic,picOnLeft,heading,text,knowMoreLink})
{

    return(
        <section className='double-vertical-section'>
            <VertialSectionWithPicNoBg picOnLeft={true} pic={earnWhileLearning} heading={"Trading"} text={"Students today hardly have the time to sit down and read a paperback novel. They read everything on their laptop or smartphone or any internet-enabled device. This is because everything is available online at the tap of a few buttons."}/>            
            <VertialSectionWithPicNoBg picOnLeft={true} pic={earnWhileLearning} heading={"Investing"} text={"Students today hardly have the time to sit down and read a paperback novel. They read everything on their laptop or smartphone or any internet-enabled device. This is because everything is available online at the tap of a few buttons."}/>            
        </section>    
        );
}