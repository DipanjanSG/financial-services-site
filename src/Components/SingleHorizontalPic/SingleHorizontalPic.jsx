import './DoublePicAndText.css';
import financeStudentBlack from "../../assets/many-books.png";
import financeStudentBlack2 from "../../assets/many-authors.png";
import financeStudentBlack3 from "../../assets/unlimited-reading.png";

export default function DoublePicAndText({coverText})
{

    return(


        <section className='double-text-cover'>
            <section className="double-text-cover-container">
                <img src={financeStudentBlack} className='double-text-cover-img-left'/>
                <span>{coverText[0]}</span>
                <section className="double-text-cover-description">xxxx</section>
            </section>

            <section className="double-text-cover-container">
                <img src={financeStudentBlack3} className='double-text-cover-img-right'/>
                <span>{coverText[1]}</span>
                 <section className="double-text-cover-description">xxxx</section> 
            </section>
        </section>
    );

}