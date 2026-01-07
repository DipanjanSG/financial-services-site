import './VertialSectionWithPicNoBg.css';
import KnowMoreButton from '../Buttons/KnowMoreButton/KnowMoreButton';

export default function VertialSectionWithPicNoBg({pic,picOnLeft,heading,text,knowMoreLink})
{

    return(
        <section className="single-vertical-section-with-pic-no-bg">
                   {picOnLeft && <img src={pic}/>}

                   <section className="text-sub-section">
                        <h2>{heading}</h2>
                        <hr></hr>
                        <br></br>
                        {text}

                        {knowMoreLink && <KnowMoreButton onClickLink={knowMoreLink}/>}
                   </section>


                    {!picOnLeft && <img src={pic}/>}
        </section>    
        );
}