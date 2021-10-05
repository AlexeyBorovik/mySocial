const ADD_POST = 'ADD-POST'

let initialState = {
  post: [
    { id: 1, likes: 2, dislikes: 5, text: "What`s up guys?" },
    { id: 2, likes: 3, dislikes: 3, text: "It`s fist posting in my life!" },
    { id: 3, likes: 25, dislikes: 0, text: "Coronavirus ended!!! We can leave the F*** masks!!!" },
  ]
}

const newsReducer = (state = initialState, action) => {
  switch (action.type) {

    case ADD_POST: {
      let newPost = {
        id: 5,
        likes: 6,
        dislikes: 2,
        text: action.newPostText,
      }
      return {
        ...state,
        post: [...state.post, newPost]
      }
    }

    default: return state
  }
}


export const addPostActionCreator = (newPostText) => {
  return {
    type: 'ADD-POST',
    newPostText
  }
}

export default newsReducer