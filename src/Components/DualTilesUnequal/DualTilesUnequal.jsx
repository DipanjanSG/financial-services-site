import { useState } from 'react';
import './DualTilesUnequal.css';
import { Link } from 'react-router-dom';

function DualTiles({careerLeftTile, careerRightTile,pics, handleTileClick, isLink })
{
    return(
        <div className="dual-tiles-unequal">
            <section className="single-card-unequal single-card-left" style={{ width: `23vw`}} >
              <img  className="single-card-pic" src={pics[0]} style={{ width: `100%`}} ></img>
              {isLink ? 
                  <Link to="/course-categories/courses"  className='link-to-courses' state = {{  courseCategory : careerLeftTile}}>{careerLeftTile}</Link>
                  :
                  <span className='link-to-courses' onClick={handleTileClick}>{careerLeftTile}</span>
                }
            </section>


       


            <section className="single-card-unequal single-card-right" style={{ width: `55vw`}}>
              <img  className="single-card-pic" src={pics[1]} style={{ width: `100%`}}></img>
              {isLink ? <Link to="/course-categories/courses"  className='link-to-courses' state = {{  courseCategory : careerLeftTile}}>{careerRightTile}</Link>
                :
                <span className='link-to-courses' onClick={handleTileClick}>{careerRightTile}</span>
              }
            </section>
        </div>
    )
}

export default DualTiles;