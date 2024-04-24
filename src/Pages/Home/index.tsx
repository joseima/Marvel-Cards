import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { MarvelCardsContext } from '../../Context';
import Card from '../../Components/Card'
import { getCharacters } from '../../Utils/Services/marvel';
import {Character} from '../../types'
import './Home.sass';



const Home = (chars: any) => {
  const context  = useContext<any>(MarvelCardsContext)
  const characters = context.chars;

    return (
      <div className="main">
        {
         characters?.map((char : any)  => {
         return (
          <Link key={char.id} to={`/character/${char.id}`}>
            <Card  char={char} />
           </Link>
         )
        })
        }
      </div>
    );
  }
  
  
  export default Home;
  