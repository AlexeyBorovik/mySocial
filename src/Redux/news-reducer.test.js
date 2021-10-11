import newsReducer, { addPostActionCreator } from "./news-reducer";


it('new post should be added', () => {

  // 1 step - initial test state

  let action = addPostActionCreator('Borovik')
  let state = {
    post: [
      { id: 1, likes: 2, dislikes: 5, text: "What`s up guys?" },
      { id: 2, likes: 3, dislikes: 3, text: "It`s fist posting in my life!" },
      { id: 3, likes: 25, dislikes: 0, text: "Coronavirus ended!!! We can leave the F*** masks!!!" },
    ]
  }

  // 2 step - action 
  let newState = newsReducer(state, action)

  // 3 step - expectation
  expect(newState.post.length).toBe(4)
  expect(newState.post[2].text).toBe("Coronavirus ended!!! We can leave the F*** masks!!!")
  expect(newState.post[2].likes).toBe(25)
  expect(newState.post[2].dislikes).toBe(0)



});
