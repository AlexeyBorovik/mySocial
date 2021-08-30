const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'


const newsReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                likes: 6,
                dislikes: 2,
                text: state.newPostText,
            }
            state.post.push(newPost);
            state.newPostText = '';
            return state
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newPostText;
            return state
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