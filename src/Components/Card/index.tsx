import './Card.sass';
import  favoriteStar from '../../statics/favoriteStar.svg';
import  favoriteUnselected from '../../statics/favoriteUnselected.svg';

const Card = (char : any) => {
    const character = char.char;
    return (
        <figure className="character_card">
            <img className="thumb" src={`${character.thumbnail.path}.jpg`} alt="" />
            <div className="card_name">
                <p>{character.name}</p>
                <span className='add_favorite'>
                    <img  src={favoriteUnselected} alt='Add to favorites' />
                </span>
            </div>
        </figure>
    )
}
export default Card;