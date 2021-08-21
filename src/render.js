import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {addPost, addDialogue} from './components/Redux/state';


export let rerenderEntireTree = (state) => {
    ReactDOM.render(
      <React.StrictMode>
        <App state={state} addPost={addPost} addDialogue={addDialogue}/>
      </React.StrictMode>,
      document.getElementById('root')
    )
}
  


reportWebVitals();
