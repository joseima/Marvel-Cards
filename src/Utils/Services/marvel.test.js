import { getCharacters, getComics } from "./marvel";

describe('test for marvel services', () => {
    describe('test for getCharacters', () => {
        let cards;
        beforeAll( async () => {
            cards = await getCharacters() 
        });
       test('should return 50 marvel cards', () => {
        console.log(cards.length);
         expect(cards.length).toEqual(50); 
       })
         
    })

    describe('test for getComics of Warlock', () => {
        let comics;
        beforeAll( async () => {
            comics = await getComics(1010354);
        });
       test('should return 20 comics', () => {
        console.log(comics);
         expect(comics.length).toEqual(20); 
       })
         
    })
     
});