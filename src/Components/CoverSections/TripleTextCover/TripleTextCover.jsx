import './TripleTextCover.css';
import financeStudentBlack from "../../../assets/many-books.png";
import financeStudentBlack2 from "../../../assets/many-authors.png";
import financeStudentBlack3 from "../../../assets/unlimited-reading.png";

export default function TripleTextCover({coverText})
{

    return(


        <section className='triple-text-cover'>
            <section className="triple-text-cover-container">
                <img src={financeStudentBlack} className='triple-text-cover-img'/>
                <span>{coverText[0]}</span>
            </section>

            <section className="triple-text-cover-container">
                <img src={financeStudentBlack2} className='triple-text-cover-img'/>
                <span>{coverText[1]}</span>
            </section>


            <section className="triple-text-cover-container">
                <img src={financeStudentBlack3} className='triple-text-cover-img'/>
                <span>{coverText[2]}</span>
            </section>
        </section>
    );

}