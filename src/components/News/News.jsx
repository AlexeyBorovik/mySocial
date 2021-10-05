import classes from './News.module.css'
import Post from './Posts/Post';
import React from 'react';
import { Field, reduxForm } from 'redux-form';


const News = (props) => {

    let postsElements =
        props.post.map(post => <Post text={post.text} likes={post.likes} dislikes={post.dislikes} />)


    let addPost = (values) => {
        props.addPost(values.newPostText)
    }

    return (<div className={classes.news} >
        <div>
            <AddPostFormRedux onSubmit={addPost} />
        </div>

        <div>
            {postsElements}
        </div>
    </div>
    );
}

const AddPostForm = (props) => {
    return <div>
        <form onSubmit={props.handleSubmit}>
            <Field name='newPostText' component='textarea' placeholder='Type here...' />
            <button>Add</button>
        </form>
    </div>
}

const AddPostFormRedux = reduxForm({ form: 'newPostAddForm' })(AddPostForm)


export default News;