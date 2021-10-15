import { stopSubmit } from 'redux-form'
import { profileAPI } from './../api/api'

const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS'
const SAVE_PROFILE_SUCCESS = 'SAVE_PROFILE_SUCCESS'


let initialState = {
    profile: '',
    status: ''
}


const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_PROFILE: {
            return { ...state, profile: action.profile }
        }
        case SET_STATUS: {
            return { ...state, status: action.status }
        }
        case SAVE_PHOTO_SUCCESS: {
            return { ...state, profile: { ...state.profile, photos: action.photos } }
        }
        case SAVE_PROFILE_SUCCESS: {
            return { ...state, profile: action.profile }
        }
        default:
            return state;
    }
}

export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setStatus = (status) => ({ type: SET_STATUS, status })
export const savePhotoSuccess = (photos) => ({ type: SAVE_PHOTO_SUCCESS, photos })
export const saveProfileSuccess = (profile) => ({ type: SAVE_PROFILE_SUCCESS, profile })


export const setUser = (userId) => {
    return async (dispatch) => {
        const response = await profileAPI.getUser(userId)
        dispatch(setUserProfile(response));
    }
}

export const getStatus = (userId) => {
    return async (dispatch) => {
        const response = await profileAPI.getStatus(userId)
        dispatch(setStatus(response))
    }
}

export const updateStatus = (status) => {
    return async (dispatch) => {
        const response = await profileAPI.updateStatus(status)
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status))
        }
    }
}

export const savePhoto = (file) => {
    return async (dispatch) => {
        const response = await profileAPI.savePhoto(file)
        if (response.data.resultCode === 0) {
            dispatch(savePhotoSuccess(response.data.photos))
        }
    }
}

export const saveProfile = (profile) => {
    return async (dispatch) => {
        const response = await profileAPI.saveProfile(profile)
        if (response.data.resultCode === 0) {
            dispatch(saveProfileSuccess(profile))
        } else {
            dispatch(stopSubmit("edit-profile", { _error: response.data.messages[0] }));
            return Promise.reject(response.data.messages[0]);
        }
    }
}

export default profileReducer