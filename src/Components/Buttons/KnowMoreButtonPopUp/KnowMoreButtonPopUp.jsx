import './KnowMoreButtonPopUp.css'
import { useNavigate } from 'react-router-dom';
import {useState} from 'react';
import PopUpExtraInfo from '../../PopUps/PopUpExtraInfo/PopUpExtraInfo';

export default function KnowMoreButtonPopUp({onClickLink, marginLeft})
{

    const[showPopUp, setShowPopUp] = useState(false);
    const additionalInfo = {
        heading: "Visual Learning",
        body: "Visual learning transforms information into meaningful, memorable experiences by \n" +
"combining imagery, diagrams, animations, and spatial understanding to make complex\n" +
"ideas easier to grasp. Instead of relying solely on words or theoretical\n" +
"explanations, visual learning engages the brain’s natural ability to recognize\n" +
"patterns, form connections, and recall information faster. It encourages students\n" +
"to interact with content rather than passively consume it, making learning more\n" +
"immersive, intuitive, and impactful. Through visual tools such as flowcharts,\n" +
"infographics, videos, illustrated examples, and concept maps, learners can clearly\n" +
"see relationships between concepts, identify key ideas at a glance, and retain\n" +
"knowledge for longer. This approach not only boosts comprehension but also supports\n" +
"diverse learning styles—especially for students who learn best through observation\n" +
"and visualization. In a world where attention spans are shrinking and information\n" +
"is abundant, visual learning offers a smarter, more engaging pathway to\n" +
"understanding, problem-solving, and applying knowledge confidently in real-world\n" +
"scenarios.\n\n" +

"Visual learning transforms information into meaningful, memorable experiences by \n" +
"combining imagery, diagrams, animations, and spatial understanding to make complex\n" +
"ideas easier to grasp. Instead of relying solely on words or theoretical\n" +
"explanations, visual learning engages the brain’s natural ability to recognize\n" +
"patterns, form connections, and recall information faster. It encourages students\n" +
"to interact with content rather than passively consume it, making learning more\n" +
"immersive, intuitive, and impactful. Through visual tools such as flowcharts,\n" +
"infographics, videos, illustrated examples, and concept maps, learners can clearly\n" +
"see relationships between concepts, identify key ideas at a glance, and retain\n" +
"knowledge for longer. This approach not only boosts comprehension but also supports\n" +
"diverse learning styles—especially for students who learn best through observation\n" +
"and visualization. In a world where attention spans are shrinking and information\n" +
"is abundant, visual learning offers a smarter, more engaging pathway to\n" +
"understanding, problem-solving, and applying knowledge confidently in real-world\n" +
"scenarios.\n\n" +

"Visual learning transforms information into meaningful, memorable experiences by \n" +
"combining imagery, diagrams, animations, and spatial understanding to make complex\n" +
"ideas easier to grasp. Instead of relying solely on words or theoretical\n" +
"explanations, visual learning engages the brain’s natural ability to recognize\n" +
"patterns, form connections, and recall information faster. It encourages students\n" +
"to interact with content rather than passively consume it, making learning more\n" +
"immersive, intuitive, and impactful. Through visual tools such as flowcharts,\n" +
"infographics, videos, illustrated examples, and concept maps, learners can clearly\n" +
"see relationships between concepts, identify key ideas at a glance, and retain\n" +
"knowledge for longer. This approach not only boosts comprehension but also supports\n" +
"diverse learning styles—especially for students who learn best through observation\n" +
"and visualization. In a world where attention spans are shrinking and information\n" +
"is abundant, visual learning offers a smarter, more engaging pathway to\n" +
"understanding, problem-solving, and applying knowledge confidently in real-world\n" +
"scenarios."


    };

    return(
        <section className='know-more-container' style={{ marginLeft : marginLeft}}>
            <section><span>Know more</span></section>
            
             <span className="know-more-arrow-pop-up" onClick={()=> setShowPopUp(true)}>&#x279C;</span>
            {showPopUp === true && <PopUpExtraInfo setShowPopUp={setShowPopUp} extraInfo={additionalInfo}/>}
        </section>
        );
}