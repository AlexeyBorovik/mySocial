import classes from './News.module.css'
import Post from './Posts/Post';
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {required, maxLengthCreator} from './../utilities/validators/validator.js'
import {Textarea} from './../common/FormsControls/FormsControls.js'


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

const maxLength10 = maxLengthCreator(10)

const AddPostForm = (props) => {
    return <div>
        <form onSubmit={props.handleSubmit}>
            <Field name='newPostText' component={Textarea} placeholder='Type here...' 
            validate={[required, maxLength10]} />
            <button>Add</button>
        </form>
    </div>
}

const AddPostFormRedux = reduxForm({ form: 'newPostAddForm' })(AddPostForm)


export default News;