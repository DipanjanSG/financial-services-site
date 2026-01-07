import './SingleArticlePic.css';
import financeStudentBlack from "../../assets/many-books.png";
import financeStudentBlack2 from "../../assets/many-authors.png";
import financeStudentBlack3 from "../../assets/unlimited-reading.png";

export default function singlePicAndText()
{

    return(


        <section className='single-text-cover'>
            <section className="single-text-cover-container">
                <img src={financeStudentBlack} className='single-text-cover-img-left'/>
            </section>
        </section>
    );

}