import React from 'react'
import style from './Profile.module.css'
import userPhoto from './../../assets/images/user.jpeg'
import Preloader from '../common/Preloader/Preloader'
import ProfileStatusWithHooks from './ProfileStatusWithHooks'


const Profile = (props) => {

    if (!props.profile) {
        return <Preloader />
    }

    return <div className={style.name}>
        <div>
            <img alt="" className={style.ava} 
            src={props.profile.photos.large != null ? 
            props.profile.photos.large 
            : userPhoto} />
        </div>
        <div>Nick Name: {props.profile.fullName}</div>
        <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
    </div>
}


export default Profile