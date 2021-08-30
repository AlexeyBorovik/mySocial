import classes from './Messages.module.css'
import Message from './Message'
import DialogueItem from './DialogueItem'
import React from 'react'
import { addDialogueActionCreator,updateNewMessageActionCreator } from '../Redux/state'

const Messages = (props) => {

    let messageElements = props.messagesPage.messages.map(messages => <Message text={messages.text} />);
    let dialoguesElements = props.messagesPage.dialogues.map(dialogues => <DialogueItem name={dialogues.name} />);

    let newMessageElement = React.createRef();

    let addNewMessage = () => {
        props.dispatch(addDialogueActionCreator());
    }

    let onNewMessageChange = () => {
        let text = newMessageElement.current.value;
        props.dispatch(updateNewMessageActionCreator(text))
    }

    return (
        <div className={classes.wrapper}>
            <div>
                <textarea 
                ref={newMessageElement}
                value={props.messagesPage.newMessageText} 
                onChange={onNewMessageChange} />
                <button onClick={addNewMessage}>Add</button>
            </div>

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