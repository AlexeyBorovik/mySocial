import classes from './Messages.module.css'
import { NavLink } from 'react-router-dom'

const DialogueItem = (props) => {
    let address = '/messages/' + props.name
    return (
        <div className={classes.item}>
            <NavLink to={address}>{props.name}</NavLink>
        </div>
    )
}

export default DialogueItem;