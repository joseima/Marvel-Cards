import { createContext, useState, ReactNode } from "react";

interface CountContextType {
    count: number;
    setCount: React.Dispatch<React.SetStateAction<number>>;
  }

const  MarvelCardsContext = createContext<CountContextType | ReactNode>(undefined);

export const MarvelCardsProvider   = ({children}: {children: ReactNode})  => {
    const [count, setCount] = useState <number>(0)
    return (
        <MarvelCardsContext.Provider value={{
            count,
            setCount
        }}>
            {children}
        </MarvelCardsContext.Provider>
    )
} 