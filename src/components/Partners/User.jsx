import { NavLink } from "react-router-dom"
import style from './User.module.css'
import userPhoto from './../../assets/images/user.jpeg'


const User = (props) => {

    return (
        <div> {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                            <img alt="" className={style.ava} src={u.photos.small != null ? u.photos.small : userPhoto} />
                        </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button
                                disabled={props.followingInProgress.some(id => id === u.id)}
                                onClick={() => {
                                    props.unFollow(u.id)
                                }}>Unfollow</button>

                            : <button
                                disabled={props.followingInProgress.some(id => id === u.id)}
                                onClick={() => {
                                    props.follow(u.id)
                                }}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div> Status: {u.status}</div>
                    </span>
                </span>
            </div>)
        } </div>
    )
}

export default User