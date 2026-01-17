import SingleTilePicRound from '../SingleTilePicRound/SingleTilePicRound';
import './TileContainer.css';

function TileContainer({facultyList, SingleTileType =SingleTilePicRound})
{
    return(
        
      <section className="single-horizontal-tile-container">
         {  
            facultyList.map((faculty) => ( <SingleTileType  contentsObj={faculty}/>))
         }

      </section> 
    )
}

export default TileContainer;