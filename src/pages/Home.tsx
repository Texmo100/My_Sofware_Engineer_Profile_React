import styles from './Home.module.css';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div className={styles.wrapper}>
            <header>
                <div className={styles.headerTitle}>
                    <h1>Hey there, I'm Isaac a Software Engineer</h1>
                </div>
                <div className={styles.headerButton}>
                    <button>Let's talk</button>
                </div>
            </header>

            <main>
                <div className={styles.notchWrapperAboutMe}>
                    <div className={styles.notchAboutMe}></div>
                </div>
                <div className={styles.aboutMeContent}>
                    <button>About me</button>
                    <h2>Explore my career and vision</h2>
                </div>
            </main>

            <section className={styles.projectsSection}>
                <div className={styles.projectsContent}>
                    <h3>Get a glance of my work</h3>
                    <button>Projects</button>
                </div>
                <div className={styles.notchWrapperProjects}>
                    <div className={styles.notchProjects}></div>
                </div>
            </section>

            <section className={styles.contactMeSection}>
                <h4>Get in touch</h4>
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