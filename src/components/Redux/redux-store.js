import { createStore, combineReducers } from "redux";
import messageReducer from "./messages-reducer";
import newsReducer from "./news-reducer";


let reducers = combineReducers({
    messagesPage: messageReducer,
    newsPage: newsReducer
})

let store = createStore(reducers);

export default store