import { useState, useEffect } from 'react';
import Card from '../../Components/Card'
import {Character} from '../../types'
import './Home.sass';



const Home = () => {
  const [chars, setChars] = useState<Character[]>([]);
  useEffect(()=> {
    fetch('https://gateway.marvel.com/v1/public/characters?ts=1&apikey=175b5a321cf12c34dd606e765e4f0c83&hash=ec70ff7c4fe994fb01299cd7b9324256&limit=50')
    .then(response => response.json())
    .then(data => setChars(data.data.results))
  },[])

    return (
      <div className="main">
        {
         chars?.map(char => {
         return <Card key={char.id} char={char} />
        })
        }
      </div>
    );
  }
  
  export default Home;
  