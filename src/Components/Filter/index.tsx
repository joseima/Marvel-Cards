import { useContext } from 'react';
import { MarvelCardsContext} from '../../Context';
import './Filter.sass';


export const Filter = ({}) => {
    const context  = useContext<any>(MarvelCardsContext)
    return (
        <div className="filter">
            <input className='filterInput' type="text" placeholder="SEARCH A CHARACTER..."
                onChange={(event)=> context.setSearchChar(event.target.value)}
            />
            </div>

    )
}
