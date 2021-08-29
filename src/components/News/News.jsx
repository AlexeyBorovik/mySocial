import classes from './News.module.css'
import Post from './Posts/Post';
import React from 'react';


const News = (props) => {

    let postsElements = props.newsPage.post.map(post => <Post text={post.text} likes={post.likes} dislikes={post.dislikes} />)

    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost()
    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }
    
    return (<div className={classes.news} >
        <div>
            <textarea onChange={onPostChange} ref={newPostElement} value={props.newsPage.newPostText}/>
            <br></br>
            <button onClick={addPost}>Add</button>
        </div>

        <div>
            {postsElements}
        </div>
    </div>
    );
}


export default News;