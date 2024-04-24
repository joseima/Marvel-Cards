import { useContext } from 'react';
import { NavLink } from "react-router-dom";
import { MarvelCardsContext } from '../../Context';
import Card from '../../Components/Card'
import './Favorites.sass';



const Favorites = () => {
  const context  = useContext<any>(MarvelCardsContext)
  const favorites = context.charsFavorites;

  if (favorites.length > 0) {
    return (
      <div className="main">
        <h3>YOUR FAVORITES</h3>
        {
         favorites?.map((char : any)  => {
         return (
            <Card key={char.id} char={char} />
         )
        })
        }
      </div>
    );
  } else {
    return (
      <div className="main">
        <h3>YOUR DONT HAVE ANY FAVORITE YET</h3>
        <NavLink to='/'>
            <h4>Return to home and select some</h4>
        </NavLink>
      </div>
    );
  }
}
  
  
  export default Favorites;
  