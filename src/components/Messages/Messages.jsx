import classes from './Messages.module.css'
import Message from './Message'
import DialogueItem from './DialogueItem'
import React from 'react'

const Messages = (props) => {

    let messageElements = props.messagesPage.messages.map(messages => <Message text={messages.text} />);
    let dialoguesElements = props.messagesPage.dialogues.map(dialogues => <DialogueItem name={dialogues.name} />);

    let newMessageElement = React.createRef();

    let addNewMessage = () => {
        let text = newMessageElement.current.value;
        props.addDialogue(text);
    }

    return (
        <div className={classes.wrapper}>
            <div>
                <textarea ref={newMessageElement}>NewMessage</textarea>
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