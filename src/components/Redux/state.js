let store = {
  _state: {

    newsPage: {
      post: [
        { id: 1, likes: 2, dislikes: 5, text: "What`s up guys?" },
        { id: 2, likes: 3, dislikes: 3, text: "It`s fist posting in my life!" },
        { id: 3, likes: 25, dislikes: 0, text: "Coronavirus ended!!! We can leave the F*** masks!!!" },
      ],
      newPostText: 'let`s share smth new in you`re life'
    },

    messagesPage: {
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
  },


  _noticeUser() {
    console.log('State Changed')
  },


  getState() {
    return this._state
  },
  subscribe(observer) {
    this._noticeUser = observer;
  },


  dispatch(action) {
    if (action.type === 'ADD-POST') {
      let newPost = {
        id: 5,
        likes: 6,
        dislikes: 2,
        text: this._state.newsPage.newPostText,
      }
      this._state.newsPage.post.push(newPost);
      this._state.newsPage.newPostText = '';
      this._noticeUser(this._state);
    } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
      this._state.newsPage.newPostText = action.newPostText;
      this._noticeUser(this._state);
    } else if (action.type === 'ADD-DIALOGUE'){
      let newMessage = {
        text: this._state.messagesPage.newMessageText
      }
      this._state.messagesPage.messages.push(newMessage);
      this._state.messagesPage.newMessageText = '';
      this._noticeUser(this._state);
    } else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
      this._state.messagesPage.newMessageText = action.newMessageText;
      this._noticeUser(this._state);
    }
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

export default store
window.store = store