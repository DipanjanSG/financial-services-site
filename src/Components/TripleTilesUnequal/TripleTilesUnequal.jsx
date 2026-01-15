import './TripleTilesUnequal.css';
import {Link} from 'react-router-dom';


function TripleTilesUnequal({careerLeftTile, careerRightTopTile ,careerRightBottomTile,pics, handleTileClick, isLink  })
{
    return(
        <div className="triple-cards-unequal">

          <div className="left-card-unequal">
              <img src={pics[0]}></img>
              {isLink ? 
              <Link to="/course-categories/courses" className='link-to-courses' state = {{  courseCategory : careerLeftTile}}>{careerLeftTile}</Link>
               :
                <span className='link-to-courses' onClick={handleTileClick}>{careerLeftTile}</span>
               }
          </div>

          <div className="right-section"> 
             
            <div className="top-card-unequal"> 
                <img src={pics[1]}></img>
                {isLink ? 
                <Link to="/course-categories/courses" className='link-to-courses' state = {{  courseCategory : careerLeftTile}}>{careerRightTopTile}</Link>
                    :
                    <span className='link-to-courses' onClick={handleTileClick}>{careerRightTopTile}</span>} 
                    
            </div> 
                

            <div className="bottom-card-unequal"> 
              <img src={pics[2]}></img>
             {isLink ? 
               <Link to="/course-categories/courses" className='link-to-courses' state = {{  courseCategory : careerLeftTile}}>{careerRightBottomTile}</Link>
                 :
                 <span className='link-to-courses' onClick={handleTileClick}>{careerRightBottomTile}</span>} 
                
            </div> 
          </div> 

          {/* <div className="single-card" >
              <img src={pics[2]}></img>
               {isLink ? 
                   <Link to="/course-categories/courses" className='link-to-courses'  state = {{  courseCategory : careerLeftTile}}>{careerRightTile}</Link>
                     :
              <span className='link-to-courses' onClick={handleTileClick}>{careerRightTile}</span>}
          </div> */}
    </div>

    )
}

export default TripleTilesUnequal;