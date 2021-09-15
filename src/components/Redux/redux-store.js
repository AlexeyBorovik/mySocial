import { createStore, combineReducers } from "redux";
import messageReducer from "./messages-reducer";
import newsReducer from "./news-reducer";
import partnersReducer from "./partners-reducer";
import profileReducer from "./profile-reducer";


let reducers = combineReducers({
    messagesPage: messageReducer,
    newsPage: newsReducer,
    partnersPage: partnersReducer,
    profilePage: profileReducer
})

let store = createStore(reducers);

window.store = store;

export default store