import './App.css';
import './styles/Palete.scss'
import './styles/Fonts.scss'

import Header from './pages/header/Header';
import BackgroundAll from './components/background/BackgroundAll';
import Fullpagescroll from './components/fullpagescrol/Fullpagescroll';


export default function App() {
  return(
    <>
      <Header />
      <BackgroundAll />
      <div className='container-page'>
        <Fullpagescroll />
      </div>
    </>
  )
}
