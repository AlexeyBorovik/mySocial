import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let post = [
  { id: 1, likes: 2, dislikes: 5, text: "What`s up guys?" },
  { id: 2, likes: 3, dislikes: 3, text: "It`s fist posting in my life!" },
  { id: 3, likes: 25, dislikes: 0, text: "Coronavirus ended!!! We can leave the F*** masks!!!" },
]


let dialogues = [
  { name: 'Pasha' },
  { name: 'Ilya' },
  { name: 'Artyom' },
  { name: 'Lesha' },
  { name: 'Nataly' },
  { name: 'Nastya' },
  { name: 'Roman'}
]


let messages = [
  { text: 'Hey, how is react?' },
  { text: 'Did you find a job?' },
  { text: 'You`re awesome' },
  { text: 'Hey Niko, it`s Roman' },
  { text: 'Why are you ignoring me?! You`re coding again?!' }
]




ReactDOM.render(
  <React.StrictMode>
    <App messages={messages} dialogues={dialogues} post={post}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
