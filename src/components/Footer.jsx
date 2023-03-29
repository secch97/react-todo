import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { getCurrentYear } from '../helpers/getCurrentYear';

const Footer = () => {
  return (
    <footer>
        <div className="footer-nav-container">
            <nav className='footer-nav'>
                <a className='footer-item'>© Saul Castillo | {getCurrentYear()}</a>
                <a className='footer-item' href='https://github.com/secch97' target={"_blank"}>
                    <FontAwesomeIcon className="brand" icon={["fab", "github"]} size="2x"></FontAwesomeIcon>
                </a>
            </nav>
        </div>
    </footer>
  )
};

export {
    Footer as default
};
