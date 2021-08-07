import { NavLink } from 'react-router-dom';
import classes from '../SideBar/SideBar.module.css'

const SideBar = () => {
    return (
        <div className={classes.sidebar}>
            <div>
                <NavLink to='/news' className={classes.link} activeClassName={`${classes.link} ${classes.active}`}>News</NavLink></div>
            <div>
                <NavLink to='/messages' className={classes.link} activeClassName={`${classes.link} ${classes.active}`}>Messages</NavLink></div>
            <div>
                <NavLink to='portfolio' className={classes.link} activeClassName={`${classes.link} ${classes.active}`}>Portfolio</NavLink></div>
            <div>
                <NavLink to='companies' className={classes.link} activeClassName={`${classes.link} ${classes.active}`}>Companies</NavLink></div>
            <div>
                <NavLink to='partners' className={classes.link} activeClassName={`${classes.link} ${classes.active}`}>Partners</NavLink></div>
            <div>
                <NavLink to='music'>Music</NavLink></div>
        </div>
    )
}

export default SideBar;