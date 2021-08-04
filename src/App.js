import './App.css';
import Header from './components/Header.jsx';
import News from './components/News';
import SideBar from './components/SideBar.jsx';


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