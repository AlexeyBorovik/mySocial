import { Route, withRouter, BrowserRouter } from 'react-router-dom';
import './App.css';
import SideBar from './components/SideBar/SideBar.jsx';
import Portfolio from './components/Portfolio/Portfolio';
import Companies from './components/Companies/Companies';
import Music from './components/Music/Music';
import NewsContainer from './components/News/NewsContainer';
import MessagesContainer from './components/Messages/MessagesContainer';
import PartnersContainer from './components/Partners/PartnersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { Component } from 'react';
import { connect, Provider } from 'react-redux';
import { compose } from 'redux';
import { initializeApp } from './Redux/app-reducer';
import Preloader from './components/common/Preloader/Preloader';
import store from './Redux/redux-store';



class App extends Component {

  componentDidMount() {
    this.props.initializeApp()
  }

  render() {

    if (!this.props.initialized) {
      return <Preloader />
    }
    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <SideBar />
        <div className="app-wrapper-content">
          <Route render={() => < ProfileContainer />} path='/profile/:userId?' />
          <Route render={() => < NewsContainer />} path='/news' />
          <Route render={() => < MessagesContainer />} path='/messages' />
          <Route render={() => < Portfolio />} path='/portfolio' />
          <Route render={() => < Companies />} path='/companies' />
          <Route render={() => < PartnersContainer />} path='/partners' />
          <Route render={() => < Music />} path='/music' />
          <Route render={() => < Login />} path='/login' />
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})


const AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initializeApp }))(App);

const MyReactApp = () => {
  return (
    <BrowserRouter>
            <Provider store={store}>
                <AppContainer />
            </Provider>
        </BrowserRouter>
  )
}

export default MyReactApp