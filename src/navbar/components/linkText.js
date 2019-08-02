import React from 'react'
import { Link } from 'react-router-dom'

import '../styles/linkstyle.scss'

export const LinkText = (props) => {
    console.log(props.link)
    return (
        <div className="link-container2">
            <div className="text-cutout">{props.link}</div>
            <div className="text-cutout2">{props.link}</div>
            {/* <Link to="/work">Work</Link> */}
        </div>
    )
}