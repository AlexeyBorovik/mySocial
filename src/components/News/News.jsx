import classes from './News.module.css'
import Post from './Posts/Post';


let newsData = [
    {id: 1, likes: 2, dislikes: 5, text: "What`s up guys?"},
    {id: 2, likes: 3, dislikes: 3, text: "It`s fist posting in my life!"},
    {id: 3, likes: 25, dislikes: 0, text: "Coronavirus ended!!! We can leave the F*** masks!!!"}
]


const News = () => {
    return (<div className={classes.news} >
        <div>
            News Area!!!
            <br></br>
            <textarea></textarea>
            <br></br>
            <button>Add New Post</button>
        </div>

        <div>
            < Post text={newsData[0].text} likes={newsData[0].likes} dislikes={newsData[0].dislikes}/>
            < Post text={newsData[1].text} likes={newsData[1].likes} dislikes={newsData[1].dislikes}/>
            < Post text={newsData[2].text} likes={newsData[2].likes} dislikes={newsData[2].dislikes}/>
        </div>
    </div>
    );
}
export default News;