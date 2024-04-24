import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MarvelCardsContext } from '../../Context';
import './Card.sass';
import  favoriteStar from '../../statics/favoriteStar.svg';
import  favoriteUnselected from '../../statics/favoriteUnselected.svg';


const Card  = (char : any) => {
    const context  = useContext< any>(MarvelCardsContext)
    const character = char.char;


    const renderIcon = (id : number) => {
      let isInFavorites : boolean = false
      if (context.charsFavorites.length > 0) {
         context.charsFavorites.map((char: any) => {
          if (char.id === id) {
            isInFavorites = true
          } 
        })
      }
      if (isInFavorites) {
        return (
          <span className='add_favorite'
            onClick ={() => removefromFavorites(character.id) }
         >
             <img  src={favoriteStar} alt='Remove from favorites' />
         </span>
        )
      } else {
        return (
          <span className='add_favorite'
            onClick ={() => addToFavorites(character)}
        >
            <img  src={favoriteUnselected} alt='Add to favorites' />
        </span>
        )
      }
    };
  
    const addToFavorites = (characterDesc : any) => {
      context.setCharsFavorites([...context.charsFavorites, characterDesc]);
      context.setCount(context.count  + 1);  
    };
  
    const removefromFavorites = (id : number) => {
      const filteredFavorites = context.charsFavorites.filter((character : any) => character.id != id)
      context.setCharsFavorites(filteredFavorites);
      context.setCount(context.count  - 1);  
    };


    
    return (
        <figure className="character_card">
            <Link key={character.id} to={`/character/${character.id}`}>
              <img className="thumb" src={`${character.thumbnail}.${character.extension}`} alt={character.name} />
            </Link>
            <div className="card_name">
                <p>{character.name}</p>
                {renderIcon(character.id)}
            </div>
        </figure>
    )
}
export default Card;