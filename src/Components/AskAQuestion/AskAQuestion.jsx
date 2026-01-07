import './AskAQuestion.css'

export default function AskAQuestion()
{
    return(<section className='ask-qs'>

      <section className='ask-qs-personal-details'>
        <input type="text" className="ask-qs-input" placeholder="Name"></input>
        <input type="text" className="ask-qs-input" placeholder="Phone num"></input>
        <input type="text" className="ask-qs-input" placeholder="WhatsApp num"></input>
        <input type="text" className="ask-qs-input" placeholder="Email"></input>  
      </section>

      <section className="ask-qs-msg-section">
        <input type="text" className="ask-qs-subject" placeholder="Subject"></input>
        <textarea rows="5" cols="70" className="ask-qs-textarea" placeholder="Write your message here"></textarea>
        <button className="ask-qs-send-button" placeholder="Subject">Send &#x27A4;</button>
      </section >
        
        

    </section>);
}