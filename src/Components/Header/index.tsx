import { NavLink } from "react-router-dom";
import { useContext } from 'react';
import { MarvelCardsContext, CountContextType } from '../../Context';
import './Header.sass';
import  MarvelLogo from '../../statics/MarvelLogo.png';
import  favoriteStar from '../../statics/favoriteStar.svg';



const Header = ({}) => {
    const context  = useContext<CountContextType | any>(MarvelCardsContext)
    return (
        <header  className="header">
            <div className="marvel_logo">
                <NavLink to='/'>
                <img  src={MarvelLogo} alt='Marvel_logo' />
                </NavLink>
            </div>

            <div className="favorites">
            <img  src={favoriteStar} alt='favorites' />
                <span className="favorites_counter">{context.count}</span>
             </div>

        </header>
    )
}

export default  Header;
