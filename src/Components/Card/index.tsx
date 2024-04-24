import { useContext } from 'react';
import { MarvelCardsContext, CountContextType } from '../../Context';
import './Card.sass';
import  favoriteStar from '../../statics/favoriteStar.svg';
import  favoriteUnselected from '../../statics/favoriteUnselected.svg';


const Card  = (char : any) => {
    const context  = useContext<CountContextType | any>(MarvelCardsContext)
    const character = char.char;
    
  const handleClickCount = () => {
    if (context) {
      context.setCount(context.count  + 1);
    }
  };

    
    return (
        <figure className="character_card">
            <img className="thumb" src={`${character.thumbnail}.${character.extension}`} alt={character.name} />
            <div className="card_name">
                <p>{character.name}</p>
                <span className='add_favorite'
                    onClick ={handleClickCount}>
                    <img  src={favoriteUnselected} alt='Add to favorites' />
                </span>
            </div>
        </figure>
    )
}
export default Card;