import { stopSubmit } from 'redux-form'
import { authAPI, securityAPI } from './../api/api'


const SET_USER_DATA = 'AUTH_SET_USER_DATA'
const GET_CAPTCHA_URL_SUCCESS = 'GET_CAPTCHA_URL_SUCCESS'


let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null //if null, captcha is not required
}


const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state, ...action.payload
            }
        default:
            return state
    }
}


export const setAuthUserData = (userId, email, login, isAuth) => ({type: SET_USER_DATA, payload: { userId, email, login, isAuth }})
export const getCaptchaUrlSuccess = (captchaUrl) => ({type: GET_CAPTCHA_URL_SUCCESS, payload: {captchaUrl}})


export const getAuthData = () => async (dispatch) => {

    let response = await authAPI.authMe()

    if (response.resultCode === 0) {
        let { id, email, login } = response.data
        dispatch(setAuthUserData(id, email, login, true))
    }
}


export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
    let response = await authAPI.logIn(email, password, rememberMe, captcha)
    
    if (response.resultCode === 0) {
        dispatch(getAuthData())
    } else {
        if(response.data.resultCode === 10){
            dispatch(getCaptchaUrl())
        }
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

export const getCaptchaUrl = () => async (dispatch) => {
    const response = await securityAPI.getCaptcha()
    const captchaUrl = response.data.url
    dispatch(getCaptchaUrlSuccess(captchaUrl))
}

export default authReducer