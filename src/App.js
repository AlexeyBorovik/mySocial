import './App.css';
import Header from './components/Header/Header.jsx';
import Messages from './components/Messages/Messages';
import News from './components/News/News';
import SideBar from './components/SideBar/SideBar.jsx';


const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <SideBar />
      <div className="app-wrapper-content">
        <News />
        <Messages />
      </div>
    </div>
  );
}

export default App;