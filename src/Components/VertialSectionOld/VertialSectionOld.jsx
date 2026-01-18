import './VertialSectionOld.css';
import KnowMoreButton from '../Buttons/KnowMoreButton/KnowMoreButton';

export default function VertialSectionOld({text})
{

    return(
        <section className="single-vertical-section-with-pic-old">

                   <section className="text-sub-section-old">
                        <h2>{text.heading}</h2>
                        <hr></hr>
                   </section>

                   {
                   
                    text.interviewQuestions.map((item, index) => ( 
                        
                        <section className="text-sub-section-old">
                        <h4>{item.question}</h4>
                        <br></br>
                        {item.answer}

                   </section>))
                   
                   }
        </section>    
        );
}