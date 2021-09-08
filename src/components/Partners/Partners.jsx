import React from 'react'
import style from './Partners.module.css'

const Partners = (props) => {
    return (

        <div> Partners {props.user.map(u => <div key={u.id}>
            <span>
                <div>
                    <img alt="" className={style.ava} src={u.photoUrl} />
                </div>
                <div>
                    {u.followed 
                    ? <button onClick={()=> {props.unFollow(u.id)}} >Unfollow</button>
                    : <button onClick={()=> {props.follow(u.id)}} >Follow</button>}
                </div>
            </span>
            <span>
                <span>
                    <div>{u.name}</div>
                    <div> Status: {u.status}</div>
                </span>
                <span>
                    <div> From: {u.location.country}</div>
                    <div>{u.location.city}</div>
                </span>
            </span>
        </div>)}
        </div>)
}

export default Partners