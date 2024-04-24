import { useContext } from 'react';
import { MarvelCardsContext } from '../../Context';
import Card from '../../Components/Card'
import './Home.sass';



const Home = () => {
  const context  = useContext<any>(MarvelCardsContext)
  const characters = context.chars;

    return (
      <div className="main">
        {
         characters?.map((char : any)  => {
         return (
            <Card key={char.id} char={char} />
         )
        })
        }
      </div>
    );
  }
  
  
  export default Home;
  