const ADD_DIALOGUE = 'ADD-DIALOGUE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

let initialState = {
  dialogues: [
    { name: 'Pasha' },
    { name: 'Ilya' },
    { name: 'Artyom' },
    { name: 'Lesha' },
    { name: 'Nataly' },
    { name: 'Nastya' },
    { name: 'Roman' }
  ],
  messages: [
    { text: 'Hey, how is react?' },
    { text: 'Did you find a job?' },
    { text: 'You`re awesome' },
    { text: 'Hey Niko, it`s Roman' },
    { text: 'Why are you ignoring me?! You`re coding again?!' }
  ],
  newMessageText: 'Type here...'
}


const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DIALOGUE:
      let newMessage = {
        text: state.newMessageText
      }
      return {
        ...state,
        messages: [...state.messages, newMessage],
        newMessageText: ''
      }
    case UPDATE_NEW_MESSAGE_TEXT:
      return {
        ...state,
        newMessageText: action.newMessageText
      }
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