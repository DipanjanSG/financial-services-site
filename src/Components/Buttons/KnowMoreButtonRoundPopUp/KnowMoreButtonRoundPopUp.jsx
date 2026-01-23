import './KnowMoreButtonRoundPopUp.css'
import { useNavigate } from 'react-router-dom';
import {useState} from 'react';
import PopUpExtraInfo from '../../PopUps/PopUpExtraInfo/PopUpExtraInfo';

export default function KnowMoreButtonRoundPopUp({onClickLink, marginLeft})
{

    const[showPopUp, setShowPopUp] = useState(false);
    const navigate = useNavigate();
    
    const additionalInfo = {
        heading: "Constant Feedback",
        body: "Constant Feedback transforms information into meaningful, memorable experiences by \n" +
"combining imagery, diagrams, animations, and spatial understanding to make complex\n" +
"ideas easier to grasp. Instead of relying solely on words or theoretical\n" +
"explanations, visual learning engages the brain’s natural ability to recognize\n" +
"patterns, form connections, and recall information faster. It encourages students\n" +
"to interact with content rather than passively consume it, making learning more\n" +
"immersive, intuitive, and impactful. Through visual tools such as flowcharts,\n" +
"infographics, videos, illustrated examples, and concept maps, learners can clearly\n" +
"see relationships between concepts, identify key ideas at a glance, and retain\n"


    };


     return(
            <section className='know-more-container-round' style={{ marginLeft : "0%"}}>
                <span className="know-more-arrow-round" onClick={()=> setShowPopUp(true)}>Get Details</span>
                {showPopUp === true && <PopUpExtraInfo setShowPopUp={setShowPopUp} extraInfo={additionalInfo}/>}

            </section>
        );
}