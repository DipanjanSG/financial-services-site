import './SingleTilePicRound.css';

import {useContext } from 'react';
import TileContainerContext  from '../../Contexts/TileContainerContext.js';
import { useNavigate } from 'react-router-dom';

function SingleTilePicRound({contentsObj})
{

    const {cssValues,knowMoreSection} = useContext(TileContainerContext);
    const navigate = useNavigate();

    const styleObj = {};

    if(cssValues)
    {
        styleObj.height = cssValues.facultyCardHeight;
        styleObj.justifyContent = cssValues.justifyContent;
        styleObj.width = cssValues.width;
    }

    return(
       
        <section id="tile_left" onClick={() => navigate(contentsObj.knowMoreLink)} className="single-horizontal-tile" 
                                         style={styleObj}>
                                                    
            <img src={`${import.meta.env.BASE_URL}${contentsObj.pic}`}></img>
            <section className="mahasamvit-edu-faculty-details">

                <section className="mahasamvit-edu-faculty-name">
                    <section>{contentsObj.designation.length >0 && contentsObj.designation+ "\u00A0"}{contentsObj.name}
                    </section>
                </section>
                
                <p>{contentsObj.degrees.join(", ")}</p>
                {contentsObj.role && <p>{contentsObj.role} of {contentsObj.department}</p>}
                {/* <p></p> */}
                {contentsObj.coursesTaught.length > 0 && <section><p class="mahasamvit-edu-faculty-courses-taught">Courses Taught</p>
                <p>{contentsObj.coursesTaught.join(", ")}</p></section>}
                <section className="mahasamvit-edu-faculty-action">{knowMoreSection.isSectionVisible && knowMoreSection.component && <knowMoreSection.component/>}</section>
            </section>
        </section>
    )
}

export default SingleTilePicRound;