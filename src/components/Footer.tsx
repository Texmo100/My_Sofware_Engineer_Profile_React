import styles from './Footer.module.css';
import { FaReact } from "react-icons/fa";
import { SiVite } from "react-icons/si";

const Footer = () => {
    return (
        <footer>
            <p className={styles.reactProjectText}>Project created with</p>
            <div>
                <SiVite className={styles.footerIcon} />
                <FaReact className={styles.footerIcon}/>
            </div>
        </footer>
    );
};

export default Footer;
