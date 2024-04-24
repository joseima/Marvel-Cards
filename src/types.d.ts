export interface Character {
    id: number;
    name: string;
    description: string;
    thumbnail: string;
    extension: string;
  }


  export interface Comic {
    id: number;
    title: string;
    thumbnail: string;
    extension: string;
  }

  export type CountContextType = {
    count: number,
    setCount: React.Dispatch<React.SetStateAction<number>>
  }