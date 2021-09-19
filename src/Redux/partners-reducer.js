import { usersAPI, followAPI } from './../api/api'


const FOLLOW = 'FOLLOW';
const UN_FOLLOW = 'UN_FOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';


let initialState = {
  users: [
    /*{ id: 1, name: 'Roman', followed: true, status: 'The Greatest man in the Liberty City', photoUrl: "https://i.pinimg.com/originals/6f/bb/f9/6fbbf9b14522436722eabac9610aeb68.png", location: { city: 'Minsk', country: 'Belarus' } },
    { id: 2, name: 'Dmitry', followed: true, status: `I'll help you to learn JS`, photoUrl: "https://i.pinimg.com/originals/6f/bb/f9/6fbbf9b14522436722eabac9610aeb68.png", location: { city: 'Moscow', country: 'Russia' } },
    { id: 3, name: 'Andrew', followed: false, status: `I'm on chill, drink beer i can)`, photoUrl: "https://i.pinimg.com/originals/6f/bb/f9/6fbbf9b14522436722eabac9610aeb68.png", location: { city: 'Kiev', country: 'Ukraine' } },
    { id: 4, name: 'Pablo', followed: false, status: 'Who want to stole me to the Dubai?', photoUrl: "https://i.pinimg.com/originals/6f/bb/f9/6fbbf9b14522436722eabac9610aeb68.png", location: { city: 'Warsaw', country: 'Poland' } }
  */],
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
        user: state.users.map(u => {
          if (u.id === action.id) {
            return { ...u, followed: true }
          }
          return u
        })
      }

    case UN_FOLLOW:
      return {
        ...state,
        user: state.users.map(u => {
          if (u.id === action.id) {
            return { ...u, followed: false }
          }
          return u
        })
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


export const acceptfollow = (id) => ({ type: FOLLOW, id })
export const acceptUnFollow = (id) => ({ type: UN_FOLLOW, id })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, count: totalUsersCount })
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })
export const toggleIsFollowingProgress = (isFetching, id) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, id })

export const getUsers = (currentPage, pageSize) => {
  return (dispatch) => {

    dispatch(toggleIsFetching(true));

    usersAPI.getUsers(currentPage, pageSize)
      .then(response => {
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(response.items));
        dispatch(setTotalUsersCount(response.totalCount))
      })
  }
}

export const getDataPageChange = (pageNumber, pageSize) => {
  return (dispatch) => {
    dispatch(setCurrentPage(pageNumber))
    dispatch(toggleIsFetching(true));

    usersAPI.getUsers(pageNumber, pageSize)
      .then(response => {
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(response.items));
      })
  }
}

export const unFollow = (id) => {
  return (dispatch) => {
    dispatch(toggleIsFollowingProgress(true, id))

    followAPI.UnFollow(id)
      .then(response => {
        if (response.resultCode === 0) {
          dispatch(acceptUnFollow(id))
        }
        dispatch(toggleIsFollowingProgress(false, id))
      })
  }
}

export const follow = (id) => {
  return (dispatch) => {
    dispatch(toggleIsFollowingProgress(true, id))
    followAPI.follow(id)
      .then(response => {
        if (response.resultCode === 1) {
          dispatch(acceptfollow(id))
        }
        dispatch(toggleIsFollowingProgress(false, id))
      })
  }
}

export default partnersReducer;