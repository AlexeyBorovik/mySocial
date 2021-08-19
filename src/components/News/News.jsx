import classes from './News.module.css'
import Post from './Posts/Post';


const News = (props) => {

    let postsElements = props.newsPage.post.map(post => <Post text={post.text} likes={post.likes} dislikes={post.dislikes} />)

    return (<div className={classes.news} >
        <div>
            News Area!!!
            <br></br>
            <textarea>НУ вводи уже!!!</textarea>
            <br></br>
            <button>Add New Post</button>
        </div>

        <div>
            {postsElements}
        </div>
    </div>
    );
}


export default News;