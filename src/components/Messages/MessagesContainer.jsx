import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { addDialogueActionCreator } from './../../Redux/messages-reducer'
import Messages from './Messages';


const mapStateToProps = (state) => {
    return {
        dialogues: state.messagesPage.dialogues,
        messages: state.messagesPage.messages,
        newMessageText: state.messagesPage.newMessageText,
        isAuth: state.auth.isAuth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addNewMessage: (newMessageBody) => {
            dispatch(addDialogueActionCreator(newMessageBody));
        }
    }
}

const MessagesContainer = compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Messages)

export default MessagesContainer;