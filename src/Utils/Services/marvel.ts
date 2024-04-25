import {apiUrls} from './urls'

export const getCharacters = async () =>  {
    const {BASE_URL, TS, KEY, HASH} = apiUrls;
    const respChars:any = [] 
    try {
         await fetch(
            `${BASE_URL}?ts=${TS}&apikey=${KEY}&hash=${HASH}&limit=50`            
        )
        .then(response =>  response.json())
        .then(data => respChars.push(data.data.results))

        const characters = respChars[0].map((character : any) => {
            return {
                id: character.id,
                name: character.name,
                description: character.description,
                thumbnail: character.thumbnail.path,
                extension: character.thumbnail.extension
            }

        })
        return characters
    } catch(error) {
        console.log(error)
    }
}

export const getComics = async (id : number) =>  {
    const {BASE_URL, TS, KEY, HASH} = apiUrls;
    const respComics:any = [] 
    try {
         await fetch(
            `${BASE_URL}/${id}/comics?ts=${TS}&apikey=${KEY}&hash=${HASH}&limit=20`            
        )
        .then(response =>  response.json())
        .then(data => respComics.push(data.data.results))

        const comics = respComics[0].map((comic : any) => {
            return {
                id: comic.id,
                title: comic.title,
                thumbnail: comic.thumbnail.path,
                extension: comic.thumbnail.extension
            }

        })
        return comics
    } catch(error) {
        console.log(error)
    }
}

