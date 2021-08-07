import { NavLink } from 'react-router-dom'
import classes from './Messages.module.css'

const DialogueItem = (props) => {
    let adress = '/messages/' + props.id
    return (
        <div className={classes.item}>
            <NavLink to={adress}>{props.name}</NavLink>
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


let dialoguesData = [
    {id: 1, name: 'Pasha'},
    {id: 2, name: 'Ilya'},
    {id: 3, name: 'Artyom'},
    {id: 4, name: 'Lesha'},
    {id: 5, name: 'Nataly'},
    {id: 6, name: "Nastya"}
]


let messagesData = [
    {id: 1, text: 'Hey, how is react?'},
    {id: 2, text: 'Did you find a job?'},
    {id: 3, text: 'You`re awesome'},
    {id: 4, text: 'Hey Niko, it`s Roman'}
]

const Messages = (props) => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.dialoguesList}>
                <DialogueItem id={dialoguesData[0].id} name={dialoguesData[0].name} />
                <DialogueItem id={dialoguesData[1].id} name={dialoguesData[1].name} />
                <DialogueItem id={dialoguesData[2].id} name={dialoguesData[2].name} />
                <DialogueItem id={dialoguesData[3].id} name={dialoguesData[3].name} />
                <DialogueItem id={dialoguesData[4].id} name={dialoguesData[4].name} />
                <DialogueItem id={dialoguesData[5].id} name={dialoguesData[5].name} />
            </div>


            <div className={classes.dialogue}>
                <Message text={messagesData[0].text}/>
                <Message text={messagesData[1].text}/>
                <Message text={messagesData[2].text}/>
                <Message text={messagesData[3].text}/>
            </div>
        </div>
    )
}

export default Messages