import React from 'react';
import styles from './AboutMe.module.css';
import Footer from '../components/Footer';

import {
    aboutMeInfo,
    careerData, 
    languagesData,
    frameworksAndLibrariesData,
    testingFrameworksAndToolsData,
    databasesData,
    toolsAndPlatformsData,
    methodologiesData,
    designAndPrototype,
    certificationsData,

} from '../softwareEngineerInfoResources/softwareEngineerInfo';

import type { Certification, Skill } from '../softwareEngineerInfoResources/softwareEngineerInfo';

const AboutMe = ():React.ReactElement => {

    const skillsIconRenderer = (skillsData: Skill[]) => {
        return skillsData.map(skillItem => {
            const IconComponent = skillItem.icon;

            return (
                <li key={skillItem.id} className={styles.skillIconWrapper}>
                    <IconComponent className={styles.skillIcon}/>
                    <p>{skillItem.iconLabel}</p>
                </li>
            )
        })
    };

    const certificationsRenderer = (certificationsData: Certification[]) => {
        return certificationsData.map(certificationItem => {
            const IconComponent = certificationItem.icon;

            return (
                <li key={certificationItem.id} className={styles.certificationItem}>
                    <IconComponent className={styles.certificationItemIcon}/>
                    <div className={styles.certificationItemInfo}>
                        <p>{certificationItem.certificationName}</p>
                        <p>{certificationItem.instituteName}</p>
                        <p>{certificationItem.issued}</p>
                    </div>
                </li>
            )
        })
    };

    return (
        <div className={styles.aboutMe}>
            <div className={styles.aboutMeHeader}>
                <div className={styles.sectionWrapper}>
                    <h1>Hello!</h1>
                    <p>{aboutMeInfo}</p>
                </div>
            </div>
            <div className={styles.aboutMeCareer}>
                <div className={styles.sectionWrapper}>
                    <h2>Career</h2>
                    <ul className={styles.careerHistory}>
                        {
                            careerData.map(careerItem => (
                                <li key={careerItem.id} className={styles.careerHistoryItem}>
                                    <p>{careerItem.companyName}</p>
                                    <p>{careerItem.roleName}</p>
                                    <p>{careerItem.yearsOfExperience}</p>
                                </li>
                            ))
                        }
                        <li className={styles.careerHistoryItem}>
                            <p>Coming Soon ...</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={styles.aboutMeSkills}>
                <div className={styles.sectionWrapper}>
                    <h3>Skills</h3>
                    <div className={styles.skillsWrapper}>
                        <div className={styles.skillsGroup}>
                            <p>Languages</p>
                            <ul className={styles.skillsGroupIcons}>
                                { skillsIconRenderer(languagesData) }
                            </ul>
                        </div>
                        <div className={styles.skillsGroup}>
                            <p>Frameworks and Libraries</p>
                            <ul className={styles.skillsGroupIcons}>
                                { skillsIconRenderer(frameworksAndLibrariesData) }
                            </ul>
                        </div>
                        <div className={styles.skillsGroup}>
                            <p>Testing Frameworks and Tools</p>
                            <ul className={styles.skillsGroupIcons}>
                                { skillsIconRenderer(testingFrameworksAndToolsData) }
                            </ul>
                        </div>
                        <div className={styles.skillsGroup}>
                            <p>Databases</p>
                            <ul className={styles.skillsGroupIcons}>
                                { skillsIconRenderer(databasesData) }
                            </ul>
                        </div>
                        <div className={styles.skillsGroup}>
                            <p>Tools and Platforms</p>
                            <ul className={styles.skillsGroupIcons}>
                                { skillsIconRenderer(toolsAndPlatformsData) }
                            </ul>
                        </div>
                        <div className={styles.skillsGroup}>
                            <p>Methodologies</p>
                            <ul className={styles.skillsGroupIcons}>
                                { skillsIconRenderer(methodologiesData) }
                            </ul>
                        </div>
                        <div className={styles.skillsGroup}>
                            <p>Design and Prototype</p>
                            <ul className={styles.skillsGroupIcons}>
                                { skillsIconRenderer(designAndPrototype) }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.aboutMeCertifications}>
                <div className={styles.sectionWrapper}>
                    <h4>Certifications</h4>
                    <ul className={styles.certificationsWrapper}>
                        { certificationsRenderer(certificationsData) }
                    </ul>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default AboutMe
