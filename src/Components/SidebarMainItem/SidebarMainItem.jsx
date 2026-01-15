import './SidebarMainItem.css';
import { Link } from 'react-router-dom';


export default function SidebarMainItem({data})
{

     return (
        //<section className='monthly-article-dropdown'
        // >
        //         {
        //                 monthlyArticle.map((item,index) => 
        //                         {  console.log(item); 
                                
                                
        //                         return (
        <section className='single-article-dropdown'>
           &nbsp; &nbsp; &#9642; <Link to="/">{data}</Link>
        </section>
                        
       //         )})
        //        }
        //</section>
     );
        
    
}