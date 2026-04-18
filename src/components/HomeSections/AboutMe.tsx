import styles from './AboutMe.module.css';

const AboutMe = () => {
    return (
        <main>
            <div className={styles.notchWrapperAboutMe}>
                <div className={styles.notchAboutMe}></div>
            </div>
            <div className={styles.aboutMeContent}>
                <button>About me</button>
                <h2>Explore my career and vision</h2>
            </div>
        </main>
    );
};

export default AboutMe;
