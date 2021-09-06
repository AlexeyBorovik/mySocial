const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState = {
  post: [
    { id: 1, likes: 2, dislikes: 5, text: "What`s up guys?" },
    { id: 2, likes: 3, dislikes: 3, text: "It`s fist posting in my life!" },
    { id: 3, likes: 25, dislikes: 0, text: "Coronavirus ended!!! We can leave the F*** masks!!!" },
  ],
  newPostText: 'let`s share smth new in you`re life'
}

const newsReducer = (state = initialState, action) => {
  switch (action.type) {

    case ADD_POST: {
      let newPost = {
        id: 5,
        likes: 6,
        dislikes: 2,
        text: state.newPostText,
      }
      return {
        ...state,
        post: [...state.post, newPost],
        newPostText: ''
      }
    }

    case UPDATE_NEW_POST_TEXT: {
      return {
        ...state,
        newPostText: action.newPostText
      }
    }
    default: return state
  }
}


export const addPostActionCreator = () => {
  return {
    type: 'ADD-POST'
  }
}
export const updateNewPostActionCreator = (text) => {
  return {
    type: 'UPDATE-NEW-POST-TEXT',
    newPostText: text
  }
}

export default newsReducer