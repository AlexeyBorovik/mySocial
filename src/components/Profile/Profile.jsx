import React, { useState } from 'react'
import style from './Profile.module.css'
import userPhoto from './../../assets/images/user.jpeg'
import Preloader from '../common/Preloader/Preloader'
import ProfileStatusWithHooks from './ProfileStatusWithHooks'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import ProfileInfoForm from './ProfileInfoForm'


const Profile = ({ isOwner, profile, status, updateStatus, savePhoto, saveProfile }) => {

    let [editMode, setEditMode] = useState(false)

    if (!profile) {
        return <Preloader />
    }

    const onPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }
    const onSubmit = (formData) => {
        saveProfile(formData).then(() => {
            setEditMode(false)
        })
    }

    return <div className={style.name}>
        <div>
            <img alt="" className={style.ava}
                src={profile.photos.large || userPhoto} />
        </div>
        {isOwner && <input type={'file'} onChange={onPhotoSelected}></input>}

        {editMode
            ? <ProfileInfoForm profile={profile} initialValues={profile} onSubmit={onSubmit} />
            : <ProfileInfo profile={profile} isOwner={isOwner} activateEditMode={() => { setEditMode(true) }} />}

        <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
    </div>
}


export default Profile