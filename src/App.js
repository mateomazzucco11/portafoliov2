import './App.css';
import './styles/Palete.scss'
import './styles/Fonts.scss'

import Header from './pages/header/Header';
import About2 from './pages/about/About2';
import Fullpagescroll from './components/fullpagescrol/Fullpagescroll';
import SearchNav from './pages/header/search/SearchNav'

import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'


export default function App() {
  return(
    <>
      <Header />
      <SearchNav />
      <Router>
        <Switch>
          <Route path='/12'>
            <Fullpagescroll />
          </Route>
        </Switch>
      </Router>
      <Router>
        <Switch>
          <Route path='/about'>
            <About2 />
          </Route>
        </Switch>
      </Router>
    </>
  )
}
