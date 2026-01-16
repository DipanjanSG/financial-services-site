import SingleTilePicRound from '../SingleTilePicRound/SingleTilePicRound';
import './TileContainer.css';

function TileContainer({facultyList, singleTileType=SingleTilePicRound})
{
    return(
        
      <section className="single-horizontal-tile-container">
         {  
            facultyList.map((faculty) => ( <singleTileType contentsObj={faculty}/>))
         }

      </section> 
    )
}

export default TileContainer;