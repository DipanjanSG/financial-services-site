import './TilesWithOrgNames.css';
import {Link} from 'react-router-dom';


function TilesWithOrgNames({cardDetails ,pics, handleTileClick, isLink  })
{
    return(
        <div className="triple-cards">
          { cardDetails.map((card,index)=>
          
            <div className="single-card">
              <img src={card.pic}></img>
              {isLink ? 
              <Link to="/course-categories/courses" className='link-to-courses' state = {{  courseCategory : card.title}}>{card.title}</Link>
               :
                <span className='link-to-courses' onClick={handleTileClick}>{card.title}</span>
               }
          </div>)
          }

         
    </div>

    )
}

export default TilesWithOrgNames;