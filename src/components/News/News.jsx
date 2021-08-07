import classes from './News.module.css'
import Post from './Posts/Post';

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
            < Post text= "What`s up guys?" likes='2' dislikes='5'/>
            < Post text= "It`s fist posting in my life!" likes='3' dislikes='3'/>
            < Post text= "Coronavirus ended!!! We can leave the F*** masks!!!" likes='25' dislikes='0'/>
        </div>
    </div>
    );
}
export default News;