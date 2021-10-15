import React from "react"
import style from "./Contacts.module.css"


const Contacts = ({ contactTitle, contactValue }) => {
    return (
        <div className={style.contact}><b>{contactTitle}:</b> {contactValue}</div>
    )
}

export default Contacts