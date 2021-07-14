import './App.css';
import './styles/Palete.scss';
import './styles/Fonts.scss';
import './styles/MobileResponsive.scss';

import About2 from './pages/about/About2';
import Fullpagescroll from './components/fullpagescrol/Fullpagescroll';
import Project2 from './pages/projects/Project2';

import { HashRouter as Router, Route, Switch } from 'react-router-dom';

export default function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/' exact>
            <Fullpagescroll />
          </Route>
          <Route path='/about' exact>
            <About2 />
          </Route>
          <Route path='/project' exact>
            <Project2 />
          </Route>
        </Switch>
      </Router>
    </>
  )
}
