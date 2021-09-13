const FOLLOW = 'FOLLOW';
const UN_FOLLOW = 'UN_FOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';


let initialState = {
  users: [
    /*{ id: 1, name: 'Roman', followed: true, status: 'The Greatest man in the Liberty City', photoUrl: "https://i.pinimg.com/originals/6f/bb/f9/6fbbf9b14522436722eabac9610aeb68.png", location: { city: 'Minsk', country: 'Belarus' } },
    { id: 2, name: 'Dmitry', followed: true, status: `I'll help you to learn JS`, photoUrl: "https://i.pinimg.com/originals/6f/bb/f9/6fbbf9b14522436722eabac9610aeb68.png", location: { city: 'Moscow', country: 'Russia' } },
    { id: 3, name: 'Andrew', followed: false, status: `I'm on chill, drink beer i can)`, photoUrl: "https://i.pinimg.com/originals/6f/bb/f9/6fbbf9b14522436722eabac9610aeb68.png", location: { city: 'Kiev', country: 'Ukraine' } },
    { id: 4, name: 'Pablo', followed: false, status: 'Who want to stole me to the Dubai?', photoUrl: "https://i.pinimg.com/originals/6f/bb/f9/6fbbf9b14522436722eabac9610aeb68.png", location: { city: 'Warsaw', country: 'Poland' } }
  */],
  pageSize: 25,
  totalUsersCount: 1,
  currentPage: 1,
  isFetching: false


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
      return { ...state, currentPage: action.currentPage}
    }

    case SET_TOTAL_USERS_COUNT: {
      return { ...state, totalUsersCount: action.count}
    }

    case TOGGLE_IS_FETCHING: {
      return { ...state, isFetching: action.isFetching}
    }

    default:
      return state;
  }
}


export const followAC = (id) => ({ type: FOLLOW, id })
export const unFollowAC = (id) => ({ type: UN_FOLLOW, id })
export const setUsersAC = (users) => ({ type: SET_USERS, users })
export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCountAC = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount})
export const toggleIsFetchingAC = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})

export default partnersReducer;