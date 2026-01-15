import './Sidebar.css'
import SidebarMainItem from '../SidebarMainItem/SidebarMainItem';
import { useState } from 'react';


export default function Sidebar({monthlyArticlesList})
{

    const [isMonthNavigationOpen, setIsMonthNavigationOpen] = useState(false);

    const  toggleArrow = () => 
    {
        setIsMonthNavigationOpen(!isMonthNavigationOpen);
    }


  
    return(
     
        <section className="article-page-side-bar">
            {
            monthlyArticlesList.map((item, index)=> 
                 {
                    return (
                        <section className="article-page-side-bar-month-list">
                            
                            
                            <section className="article-page-side-bar-month"><p>&#128467;</p><p>{item.month}</p>
                                {isMonthNavigationOpen ? <p onClick={toggleArrow}>&#9660;</p>: <p onClick={toggleArrow}>&#9654;</p>}
                            </section>


                            {
                             isMonthNavigationOpen &&
                            
                                item.monthlyArticle.map((item,index)=>
                                {
                                    return (<SidebarMainItem data={item.title}/>)
                                })
                            } 
                       
                        </section>
                           )
                 })

            }
        </section>
        
    );
    
}