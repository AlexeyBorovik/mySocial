import React from 'react'
import { addDialogueActionCreator, updateNewMessageActionCreator } from '../Redux/messages-reducer'
import Messages from './Messages';

const MessagesContainer = (props) => {

    let state = props.store.getState()

    let addNewMessage = () => {
        props.store.dispatch(addDialogueActionCreator());
    }

    let onNewMessageChange = (text) => {
        props.store.dispatch(updateNewMessageActionCreator(text))
    }

    return (
        <Messages
            addNewMessage={addNewMessage}
            updateNewMessage={onNewMessageChange}
            dialogues={state.messagesPage.dialogues}
            messages={state.messagesPage.messages}
            newMessageText={state.messagesPage.newMessageText}
        />
    )
}



export default MessagesContainer;