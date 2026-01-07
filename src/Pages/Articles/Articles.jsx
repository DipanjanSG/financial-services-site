import './Articles.css';
import SingleArticlePic from '../../Components/SingleArticlePic/SingleArticlePic';
import ArticleText from '../../Components/ArticleText/ArticleText';
import TripleTiles from '../../Components/TripleTiles/TripleTiles';
import VertialSectionWithPic from '../../Components/VertialSectionWithPic/VertialSectionWithPic';
import founder from '../../assets/founder.png';
import earnWhileLearning from '../../assets/earn-while-learning.png';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Article from '../Models/Article';


export default function Articles()
{

    const coverText = ["Daily Trading",  "Investing"];
    const article = {
        title : "December Insights",
        date: "10/10/2025"
    }

    const decArt1 = new Article("Dec Insight 1", "Decemeber","12/12/2025",earnWhileLearning);
    const decArt2 = new Article("Dec Insight 2", "Decemeber", "13/12/2025",earnWhileLearning);
    const decArt3 = new Article("Dec Insight 3", "Decemeber", "13/12/2025",earnWhileLearning);
    const monthlyArticlesList = 
    [

        {
            month: "December",
            monthlyArticle: [decArt1, decArt2, decArt3]
        },

        {
            month: "November",
            monthlyArticle: [decArt1, decArt2]
        }
    
    
    ];

    return(
        <section>
            <article className='article-container'>
                <section className='article-heading'>
                    <header >{article.title}</header>
                    <section className='article-metadata'>
                        <time>{article.date}</time>
                        <div className="article-share-icon" title="Share Article"> &#x2934;</div>
                    </section>
                    
                </section>

            
                <SingleArticlePic/>
                <ArticleText/>
            </article>
            <Sidebar monthlyArticlesList={monthlyArticlesList}></Sidebar>
      

        </section>
       
            
    );
}