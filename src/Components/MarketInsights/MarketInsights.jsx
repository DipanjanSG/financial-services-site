import './MarketInsights.css';
export default function MarketInsights(/*{courseDetails}*/)
{



  const courseDetails = {

      syllabusModules : 
      [
        {
            name: "January , Market Insights 2026",
            image: "https://rapidapi-prod-apis.s3.amazonaws.com/865b1327-4dfd-4bdc-b6c0-0bc94f5c82bf.png",
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
      <h3>{item.name}</h3>
    </section>
  
   <ul className="insights-article-image-list">
       {item.subModules.map((subItem, index) => 
         (<><section className="insights-article-image"><img src="https://rapidapi-prod-apis.s3.amazonaws.com/865b1327-4dfd-4bdc-b6c0-0bc94f5c82bf.png"/><li><strong>{subItem.name}</strong></li>
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
               
