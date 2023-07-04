import React from 'react';
// Third party libraries
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//Helpers
import { getCurrentYear } from '../../helpers/getCurrentYear';
//CSS
import styles from "./Footer.module.css"
const Footer = () => {
  return (
    <footer>
        <div className={styles.footerNavContainer}>
            <nav className={styles.footerNav}>
                <a className={styles.footerItem} href="#">© Saul Castillo | {getCurrentYear()}</a>
                <a className={styles.footerItem} href='https://github.com/secch97' target={"_blank"}>
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
