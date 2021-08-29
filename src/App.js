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


const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <SideBar />
        <div className="app-wrapper-content">
          <Route render={() => < News 
          newsPage={props.state.newsPage}
          addPost={props.addPost}
          updateNewPostText={props.updateNewPostText}
          />} path='/news' />
          <Route render={() => < Messages messagesPage={props.state.messagesPage} addDialogue={props.addDialogue}/>} path='/messages' />
          <Route render={() => < Portfolio />} path='/portfolio' />
          <Route render={() => < Companies />} path='/companies' />
          <Route render={() => < Partners />} path='/partners' />
          <Route render={() => < Music />} path='/music' />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;