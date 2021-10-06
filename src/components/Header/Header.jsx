import { NavLink } from 'react-router-dom';
import classes from './Header.module.css'

const Header = (props) => {
    return (
        <div className={classes.header}>
            <img src = "/Images/LOGO.png" alt =""/>
            <div className = {classes.text}>Слоган</div>
            <div className ={`${classes.active} ${classes.text} `}>Кнопки</div>
            <div className={classes.loginBlock}>
                {props.isAuth 
                ? <NavLink to={'/login'}>{props.login} <button onClick={props.logout}>Log Out</button></NavLink>
                : <div> You`re not authorized </div>}
            </div>
        </div>
    )
}

export default Header;