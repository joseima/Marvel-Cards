import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { MarvelCardsContext } from '../../Context';
import { Comic} from '../../types'
import {getComics} from '../../Utils/Services/marvel'
import './Character.sass';
import  favoriteStar from '../../statics/favoriteStar.svg';
import  favoriteUnselected from '../../statics/favoriteUnselected.svg';

const Character = () => {
  const context  = useContext<any>(MarvelCardsContext);
  const characters = context.chars;
  const comics = context.comics;
  const  id  = useParams();
  const charID = Object.values(id)[0];
  const characterDesc = characters.find((character : any) => character.id === Number(charID) );

  useEffect( ()=> {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    async function getCharComics() {
        const listComics = await getComics(Number(charID));
        context.setComics(listComics);
    }
    getCharComics();
  },[])

  if (!characterDesc) {
    return <div>Loading Character...</div>;
  } else {
      return (
        <div className="character_details">
          <div className="info">
            <div className="thumbCont">
              <img className="thumb" src={`${characterDesc.thumbnail}.${characterDesc.extension}`} alt={characterDesc.name} />
            </div>
            <div className="infoCont">
              <h1>{characterDesc.name}
                <span className='add_favorite'>
                    <img  src={favoriteUnselected} alt='Add to favorites' />
                </span>
              </h1>
              <p>{characterDesc.description || "No description on API"}</p>
              </div>
          </div>
          <div className="comics_slider"> 
          <h3>COMICS</h3>
            <div className="comics_wrapper"> 
            {
            comics?.map((comic : Comic)  => {
              let year = comic.title.match(/\(\d{4}\)/);
              let titleFinal =  comic.title.replace(`${year}`, '');
              return  (
                <div key={comic.id}>
                  <div className="comicCard">
                  <img className="thumb" src={`${comic.thumbnail}.${comic.extension}`} alt={comic.title} />
                        <p>{titleFinal}</p>
                        <span>{year}</span>
                  </div>
                  </div>
                )
              })
            }
            </div>
          </div>
        </div>
      );
    }
    
  }
  
  export default Character;

  