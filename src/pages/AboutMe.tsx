import React from 'react';
import styles from './AboutMe.module.css';
import Footer from '../components/Footer';

const AboutMe = ():React.ReactElement => {
    return (
        <div className={styles.aboutMe}>
            <div className={styles.aboutMeHeader}>
                <div className={styles.sectionWrapper}>
                    <h1>Hello!</h1>
                    <p>I'm Isaac a software engineer</p>
                </div>
            </div>
            <div className={styles.aboutMeCareer}>
                <div className={styles.sectionWrapper}>
                    <h2>Career</h2>
                    <ul className={styles.careerHistory}>
                        <li className={styles.careerHistoryItem}>
                            <p>3Pillar Global Inc.</p>
                            <p>Apprentice Software Engineer</p>
                            <p>2021 - 2022</p>
                        </li>
                        <li className={styles.careerHistoryItem}>
                            <p>3Pillar Global Inc.</p>
                            <p>Software Engineer I</p>
                            <p>2022 - 2024</p>
                        </li>
                        <li className={styles.careerHistoryItem}>
                            <p>Coming Soon...</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={styles.aboutMeSkills}>
                <div className={styles.sectionWrapper}>
                    <h3>Skills</h3>
                    <div className={styles.skillsWrapper}>
                        <div className={styles.skillsGroup}>
                            <p>SkillSetTitle</p>
                            <div></div>
                        </div>
                        <div className={styles.skillsGroup}>
                            <p>SkillSetTitle</p>
                            <div></div>
                        </div>
                        <div className={styles.skillsGroup}>
                            <p>SkillSetTitle</p>
                            <div></div>
                        </div>
                        <div className={styles.skillsGroup}>
                            <p>SkillSetTitle</p>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.aboutMeCertifications}>
                <div className={styles.sectionWrapper}>
                    <h4>Certifications</h4>
                    <div className={styles.certificationsWrapper}>
                        <div className={styles.certificationItem}>
                            <p>Certification title</p>
                        </div>
                        <div className={styles.certificationItem}>
                            <p>Certification title</p>
                        </div>
                        <div className={styles.certificationItem}>
                            <p>Certification title</p>
                        </div>
                        <div className={styles.certificationItem}>
                            <p>Certification title</p>
                        </div>
                        <div className={styles.certificationItem}>
                            <p>Certification title</p>
                        </div>
                        <div className={styles.certificationItem}>
                            <p>Certification title</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default AboutMe
