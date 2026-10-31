import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import './footer.css'
import favicon from '../../../public/img/favicon.svg'
import resumePdf from '../../../public/img/Nathan_Limono_Resume_UX_2026.pdf'

function Footer() {
    return (
        <footer className='footer'>
            <div className='footer-inner'>
                <div className='footer-flex-container'>
                    <img className="footer-logo" src={favicon} alt="" aria-hidden="true" />
                    <div className='footer-navigation'>
                        <h2>Navigation</h2>
                        <NavLink className={'footer-link'}>Home</NavLink>
                        <a className='footer-link' href={resumePdf} target='_blank' rel="noopener noreferrer">
                            Resume
                        </a>
                        <NavLink className={'footer-link'}>About</NavLink>

                    </div>
                    <div className='footer-links'>
                        <h2>Links</h2>
                        <a className='footer-link' href='https://www.linkedin.com/in/nathan-limono-975a26167/' target='_blank' rel="noopener noreferrer">
                            Linkedin
                        </a>

                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;