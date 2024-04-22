import { useRoutes, BrowserRouter } from 'react-router-dom';
import { MarvelCardsProvider } from '../../Context';
import Home from '../Home';
import Character from '../Character';
import NotFound from '../NotFound';
import Header from '../../Components/Header';
import '../../sass/globals.sass';



const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/character', element: <Character /> },
    { path: '/*', element: <NotFound /> }
  ])

  return routes;
}

const App = () => {
  return (
    <MarvelCardsProvider  >
      <BrowserRouter>
        <Header />
        <AppRoutes />
      </BrowserRouter>
    </MarvelCardsProvider>
  );
}

export default App;
