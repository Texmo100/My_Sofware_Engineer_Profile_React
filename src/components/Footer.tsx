import type React from 'react';
import styles from './Footer.module.css';
import { FaReact } from "react-icons/fa";
import { SiVite } from "react-icons/si";

const Footer = ():React.ReactElement => {
    return (
        <footer>
            <p className={styles.reactProjectText}>Project created with</p>
            <div>
                <FaReact className={styles.footerIcon}/>
                <SiVite className={styles.footerIcon} />
            </div>
        </footer>
    );
};

export default Footer;
