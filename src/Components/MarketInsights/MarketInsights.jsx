import './MarketInsights.css';
import marketInsights from  '../../assets/market-insights.jpg';


export default function MarketInsights(/*{courseDetails}*/)

{



  const courseDetails = {

      syllabusModules : 
      [
        {
            name: "January , Market Insights 2026",
            image: marketInsights,
            subModules: [
               
              {
                 name: "November, 2025 Insights",
                 details: "p"
              },
                
              {
                 name: "December, 2025 Insights",
                 details: "p"
              },
              {
                 name: "December, 2025 Insights",
                 details: "p"
              }
            ]
             }
             ,
            // {
            // name: "x",
            // subModules: [
               
            //   {
            //      name: "x",
            //      details: "p"
            //   }
            // ]
            // }

         
    ]

  }
return (


<section id ="mahasamvit-edu-course-syllabus">
   <h1> Market Insights </h1>
   <hr></hr> 
   
 {Array.isArray(courseDetails?.syllabusModules) && courseDetails.syllabusModules.map((item,index)=> (

  <section>
  <section className="course-syllabus-modules">
    <section className="insights-article-big-image">
      <img src={item.image}></img>
      <section className="insights-main-heading-section">
        <strong className="insights-small-heading" ><h3>{item.name}</h3></strong>
        <div className="insights-read-more shrink-underline-black">Read More</div>
      </section>
    </section>
  
   <ul className="insights-article-image-list">
       {item.subModules.map((subItem, index) => 
         (<><section className="insights-article-image-container">
          <img className="insights-article-image"  src={marketInsights}/>

          <section className="insights-heading-section">
            <strong className="insights-small-heading" >{subItem.name}</strong>
            <div className="insights-read-more shrink-underline-black">Read More</div>
          </section>
        </section>
        
        {index < item.subModules.length-1 && <hr/>}</>
       ))
       
      }
    </ul>
 
   </section>
   </section>


 ))}
</section>

);

}            
               
