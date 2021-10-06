import {authAPI} from './../api/api'


const SET_USER_DATA = 'SET_USER_DATA'


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
    data: {userId, email, login, isAuth}})


export const getAuthData = () => {
    return (dispatch) => {
        authAPI.authMe()
            .then(response => {
                if (response.resultCode === 0) {
                    let { id, email, login } = response.data
                    dispatch(setAuthUserData(id, email, login, true))
                }
            })
    }
}

export const login = (email, password, rememberMe) => (dispatch) => {
    authAPI.logIn(email, password, rememberMe)
    .then(response => {
        if(response.resultCode === 0){
            dispatch(getAuthData())
        }
    })
}

export const logout = () => (dispatch) => {
    authAPI.logOut()
    .then(response => {
        if(response.resultCode === 0){
            dispatch(setAuthUserData(null, null, null, false))
        }
    })
}

export default authReducer