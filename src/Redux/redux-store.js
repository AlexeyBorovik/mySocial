import { createStore, combineReducers } from "redux";
import authReducer from "./auth-reducer";
import messageReducer from "./messages-reducer";
import newsReducer from "./news-reducer";
import partnersReducer from "./partners-reducer";
import profileReducer from "./profile-reducer";


let reducers = combineReducers({
    messagesPage: messageReducer,
    newsPage: newsReducer,
    partnersPage: partnersReducer,
    profilePage: profileReducer,
    auth: authReducer
})

let store = createStore(reducers);

window.store = store;

export default store