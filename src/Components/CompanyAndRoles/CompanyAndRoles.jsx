import './CompanyAndRoles.css';
export default function Syllabus({courseDetails})
{


  const dowloadSyllabus= () =>
  {
    const link = document.createElement("a");
    link.href = "http://localhost:3000/public/syllabus/" + courseDetails.syllabusFileName;
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
return (


<section id ="mahasamvit-edu-course-syllabus">
   <h1> Syllabus (In Short) </h1>
   <hr></hr> 
   
 {Array.isArray(courseDetails?.syllabusModules) && courseDetails.syllabusModules.map((item,index)=> (

  <section>
  <section className="course-syllabus-modules">
   <h3>{item.name}</h3>
   <ul>
       {item.subModules.map((subItem, index) => (
        <li><strong>{subItem.name} :</strong> {subItem.details}</li>
       ))}
    </ul>
 
   </section>

   <hr></hr> 
   </section>


 ))}

 
    <section id="mahasamvit-edu-course-syllabus-action">
      <section id="text"><h1>For in-depth details please get the detailed syllabus from here </h1></section>
      <button class="btn btn-light rounded-pill download-syllabus-button" onClick={dowloadSyllabus}>Download Detailed Syllabus<i class="bi bi-file-earmark-arrow-down-fill"></i> </button>
    </section>
</section>

);

}            
               
