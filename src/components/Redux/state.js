import { rerenderEntireTree } from "../../render";

let state = {

  newsPage: {
    post: [
      { id: 1, likes: 2, dislikes: 5, text: "What`s up guys?" },
      { id: 2, likes: 3, dislikes: 3, text: "It`s fist posting in my life!" },
      { id: 3, likes: 25, dislikes: 0, text: "Coronavirus ended!!! We can leave the F*** masks!!!" },
    ]
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
    ]
  }
}

export let addPost = (postMessage) => {
  let newPost = {
    id: 5,
    likes: 0,
    dislikes: 0,
    text: postMessage,
  }
  state.newsPage.post.push(newPost);
  rerenderEntireTree(state);
}

export let addDialogue = (textMessage) => {
  let newMessage = {
    text: textMessage
  }
  state.messagesPage.messages.push(newMessage);
  rerenderEntireTree(state);
}

export default state