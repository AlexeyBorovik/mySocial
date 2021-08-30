import newsReducer from "./news-reducer";
import messageReducer from "./messages-reducer";


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
    this._state.newsPage = newsReducer(this._state.newsPage, action)
    this._state.messagesPage = messageReducer(this._state.messagesPage, action)
    this._noticeUser(this._state)
  }
}

export default store
window.store = store