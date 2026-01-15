import './KnowMoreButtonRound.css'
import { useNavigate } from 'react-router-dom';
import {useState} from 'react';
import PopUpExtraInfo from '../../PopUps/PopUpExtraInfo/PopUpExtraInfo';

export default function KnowMoreButtonRound({onClickLink, marginLeft})
{

    const navigate = useNavigate();
   //
    return(
            <section className='know-more-container-round' style={{ marginLeft : "0%"}}>
                <span className="know-more-arrow-round" onClick={()=> navigate(onClickLink)}>Get Details</span>
            </section>
        );
}