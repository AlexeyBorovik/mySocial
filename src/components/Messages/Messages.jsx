import classes from './Messages.module.css'
import Message from './Message'
import DialogueItem from './DialogueItem'

const Messages = (props) => {

    let messageElements = props.messagesPage.messages.map(messages => <Message text={messages.text} />);
    let dialoguesElements = props.messagesPage.dialogues.map(dialogues => <DialogueItem name={dialogues.name} />);


    return (
        <div className={classes.wrapper}>
            <div className={classes.dialoguesList}>
                {dialoguesElements}
            </div>

            <div className={classes.dialogue}>
                {messageElements}
            </div>
        </div>
    )
}



export default Messages;