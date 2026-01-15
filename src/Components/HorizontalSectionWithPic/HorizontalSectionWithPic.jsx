import './HorizontalSectionWithPic.css';
import KnowMoreButton from '../Buttons/KnowMoreButton/KnowMoreButton';

export default function HorizontalSectionWithPic({pic,picOnLeft,heading,text,knowMoreLink})
{

    return(
        <section id="single-horizontal-section-with-pic" className="single-horizontal-section-with-pic">
                   {picOnLeft && <img src={pic}/>}

                   <section className='single-horizontal-section-text'>
                        <span className="quotes" >&#x275D;<span className="quotes-text">{heading}&#x275E;</span></span>
                        <p className="single-horizontal-section-main-text">{text}</p>
                        {knowMoreLink && <KnowMoreButton className="single-horizontal-section-button" onClickLink={knowMoreLink}/>}
                   </section>


                    {!picOnLeft && <img src={pic}/>}
        </section>    
        );
}