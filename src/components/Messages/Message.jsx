import classes from './Messages.module.css'

const Message = (props) => {
    return (
        <div className={classes.message}>
            {props.text}
        </div>
    )
}


export default Message