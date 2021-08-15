import { NavLink } from 'react-router-dom'
import classes from './Messages.module.css'

const Messages = (props) => {

    const DialogueItem = (props) => {
        let address = '/messages/' + props.name
        return (
            <div className={classes.item}>
                <NavLink to={address}>{props.name}</NavLink>
            </div>
        )
    }

    const Message = (props) => {
        return (
            <div className={classes.message}>
                {props.text}
            </div>
        )
    }


    let dialogues = [
        { name: 'Pasha' },
        { name: 'Ilya' },
        { name: 'Artyom' },
        { name: 'Lesha' },
        { name: 'Nataly' },
        { name: 'Nastya' },
        { name: 'Roman'}
    ]


    let messages = [
        { text: 'Hey, how is react?' },
        { text: 'Did you find a job?' },
        { text: 'You`re awesome' },
        { text: 'Hey Niko, it`s Roman' },
        { text: 'Why are you ignoring me?! You`re coding again?!' }
    ]


    let dialoguesElements = dialogues.map(dialogues => <DialogueItem name={dialogues.name} />);
    let messageElements = messages.map(messages => <Message text={messages.text} />);


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

export default Messages