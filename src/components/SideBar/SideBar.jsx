import classes from '../SideBar/SideBar.module.css'

const SideBar = () => {
    return (
        <div className={classes.sidebar}>
            <div>
                <a href='?'>News</a></div>
            <div>
                <a href='?'>Messages</a></div>
            <div>
                <a href='?'>Portfolio</a></div>
            <div>
                <a href='?'>Companies</a></div>
            <div>
                <a href='?'>Partners</a></div>
            <div>
                <a href='?'>Music</a></div>
        </div>
    )
}

export default SideBar;