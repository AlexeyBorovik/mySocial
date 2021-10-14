import React from 'react';
import store from './Redux/redux-store';
import { Route, withRouter, HashRouter } from 'react-router-dom';
import { Component } from 'react';
import { connect, Provider } from 'react-redux';
import { compose } from 'redux';
import { initializeApp } from './Redux/app-reducer';
import './App.css';
import Preloader from './components/common/Preloader/Preloader';
import Login from './components/Login/Login';
import SideBar from './components/SideBar/SideBar.jsx';
import Portfolio from './components/Portfolio/Portfolio';
import Companies from './components/Companies/Companies';
import Music from './components/Music/Music';

const NewsContainer = React.lazy(() => import ('./components/News/NewsContainer')) ;
const MessagesContainer = React.lazy(() => import ('./components/Messages/MessagesContainer'));
const PartnersContainer = React.lazy(() => import ('./components/Partners/PartnersContainer'));
const ProfileContainer = React.lazy(() => import ('./components/Profile/ProfileContainer'));
const HeaderContainer = React.lazy(() => import ('./components/Header/HeaderContainer'));



class App extends Component {

  componentDidMount() {
    this.props.initializeApp()
  }

  render() {

    if (!this.props.initialized) {
      return <Preloader />
    }
    return (
      <React.Suspense fallback={<Preloader/>}>
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
      </React.Suspense>
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
    <HashRouter>
            <Provider store={store}>
                <AppContainer />
            </Provider>
        </HashRouter>
  )
}

export default MyReactApp