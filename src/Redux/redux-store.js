import { createStore, combineReducers, applyMiddleware, compose } from "redux";
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


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers( applyMiddleware(thunkMiddleware)))


export default store