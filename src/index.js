import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import store from './components/Redux/state';
import './index.css';
import App from './App';

let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App 
                state={state} 
                addPost={store.addPost.bind(store)} 
                updateNewPostText={store.updateNewPostText.bind(store)} 
                addDialogue={store.addDialogue.bind(store)} />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    )
}
rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);

reportWebVitals();

