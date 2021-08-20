import classes from './News.module.css'
import Post from './Posts/Post';
import React from 'react';


const News = (props) => {

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        alert(text)
    }

    let postsElements = props.newsPage.post.map(post => <Post text={post.text} likes={post.likes} dislikes={post.dislikes} />)

    return (<div className={classes.news} >
        <div>
            <textarea ref={newPostElement}>НУ вводи уже!!!</textarea>
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