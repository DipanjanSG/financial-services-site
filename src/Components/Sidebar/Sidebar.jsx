import './Sidebar.css'
import SidebarMainItem from '../SidebarMainItem/SidebarMainItem';


export default function Sidebar({monthlyArticlesList})
{

    return(
     
        <section className="article-page-side-bar">
            {
            monthlyArticlesList.map((item, index)=> 
                 {
                    return (
                        <section className="article-page-side-bar-month-list">
                            <section className="article-page-side-bar-month"><p>&#128467;</p><p>{item.month}</p>
                                <p>&#8964;</p>
                            </section>


                            {item.monthlyArticle.map((item,index)=>
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