import React from "react"
import Contacts from './../Contacts/Contacts'



const ProfileInfo = (props) => {
    return (
        <div>
            <div>{props.isOwner && <button onClick={props.activateEditMode}>Edit Profile</button> }</div>
            <div>
                <b>Nick Name:</b> {props.profile.fullName}
            </div>
            <div>
                <b>lookingForAJob: </b> {props.profile.lookingForAJob ? 'Yes' : 'No'}
            </div>

            <div>
                {props.profile.lookingForAJob 
                ? <div> <b>Looking For A Job Description:</b> {props.profile.lookingForAJobDescription}</div>
                : null}
            </div>

            <div>
                <b>About me:</b> {props.profile.aboutMe}
            </div>
            <div>
            <b>Contacts :</b>{Object.keys(props.profile.contacts).map(key => {
                return <Contacts contactTitle={key} contactValue={props.profile.contacts[key]} />
            })}
        </div>
        </div>
    )
}


export default ProfileInfo