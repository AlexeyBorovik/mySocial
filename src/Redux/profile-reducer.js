import { profileAPI } from './../api/api'

const SET_USER_PROFILE = 'SET_USER_PROFILE'


let initialState = {
    profile: null
}


const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_PROFILE: {
            return { ...state, profile: action.profile }
        }
        default:
            return state;
    }
}

export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })

export const setUser = (userId) => {
    return (dispatch) => {
        if (!userId) {
            userId = 19539;
        }
        profileAPI.getUser(userId)
            .then(response => {
                dispatch(setUserProfile(response));
            });
    }
}

export default profileReducer