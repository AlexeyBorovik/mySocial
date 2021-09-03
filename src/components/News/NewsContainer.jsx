import React from 'react';
import { addPostActionCreator, updateNewPostActionCreator } from '../Redux/news-reducer';
import News from './News';


const NewsContainer = (props) => {
    
    let state = props.store.getState()

    let addPost = () => {
        props.store.dispatch(addPostActionCreator())
    }
    let onPostChange = (text) => {
        let action = updateNewPostActionCreator(text);
        props.store.dispatch(action);
    }

    return <News
        addPost={addPost}
        updateNewPostText={onPostChange}
        post={state.newsPage.post}
        newPostText={state.newsPage.newPostText} />
}


export default NewsContainer;