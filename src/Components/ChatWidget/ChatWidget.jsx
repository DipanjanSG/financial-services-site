import './ChatWidget.css';
import { useNavigate } from 'react-router-dom';
import mahasamvitLogo from "../../assets/mahasamvit-logo.png";



export default function ChatWidget()
{
    const navigate = useNavigate();
    return(
        <div className="chat-widget">
            <svg className="chat-widget-svg" viewBox="0 0 300 120"  preserveAspectRatio="xMidYMid meet">
                <path id="curve" d="M50 100 Q140 20 230 100" fill="none" stroke="rgba(0,0,0,0.6)"
    strokeWidth="70" 
    strokeLinecap="round"  />


                <text className="curved-text"  dy="13%">
                    <textPath id="text-holder" href="#curve" startOffset="50%" textAnchor="middle">
                    Ask us
                    </textPath>
                </text>
                
            </svg>
            <img src={mahasamvitLogo} onClick={()=> navigate('/contact-us')}/>
        </div>
    );
}