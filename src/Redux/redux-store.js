import { createStore, combineReducers, applyMiddleware } from "redux";
import authReducer from "./auth-reducer";
import messageReducer from "./messages-reducer";
import newsReducer from "./news-reducer";
import partnersReducer from "./partners-reducer";
import profileReducer from "./profile-reducer";
import thunkMiddleware from "redux-thunk";
import appReducer from "./app-reducer";
import { reducer as formReducer } from 'redux-form'


let reducers = combineReducers({
    messagesPage: messageReducer,
    newsPage: newsReducer,
    partnersPage: partnersReducer,
    profilePage: profileReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store