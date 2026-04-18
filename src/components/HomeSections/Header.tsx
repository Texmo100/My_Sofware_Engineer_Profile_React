import styles from './Header.module.css';
import Navbar from '../Navbar';

const Header = () => {
    return (
        <header>
            <Navbar />
            <div className={styles.headerTitle}>
                <h1>Hey there, I'm Isaac a Software Engineer</h1>
            </div>
            <div className={styles.headerButton}>
                <button>Let's talk</button>
            </div>
        </header>
    );
};

export default Header;
