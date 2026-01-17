import './MarketInsights.css';


export default function MarketInsights({courseDetails, knowMoreSection})

{


return (


<section id ="mahasamvit-edu-course-syllabus">
   <h1> {courseDetails?.syllabusModules[0].title} </h1>
   <hr></hr> 
   
 {Array.isArray(courseDetails?.syllabusModules) && courseDetails.syllabusModules.map((item,index)=> (

  <section>
  <section className="course-syllabus-modules">
    <section className="insights-article-big-image">
      <img src={item.image}></img>
      <section className="insights-main-heading-section">
        {item?.smallText && <strong className="insights-big-section-small-text">{item.smallText}</strong>}
        <section className="insights-big-section-heading" >{item.name}</section>
        {knowMoreSection.isSectionVisible && <div className="insights-read-more shrink-underline-black">Read More</div>}
      </section>
    </section>
  
   <ul className="insights-article-image-list">
       {item.subModules.map((subItem, index) => 
         (<><section className="insights-article-image-container">
          <img className="insights-article-image"  src={item.image}/>

          <section className="insights-heading-section">
            { subItem?.smallText && <strong className="insights-sub-heading" >{item.smallText}</strong> }
            <section className="insights-small-heading" >{subItem.name}</section>
            {knowMoreSection.isSectionVisible && <div className="insights-read-more shrink-underline-black">Read More</div>}
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
               
