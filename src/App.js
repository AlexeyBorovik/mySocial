import './App.css';
import Header from './components/Header/Header.jsx';
import News from './components/News/News';
import SideBar from './components/SideBar/SideBar.jsx';


const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <SideBar />
      <News />
    </div>
  );
}

export default App;