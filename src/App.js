import './App.css';
import './styles/Palete.scss';
import './styles/Fonts.scss';
import './styles/MobileResponsive.scss';

import About from './pages/about/About';
import Fullpagescroll from './pages/fullpages/Fullpagescroll';
import Project from './pages/projects/Project';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


export default function App() {
  return (
    <>
      <Router basename='http://mateomazzucco11.github.io/portafoliov2/'>
        <Switch>
          <Route path='/' exact>
            <Fullpagescroll />
          </Route>
          <Route path='/about2' exact>
            <About />
          </Route>
          <Route path='/project2' exact>
            <Project />
          </Route>
        </Switch>
      </Router>
    </>
  )
}
