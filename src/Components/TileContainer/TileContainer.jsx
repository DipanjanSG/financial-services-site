import SingleTilePicRound from '../SingleTilePicRound/SingleTilePicRound';
import './TileContainer.css';

function TileContainer({facultyList})
{
    return(
        
      <section className="single-horizontal-tile-container">
         {  
            facultyList.map((faculty) => ( <SingleTilePicRound contentsObj={faculty}/>))
         }

      </section> 
    )
}

export default TileContainer;