const ADD_DIALOGUE = 'ADD-DIALOGUE'

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
  ]
}


const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DIALOGUE:
      return {
        ...state,
        messages: [...state.messages, {text: action.newMessageBody}],
      }
    default: return state
  }
}

export const addDialogueActionCreator = (newMessageBody) => {
  return {
    type: 'ADD-DIALOGUE',
    newMessageBody: newMessageBody
  }
}


export default messageReducer