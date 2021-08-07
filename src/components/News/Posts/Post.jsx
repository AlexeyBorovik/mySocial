import classes from './Posts.module.css'

//let counter = ???? надо намутить счётчик 

//надо классово разделить аву и картинку поста


const Post = (props) => {
    return (<div>
        <div className={classes.post}>
            <img id='ava' src="https://pbs.twimg.com/profile_images/1072566468796145665/H4n-JHm2.jpg" alt=" " />
            {props.text}
            <img id='post' src="Images/Posts Images/Ship.jpg" alt=" " />
        </div>

        <div>
            <div> LIKE {props.likes}
            </div>
            <div> DISLIKE {props.dislikes}
            </div>
        </div>
    </div>
    );
}
export default Post;