import styles from './Navbar.module.css';
import { Link, useLocation } from 'react-router';

const Navbar = () => {
    const location = useLocation();

    return (
        <nav>
            <ul className={styles.navList}>
                <li className={styles.navLink}>
                    <Link to="/" className={location.pathname === '/' ? styles.active : ''}>Home</Link>
                </li>
                <li className={styles.navLink}>
                    <Link to="/about-me" className={location.pathname === '/about-me' ? styles.active : ''}>About me</Link>
                </li>
                <li className={styles.navLink}>
                    <Link to="/projects" className={location.pathname === '/projects' ? styles.active : ''}>Projects</Link>
                </li>
                <li className={styles.navLink}>
                    <Link to="/contact-me" className={location.pathname === '/contact-me' ? styles.active : ''}>Contact me</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
