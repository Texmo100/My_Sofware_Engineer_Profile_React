import styles from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav>
            <ul className={styles.navList}>
                <li className={styles.navLink}>
                    <a href="/home">Home</a>
                </li>
                <li className={styles.navLink}>
                    <a href="/about-me">About me</a>
                </li>
                <li className={styles.navLink}>
                    <a href="/projects">Projects</a>
                </li>
                <li className={styles.navLink}>
                    <a href="/contact-me">Contact me</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
