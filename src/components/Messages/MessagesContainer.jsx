import { connect } from 'react-redux';
import { addDialogueActionCreator, updateNewMessageActionCreator } from './../../Redux/messages-reducer'
import Messages from './Messages';


const mapStateToProps = (state) => {
    return {
        dialogues: state.messagesPage.dialogues,
        messages: state.messagesPage.messages,
        newMessageText: state.messagesPage.newMessageText
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addNewMessage: () => {
            dispatch(addDialogueActionCreator());
        },
        updateNewMessage: (text) => {
            dispatch(updateNewMessageActionCreator(text))
        }
    }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages)


export default MessagesContainer;