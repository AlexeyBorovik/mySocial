import classes from './News.module.css'
import Post from './Posts/Post';


const News = () => {

    let post = [
        { id: 1, likes: 2, dislikes: 5, text: "What`s up guys?" },
        { id: 2, likes: 3, dislikes: 3, text: "It`s fist posting in my life!" },
        { id: 3, likes: 25, dislikes: 0, text: "Coronavirus ended!!! We can leave the F*** masks!!!" },
    ]

    let postsElements = post.map(post => <Post text={post.text} likes={post.likes} dislikes={post.dislikes} />)

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