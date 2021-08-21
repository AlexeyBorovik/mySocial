import state from './components/Redux/state';
import './index.css';
import { rerenderEntireTree } from './render';

rerenderEntireTree(state);
