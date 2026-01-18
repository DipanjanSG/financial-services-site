import './TripleTextSection.css';
import financeStudentBlack from "../../assets/many-books.png";
import financeStudentBlack2 from "../../assets/many-authors.png";
import financeStudentBlack3 from "../../assets/unlimited-reading.png";

export default function TripleTextSection({coverText})
{

    return(


        <section className='triple-text-pic'>
            <section className="triple-text-pic-container">
                <img src={financeStudentBlack} className='triple-text-cover-img'/>
                <span>{coverText[0]}</span>
            </section>

            <section className="triple-text-pic-container">
                <img src={financeStudentBlack} className='triple-text-cover-img'/>
                <span>{coverText[1]}</span>
            </section>


            <section className="triple-text-pic-container">
                <img src={financeStudentBlack} className='triple-text-cover-img'/>
                <span>{coverText[2]}</span>
            </section>
        </section>
    );

}