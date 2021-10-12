import { stopSubmit } from 'redux-form'
import { authAPI } from './../api/api'


const SET_USER_DATA = 'AUTH_SET_USER_DATA'


let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}


const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state, ...action.data
            }
        default:
            return state
    }
}


export const setAuthUserData = (userId, email, login, isAuth) => ({
    type: SET_USER_DATA,
    data: { userId, email, login, isAuth }
})


export const getAuthData = () => async (dispatch) => {

    let response = await authAPI.authMe()

    if (response.resultCode === 0) {
        let { id, email, login } = response.data
        dispatch(setAuthUserData(id, email, login, true))
    }
}


export const login = (email, password, rememberMe) => async (dispatch) => {
    let response = await authAPI.logIn(email, password, rememberMe)
    
    if (response.resultCode === 0) {
        dispatch(getAuthData())
    } else {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some Error'
        dispatch(stopSubmit('login', { _error: message }))
    }
}

export const logout = () => async (dispatch) => {
    let response = await authAPI.logOut()
    
    if (response.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}

export default authReducer