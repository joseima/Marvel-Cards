import { useContext } from 'react';
import { MarvelCardsContext } from '../../Context';
import {Character, Comic, CountContextType} from '../../types'
import { Filter } from '../../Components/Filter';
import Card from '../../Components/Card'
import './Home.sass';

const Home = () => {
  const context  = useContext<Character | Comic | CountContextType | any >(MarvelCardsContext)
  
 const index = () => { 
  if (context.searchChar?.length > 0) {
      return context.filteredChars.length 
    } else {
      return  context.chars.length  
    }
  }
  
  const renderChars = () => {
    if (context.searchChar?.length > 0) {
      if (context.filteredChars?.length > 0) {
        return (
          context.filteredChars?.map((char : any)  => {
            return (
              <Card key={char.id} char={char} />
            )
          })
        )
      } else {
        return (
          <h5>No match!</h5>
        )
      }
  } else {
        return (
          context.chars?.map((char : any)  => {
            return (
              <Card key={char.id} char={char} />
            )
          })
        )
      }
}

if (context.Chars?.length > 0) {
  return <div  className="main"><h3>Loading Characters...</h3></div>;
} else {
    return (
      <div className="main">
        <Filter />
        <h5>{index()} RESULTS</h5>  
        { renderChars()}
      </div>
    );
  }
}
  
  export default Home;
  