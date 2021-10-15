import { updateObjectInArray } from '../components/utilities/validators/object-helpers';
import { usersAPI, followAPI } from './../api/api'


const FOLLOW = 'FOLLOW';
const UN_FOLLOW = 'UN_FOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';


let initialState = {
  users: [],
  pageSize: 50,
  totalUsersCount: 1,
  currentPage: 1,
  isFetching: false,
  followingInProgress: []


}


const partnersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        user: updateObjectInArray(state.users, action.id, 'id', { followed: true })
      }

    case UN_FOLLOW:
      return {
        ...state,
        user: updateObjectInArray(state.users, action.id, 'id', { followed: false })
      }

    case SET_USERS: {
      return { ...state, users: action.users }
    }

    case SET_CURRENT_PAGE: {
      return { ...state, currentPage: action.currentPage }
    }

    case SET_TOTAL_USERS_COUNT: {
      return { ...state, totalUsersCount: action.count }
    }

    case TOGGLE_IS_FETCHING: {
      return { ...state, isFetching: action.isFetching }
    }

    case TOGGLE_IS_FOLLOWING_PROGRESS: {
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.id]
          : state.followingInProgress.filter(id => id !== action.id)
      }
    }

    default:
      return state;
  }
}


export const acceptFollow = (id) => ({ type: FOLLOW, id })
export const acceptUnFollow = (id) => ({ type: UN_FOLLOW, id })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, count: totalUsersCount })
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })
export const toggleIsFollowingProgress = (isFetching, id) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, id })

export const getUsers = (currentPage, pageSize) => {
  return async (dispatch) => {
    dispatch(toggleIsFetching(true));
    let response = await usersAPI.getUsers(currentPage, pageSize)
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(response.items));
    dispatch(setTotalUsersCount(response.totalCount))
  }
}

export const getDataPageChange = (pageNumber, pageSize) => {
  return async (dispatch) => {
    dispatch(setCurrentPage(pageNumber))
    dispatch(toggleIsFetching(true));
    let response = await usersAPI.getUsers(pageNumber, pageSize)
    dispatch(toggleIsFetching(false));
        dispatch(setUsers(response.items));
  }
}

const followUnfollowFlow = async (dispatch, id, apiMethod, actionCreator) => {
  dispatch(toggleIsFollowingProgress(true, id))
  let response = await apiMethod(id)
  if (response.resultCode === 0) {
    dispatch(actionCreator)
  }
  dispatch(toggleIsFollowingProgress(false, id))
}

export const unFollow = (id) => {
  return async (dispatch) => {
    followUnfollowFlow(dispatch, id, followAPI.unFollow.bind(id), acceptUnFollow)
  }
}

export const follow = (id) => {
  return async (dispatch) => {
    followUnfollowFlow(dispatch, id, followAPI.follow.bind(id), acceptFollow)
  }
}

export default partnersReducer;