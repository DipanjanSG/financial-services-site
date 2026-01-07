import './TripleTiles.css';
import {Link} from 'react-router-dom';


function DualTiles({careerLeftTile, careerMiddleTile ,careerRightTile,pics, handleTileClick, isLink  })
{
    return(
        <div className="triple-cards">
          <div className="single-card">
              <img src={pics[0]}></img>
              {isLink ? 
              <Link to="/course-categories/courses" className='link-to-courses' state = {{  courseCategory : careerLeftTile}}>{careerLeftTile}</Link>
               :
                <span className='link-to-courses' onClick={handleTileClick}>{careerLeftTile}</span>
               }
          </div>

          <div className="single-card"> 
              <img src={pics[1]}></img>
              {isLink ? 
              <Link to="/course-categories/courses" className='link-to-courses' state = {{  courseCategory : careerLeftTile}}>{careerMiddleTile}</Link>
                :
                <span className='link-to-courses' onClick={handleTileClick}>{careerMiddleTile}</span>}
              </div>

          <div className="single-card" >
              <img src={pics[2]}></img>
               {isLink ? 
                   <Link to="/course-categories/courses" className='link-to-courses'  state = {{  courseCategory : careerLeftTile}}>{careerRightTile}</Link>
                     :
                <span className='link-to-courses' onClick={handleTileClick}>{careerRightTile}</span>}
    
          
              </div>
    </div>

    )
}

export default DualTiles;