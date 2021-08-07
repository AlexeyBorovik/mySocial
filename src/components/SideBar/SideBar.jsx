import classes from '../SideBar/SideBar.module.css'

const SideBar = () => {
    return (
        <div className={classes.sidebar}>
            <div>
                <a href='/news'>News</a></div>
            <div>
                <a href='/messages'>Messages</a></div>
            <div>
                <a href='portfolio'>Portfolio</a></div>
            <div>
                <a href='companies'>Companies</a></div>
            <div>
                <a href='partners'>Partners</a></div>
            <div>
                <a href='music'>Music</a></div>
        </div>
    )
}

export default SideBar;