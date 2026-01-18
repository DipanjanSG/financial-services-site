import './Experience.css';

import mahasamvitLogo from "../../assets/mahasamvit-logo.png";
import financeServicesCover from "../../assets/finance-services-cover.jpg";
import { Link } from "react-router-dom";
import KnowMoreButtonRound from '../../Components/Buttons/KnowMoreButtonRound/KnowMoreButtonRound';


export default function Experience({largeText,knowMoreLink})
{

    return (
        <div className="experience-heading-container">
            <div className="experience-heading">
                    {largeText[0]} <br/>
                    {largeText[1]}<br/>
                {largeText[2]} 
            </div>
            <div className="experience-link" >
                {knowMoreLink && <KnowMoreButtonRound className="single-horizontal-section-button experience-link" onClickLink={knowMoreLink} 
                />}
            </div>
        </div>
    )
         


}