import React from 'react'
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Links() {

    const openLink = (url) => {
        console.log("opening new window")
        window.open(url, '_blank')
    }

    return (
        <div>
            <FaLinkedin style={{ cursor: 'pointer', marginInline: '10px' }} size={40} onClick={() => openLink(process.env.REACT_APP_LINKEDINURL)} />
            <FaGithub style={{ cursor: 'pointer', marginInline: '10px' }} size={40} onClick={() => openLink(process.env.REACT_APP_GITHUBURL)} />
        </div>
    )
}
