import styles from './Home.module.css';
import Footer from '../components/Footer';
import { Link } from 'react-router';

const Home = () => {
    return (
        <div className={styles.wrapper}>
            <header>
                <div className={styles.headerTitle}>
                    <h1>Hey There, I'm Isaac a Software Engineer</h1>
                </div>
                <div className={styles.headerButton}>
                    <Link to='./contact-me' className={`${styles.linkTo} ${styles.headerButtonLink}`}>Let's talk</Link>
                </div>
            </header>

            <main>
                <div className={styles.notchWrapperAboutMe}>
                    <div className={styles.notchAboutMe}></div>
                </div>
                <div className={styles.aboutMeContent}>
                    <Link to='./about-me' className={`${styles.linkTo} ${styles.aboutMeLink}`}>About me</Link>
                    <h2>Explore My Career and Vision</h2>
                </div>
            </main>

            <section className={styles.projectsSection}>
                <div className={styles.projectsContent}>
                    <h3>Get a Glimpse of My Work</h3>
                    <Link to='./projects' className={`${styles.linkTo} ${styles.projectsLink}`}>Projects</Link>
                </div>
                <div className={styles.notchWrapperProjects}>
                    <div className={styles.notchProjects}></div>
                </div>
            </section>

            <section className={styles.contactMeSection}>
                <h4>Get In Touch</h4>
                <div className={styles.contactMeContent}>
                    <ul>
                        <div className={styles.contactMeItem}>
                            <li>Email</li>
                            <li>ir.isaac1000@gmail.com</li>
                        </div>

                        <div className={styles.contactMeItem}>
                            <li>Phone</li>
                            <li>+52 6621194655</li>
                        </div>

                        <div className={styles.contactMeItem}>
                            <li>LinkedIn</li>
                            <li>Isaac Iniguez Ruiz</li>
                        </div>
                    </ul>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Home;
