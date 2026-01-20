import { useEffect } from 'react';
import './PopUpExtraInfo.css';

export default function PopUpExtraInfo({setShowPopUp, extraInfo}) 
{



    return(

        <section className="pop-up-overlay"  onClick={() => setShowPopUp(false)}>
            <section className='pop-up' onClick={(e) => e.stopPropagation()}>
                <section className='pop-up-close' onClick={()=>setShowPopUp(false)}>&#10006;
                </section>
                <section className='text-section'>
  
                    <h1 className="extra-info-header">{extraInfo.heading}</h1>

                   
                    <main className='main-text'>
                        {extraInfo.body}
                    </main>

                </section>
            </section>
        </section>
    );
}