import classes from './Header.module.css'

const Header = () => {
    return (
        <div className={classes.header}>
            <img src = "/Images/LOGO.png" alt =""/>
            <div className = {classes.text}>Слоган</div>
            <div className ={`${classes.active} ${classes.text} `}>Кнопки</div>
        </div>
    )
}

export default Header;