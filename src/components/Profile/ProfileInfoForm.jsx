import React from "react"
import style from "./Contacts/Contacts.module.css"
import s from "./../common/FormsControls/FormsControls.module.css"
import { reduxForm } from "redux-form"
import { createField, Input, Textarea } from "../common/FormsControls/FormsControls"


const ProfileInfoForm = ({ handleSubmit, profile, error }) => {
    return (
        <form onSubmit={handleSubmit}>
            <div><button>Save</button></div>

            {error && <div className={s.formSummaryError}>
                {error}
            </div>
            }

            <div>
                <b>Nick Name:</b> {createField('Full Name', Input, 'fullName', [])}
            </div>
            <div>
                <b>lookingForAJob: </b>
                {createField('', Input, 'lookingForAJob', [], { type: "checkbox" },)}
            </div>

            <div>
                <div> <b>Looking For A Job Description:</b>
                    {createField('My professional skills', Textarea, "lookingForAJobDescription", [])}
                </div>
            </div>

            <div>
                <b>About me:</b>
                {createField('About Me', Textarea, "aboutMe", [])}
            </div>
            <div>
                <b>Contacts :</b>{Object.keys(profile.contacts).map(key => {
                    return <div key={key} className={style.contact}>
                        <b>{key}: {createField(key, Input, 'contacts.' + key, [])}</b>
                    </div>
                })}
            </div>
        </form>
    )
}

const ProfileInfoFormReduxForm = reduxForm({ form: 'edit-profile' })(ProfileInfoForm)


export default ProfileInfoFormReduxForm