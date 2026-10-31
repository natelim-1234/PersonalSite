import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import MailIcon from '@mui/icons-material/Mail'
import './iconLabel.css'

function IconLabel({text}) {
    return(
        <span className='icon-label-container'>
            <span className='icon'>
                <MailIcon></MailIcon>
            </span>
            <span>
                <p className='label-text'>
                    {text}
                </p>
            </span>
        </span>
    )

}

export default IconLabel;