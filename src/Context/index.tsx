import { createContext, useState, ReactNode, useEffect } from "react";
import {Character, Comic} from '../types'
import {getCharacters} from '../Utils/Services/marvel'
export type CountContextType = {
    count: number,
    setCount: React.Dispatch<React.SetStateAction<number>>
  }

export const  MarvelCardsContext = createContext<CountContextType | unknown>(undefined);

export  const MarvelCardsProvider   = ({children}: {children: ReactNode})  => {
    const [count, setCount] = useState <number>(0);
    const [chars, setChars] = useState<Character[]>([]);
    const [charProfile, setCharProfile] = useState<Character[]>([]);
    const [comics, setComics] = useState<Comic[]>([]);
    
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
            charProfile,
            setCharProfile
        }}>
            {children}
        </MarvelCardsContext.Provider>
    )
} 