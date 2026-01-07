import { useState } from 'react';
import './DualTiles.css';
import { Link } from 'react-router-dom';

function DualTiles({careerLeftTile, careerRightTile,pics, handleTileClick, isLink })
{
    return(
        <div id ="dual-tiles" className="dual-tiles">
            <section id="tile_left" className="single-card" style={{ width: `47vw`}} >
              <img src={pics[0]} style={{ width: `100%`}} ></img>
              {isLink ? 
                  <Link to="/course-categories/courses"  className='link-to-courses' state = {{  courseCategory : careerLeftTile}}>{careerLeftTile}</Link>
                  :
                  <span className='link-to-courses' onClick={handleTileClick}>{careerLeftTile}</span>
                }
            </section>


       


            <section id="tile_right" className="single-card" style={{ width: `47vw`}}>
              <img src={pics[1]} style={{ width: `100%`}}></img>
              {isLink ? <Link to="/course-categories/courses"  className='link-to-courses' state = {{  courseCategory : careerLeftTile}}>{careerRightTile}</Link>
                :
                <span className='link-to-courses' onClick={handleTileClick}>{careerRightTile}</span>
              }
            </section>
        </div>
    )
}

export default DualTiles;