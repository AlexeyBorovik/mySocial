import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header.jsx';
import SideBar from './components/SideBar/SideBar.jsx';
import Portfolio from './components/Portfolio/Portfolio';
import Companies from './components/Companies/Companies';
import Music from './components/Music/Music';
import NewsContainer from './components/News/NewsContainer';
import MessagesContainer from './components/Messages/MessagesContainer';
import PartnersContainer from './components/Partners/PartnersContainer';


const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <SideBar />
        <div className="app-wrapper-content">
          <Route render={() => < NewsContainer/>} path='/news' />
          <Route render={() => < MessagesContainer/>} path='/messages' />
          <Route render={() => < Portfolio />} path='/portfolio' />
          <Route render={() => < Companies />} path='/companies' />
          <Route render={() => < PartnersContainer />} path='/partners' />
          <Route render={() => < Music />} path='/music' />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;