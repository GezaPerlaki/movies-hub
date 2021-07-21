import { Container } from '@material-ui/core';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './componets/Header/Header';
import SimpleBottomNavigation from './componets/Navbar/MainNav';
import Trending from './componets/Pages/Trending/Trending';
import Movies from './componets/Pages/Movies/Movies';
import Series from './componets/Pages/Series/Series';
import Search from './componets/Pages/Search/Search';

function App() {
  return (
    <HashRouter>
      <Header />
      <div className='app'>
        <Container>
          <Switch>
            <Route path='/' component={Trending} exact />
            <Route path='/movies' component={Movies} />
            <Route path='/series' component={Series} />
            <Route path='/search' component={Search} />
          </Switch>
        </Container>
      </div>
      <SimpleBottomNavigation />
    </HashRouter>
  );
}

export default App;
