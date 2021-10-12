import classes from './Messages.module.css'
import Message from './Message'
import DialogueItem from './DialogueItem'
import React from 'react'
import { reduxForm } from 'redux-form'
import { createField, Textarea } from './../common/FormsControls/FormsControls.js'
import { maxLengthCreator, required } from '../utilities/validators/validator'

const Messages = (props) => {

    let messageElements = props.messages.map(messages => <Message text={messages.text} />);
    let dialoguesElements = props.dialogues.map(dialogues => <DialogueItem name={dialogues.name} />);


    let addNewMessage = (values) => {
        props.addNewMessage(values.newMessageBody)
    }


    return (
        <div className={classes.wrapper}>
            <div>
                <AddMessageFormRedux onSubmit={addNewMessage} />
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

const maxLength20 = maxLengthCreator(20)

const AddMessageForm = (props) => {
    return <div>
        <form onSubmit={props.handleSubmit} >
            {createField("Type here...", Textarea, 'newMessageBody', [required, maxLength20])}
            <button>Add</button>
        </form>
    </div>
}

const AddMessageFormRedux = reduxForm({ form: 'dialogueAddMessageForm' })(AddMessageForm)

export default Messages;