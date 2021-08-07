import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header.jsx';
import Messages from './components/Messages/Messages';
import News from './components/News/News';
import SideBar from './components/SideBar/SideBar.jsx';
import Portfolio from './components/Portfolio/Portfolio';
import Companies from './components/Companies/Companies';
import Partners from './components/Partners/Partners';
import Music from './components/Music/Music';


const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <SideBar />
        <div className="app-wrapper-content">
          <Route component={News} path='/news'/>
          <Route component={Messages} path='/messages'/>
          <Route component={Portfolio} path='/portfolio'/>
          <Route component={Companies} path='/companies'/>
          <Route component={Partners} path='/partners'/>
          <Route component={Music} path='/music'/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;