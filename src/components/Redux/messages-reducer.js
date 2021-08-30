const ADD_DIALOGUE = 'ADD-DIALOGUE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

const messageReducer = (state, action) => {
    switch (action.type) {
        case ADD_DIALOGUE:
            let newMessage = {
                text: state.newMessageText
            }
            state.messages.push(newMessage);
            state.newMessageText = '';
            return state
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newMessageText;
            return state
        default: return state
    }
}

export const addDialogueActionCreator = () => {
    return {
      type: 'ADD-DIALOGUE'
    }
  }
  
  export const updateNewMessageActionCreator = (text) => {
    return {
      type: 'UPDATE-NEW-MESSAGE-TEXT',
      newMessageText: text
    }
  }

export default messageReducer