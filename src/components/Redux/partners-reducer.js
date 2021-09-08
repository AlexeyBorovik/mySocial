const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SETUSERS = 'SETUSERS';


let initialState = {
  user: [
    {id: 1, name: 'Roman', followed: true , status: 'The Greatest man in the Liberty City', photoUrl: "https://i.pinimg.com/originals/6f/bb/f9/6fbbf9b14522436722eabac9610aeb68.png", location: {city: 'Minsk', country: 'Belarus'}},
    {id: 2, name: 'Dmitry', followed: true , status: `I'll help you to learn JS`, photoUrl: "https://i.pinimg.com/originals/6f/bb/f9/6fbbf9b14522436722eabac9610aeb68.png", location: {city: 'Moscow', country: 'Russia'}},
    {id: 3, name: 'Andrew', followed: false , status: `I'm on chill, drink beer i can)`, photoUrl: "https://i.pinimg.com/originals/6f/bb/f9/6fbbf9b14522436722eabac9610aeb68.png", location: {city: 'Kiev', country: 'Ukraine'}},
    {id: 4, name: 'Pablo', followed: false , status: 'Who want to stole me to the Dubai?', photoUrl: "https://i.pinimg.com/originals/6f/bb/f9/6fbbf9b14522436722eabac9610aeb68.png", location: {city: 'Warsaw', country: 'Poland'}}
  ],


}


const partnersReducer = (state = initialState, action) => {
  switch(action.type) {
    case FOLLOW:
      return {
        ...state,
        user: state.user.map(u => {
          if (u.id === action.id) {
            return {...u, followed: true}
          }         
          return u
        })
      }
    
    case UNFOLLOW: 
    return {
      ...state,
      user: state.user.map( u => {
        if (u.id === action.id) {
          return {...u, followed: false}
        }
        return u
      })
    }

    case SETUSERS: {
      return {...state, user: [...state.user, ...action.user]}
    }

    default :
    return state;
  }
}


export const followAC = (id) => ({type: FOLLOW, id})
export const unFollowAC = (id) => ({type: UNFOLLOW, id})
export const setUsersAC = (user) => ({type: SETUSERS, user})

export default partnersReducer;