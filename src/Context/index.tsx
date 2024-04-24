import { createContext, useState, ReactNode, useEffect } from "react";
import {Character, Comic, CountContextType} from '../types'
import {getCharacters} from '../Utils/Services/marvel'


export const  MarvelCardsContext = createContext<CountContextType | unknown>(undefined);

export  const MarvelCardsProvider   = ({children}: {children: ReactNode})  => {
    const [count, setCount] = useState <number>(0);
    const [chars, setChars] = useState<Character[]>([]);
    const [charsFavorites, setCharsFavorites] = useState([]);
    const [comics, setComics] = useState<Comic[]>([]);

    const [showingFiltered, setshowingFiltered] = useState(false)
    const showFiltered = () => setshowingFiltered(true)
    const hideFiltered = () => setshowingFiltered(false)
    
    
    useEffect( ()=> {
        async function getChars() {
            const characters = await getCharacters();
            setChars(characters);
        }
        getChars();
    },[])

    return (
        <MarvelCardsContext.Provider value={{
            count,
            setCount,
            chars,
            setChars,
            comics,
            setComics,
            charsFavorites,
            setCharsFavorites,
            showingFiltered,
            showFiltered,
            hideFiltered
        }}>
            {children}
        </MarvelCardsContext.Provider>
    )
} 